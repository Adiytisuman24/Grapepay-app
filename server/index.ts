import express from 'express';
import cors from 'cors';
import { PaymentService } from './services/payment-service';
import { HomeService } from './services/home-service';
import { RewardService } from './services/reward-service';
import { LedgerService } from './services/ledger-service';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/v1/home', (req, res) => {
  const userId = (req.headers['x-user-id'] as string) || 'default_user';
  const config = HomeService.getHomeConfiguration(userId);
  res.json(config);
});

app.post('/api/v1/payments', (req, res) => {
  const userId = (req.headers['x-user-id'] as string) || 'default_user';
  const idempotencyKey = req.headers['idempotency-key'] as string;
  const { payeeVpa, amount } = req.body;

  if (!idempotencyKey) {
    return res.status(400).json({ error: 'idempotency-key header required' });
  }

  try {
    const payment = PaymentService.createPayment(userId, payeeVpa, amount, idempotencyKey);
    const result = PaymentService.processPayment(payment.id);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/transactions', (req, res) => {
  const userId = (req.headers['x-user-id'] as string) || 'default_user';
  const txns = PaymentService.getAllPayments(userId);
  const rewards = RewardService.getUserRewards(userId);
  
  const combined = [
    ...txns.map(t => ({ ...t, _type: 'payment' })),
    ...rewards.map(r => ({ ...r, _type: 'reward' }))
  ].sort((a,b) => b.createdAt.localeCompare(a.createdAt));

  res.json(combined);
});

app.get('/api/v1/rewards/balance', (req, res) => {
    const userId = (req.headers['x-user-id'] as string) || 'default_user';
    const balance = LedgerService.getBalance(`acc_user_${userId}_rewards`);
    res.json({ balance });
});

app.listen(port, () => {
  console.log(`GrapePay API Gateway running on port ${port}`);
});
