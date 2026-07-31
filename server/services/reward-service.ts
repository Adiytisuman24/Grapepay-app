import { LedgerService } from './ledger-service';

export interface Reward {
  id: string;
  userId: string;
  sourceType: string;
  sourceId: string;
  amount: number;
  status: 'CREDITED' | 'PENDING';
  createdAt: string;
}

const rewards: Reward[] = [];

export const RewardService = {
  calculateReward: (userId: string, paymentId: string, amount: number) => {
    // Basic mock logic: 1% cashback capped at ₹20, minimum 1 rupee
    let cashback = Math.floor(amount * 0.01);
    if (cashback > 20) cashback = 20;
    
    if (cashback > 0) {
      const rewardId = `rew_${Date.now()}`;
      rewards.push({
        id: rewardId,
        userId,
        sourceType: 'PAYMENT',
        sourceId: paymentId,
        amount: cashback,
        status: 'CREDITED',
        createdAt: new Date().toISOString()
      });
      
      // Debit GrapePay Cashback account, Credit User account
      LedgerService.recordDoubleEntry(
        rewardId,
        'acc_grapepay_cashback_liability',
        `acc_user_${userId}_rewards`,
        cashback
      );
      
      console.log(`[Reward] Granted ₹${cashback} to user ${userId} for payment ${paymentId}`);
      return cashback;
    }
    
    return 0;
  },
  
  getUserRewards: (userId: string) => {
    return rewards.filter(r => r.userId === userId);
  }
};
