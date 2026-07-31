import { RewardService } from './reward-service';
import { LedgerService } from './ledger-service';

export type PaymentStatus = 'CREATED' | 'VALIDATED' | 'AUTH_REQUIRED' | 'AUTHORIZED' | 'PROCESSING' | 'SUCCESS' | 'FAILED';

export interface Payment {
  id: string;
  userId: string;
  payeeVpa: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: string;
}

const payments: Map<string, Payment> = new Map();
const idempotencyMap: Map<string, string> = new Map(); // idempotencyKey -> paymentId

export const PaymentService = {
  createPayment: (userId: string, payeeVpa: string, amount: number, idempotencyKey: string) => {
    if (idempotencyMap.has(idempotencyKey)) {
      const existingId = idempotencyMap.get(idempotencyKey)!;
      return payments.get(existingId);
    }

    const paymentId = `pay_${Date.now()}`;
    const payment: Payment = {
      id: paymentId,
      userId,
      payeeVpa,
      amount,
      currency: 'INR',
      status: 'CREATED',
      createdAt: new Date().toISOString()
    };
    
    payments.set(paymentId, payment);
    idempotencyMap.set(idempotencyKey, paymentId);
    
    return payment;
  },
  
  processPayment: (paymentId: string) => {
    const payment = payments.get(paymentId);
    if (!payment) throw new Error('Payment not found');
    
    // Simulate state machine transitions
    payment.status = 'VALIDATED';
    console.log(`[Payment] ${paymentId} validated`);
    
    payment.status = 'AUTH_REQUIRED';
    console.log(`[Payment] ${paymentId} auth required`);
    
    payment.status = 'AUTHORIZED';
    console.log(`[Payment] ${paymentId} authorized`);
    
    payment.status = 'PROCESSING';
    console.log(`[Payment] ${paymentId} processing`);
    
    // Simulate success
    payment.status = 'SUCCESS';
    console.log(`[Payment] ${paymentId} SUCCESS`);
    
    // Record ledger
    LedgerService.recordDoubleEntry(
      paymentId,
      `acc_user_${payment.userId}_bank`,
      `acc_merchant_${payment.payeeVpa}`,
      payment.amount
    );
    
    // Trigger reward evaluation
    const reward = RewardService.calculateReward(payment.userId, paymentId, payment.amount);
    
    return { payment, reward };
  },
  
  getPayment: (paymentId: string) => {
    return payments.get(paymentId);
  },

  getAllPayments: (userId: string) => {
    return Array.from(payments.values()).filter(p => p.userId === userId).sort((a,b) => b.createdAt.localeCompare(a.createdAt));
  }
};
