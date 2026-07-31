export interface Txn {
  id: string
  name: string
  subtitle: string
  amount: number
  date: string
  time: string
  type: 'sent' | 'received' | 'reward' | 'pending' | 'failed'
  cashback?: number
  bank?: string
  upiId?: string
  category?: string
  emoji?: string
  txnCategory?: 'payment' | 'bill' | 'travel' | 'reward'
}

export const user = { name: 'Suman', fullName: 'Suman Kumar', mobile: '+91 98765 43210', upiId: 'suman@grapepay', greeting: 'Good morning' }

export const banks = [
  { id: 'b1', name: 'HDFC Bank', num: '•••• 4821', upiId: 'suman@hdfc', primary: true, color: '#004C8F', balance: 82420 },
  { id: 'b2', name: 'ICICI Bank', num: '•••• 8291', upiId: 'suman@icici', primary: false, color: '#F4811F', balance: 24830 },
]

export const paymentMethods = [
  { id: 'pm1', label: 'HDFC Bank •••• 4821', sub: 'UPI', color: '#004C8F', abbr: 'HD', recommended: true },
  { id: 'pm2', label: 'RuPay Credit Card •••• 1234', sub: 'Available ₹64,200', color: '#C41C24', abbr: 'RC', recommended: false },
  { id: 'pm3', label: 'Credit Line', sub: 'Available ₹45,000', color: '#5B16D8', abbr: 'CL', recommended: false },
  { id: 'pm4', label: 'UPI Lite', sub: 'Balance ₹842', color: '#12A150', abbr: 'UL', recommended: false },
]

export const txns: Txn[] = [
  { id: 't1', name: 'Third Wave Coffee', subtitle: 'Today · 11:42 AM', amount: 850, date: '31 Jul 2026', time: '11:42 AM', type: 'sent', cashback: 12, bank: 'HDFC Bank •••• 4821', upiId: 'thirdwave@payu', category: 'Food & Beverage', emoji: '☕', txnCategory: 'payment' },
  { id: 't2', name: 'Rahul Sharma', subtitle: 'Today · 10:15 AM', amount: 1200, date: '31 Jul 2026', time: '10:15 AM', type: 'sent', bank: 'HDFC Bank •••• 4821', upiId: 'rahul@oksbi', category: 'Person', emoji: '👤', txnCategory: 'payment' },
  { id: 't3', name: 'Jio Mobile Recharge', subtitle: 'Today · 08:15 AM', amount: 699, date: '31 Jul 2026', time: '08:15 AM', type: 'sent', cashback: 5, bank: 'HDFC Bank •••• 4821', upiId: 'jio@payu', category: 'Recharge', emoji: '📱', txnCategory: 'bill' },
  { id: 't4', name: 'IndiGo Flight', subtitle: 'Yesterday · 08:40 PM', amount: 5420, date: '30 Jul 2026', time: '08:40 PM', type: 'sent', cashback: 85, bank: 'HDFC Bank •••• 4821', upiId: 'indigo@payu', category: 'Travel', emoji: '✈️', txnCategory: 'travel' },
  { id: 't5', name: 'Swiggy', subtitle: 'Yesterday · 07:15 PM', amount: 340, date: '30 Jul 2026', time: '07:15 PM', type: 'sent', cashback: 10, bank: 'HDFC Bank •••• 4821', upiId: 'swiggy@payu', category: 'Food & Beverage', emoji: '🍔', txnCategory: 'payment' },
  { id: 't6', name: 'Electricity Bill', subtitle: 'Yesterday · 06:30 PM', amount: 1842, date: '30 Jul 2026', time: '06:30 PM', type: 'sent', cashback: 18, bank: 'HDFC Bank •••• 4821', upiId: 'bescom@bbps', category: 'Bill', emoji: '⚡', txnCategory: 'bill' },
  { id: 't7', name: 'Akshay Kumar', subtitle: '29 Jul 2026', amount: 800, date: '29 Jul 2026', time: '3:20 PM', type: 'received', bank: 'ICICI Bank •••• 8291', upiId: 'akshay@okicici', category: 'Person', emoji: '👤', txnCategory: 'payment' },
  { id: 't8', name: 'Grape Cashback', subtitle: '28 Jul 2026', amount: 25, date: '28 Jul 2026', time: '9:00 AM', type: 'reward', category: 'Reward', emoji: '🍇', txnCategory: 'reward' },
]

export const rewards = [
  { id: 'r1', merchant: 'Third Wave Coffee', amount: 12, date: '31 Jul', status: 'credited' },
  { id: 'r2', merchant: 'Swiggy', amount: 10, date: '30 Jul', status: 'credited' },
  { id: 'r3', merchant: 'IndiGo Flight', amount: 85, date: '30 Jul', status: 'credited' },
  { id: 'r4', merchant: 'Electricity Bill', amount: 18, date: '30 Jul', status: 'credited' },
]

export const contacts = [
  { id: 'c1', name: 'Rahul', upiId: 'rahul@oksbi', emoji: '🧑' },
  { id: 'c2', name: 'Priya', upiId: 'priya@okhdfc', emoji: '👩' },
  { id: 'c3', name: 'Mom', upiId: 'mom@okhdfcbank', emoji: '👩' },
  { id: 'c4', name: 'Ankit', upiId: 'ankit@okaxis', emoji: '🧑' },
  { id: 'c5', name: 'Riya', upiId: 'riya@okaxis', emoji: '👩' },
  { id: 'c6', name: 'Arjun', upiId: 'arjun@okhdfcbank', emoji: '🧑' },
]

export const merchant = {
  name: 'Third Wave Coffee',
  category: 'Food & Beverage',
  upiId: 'thirdwave@payu',
  verified: true,
  emoji: '☕',
}

export const bills = [
  { id: 'bl1', name: 'Jio Mobile', icon: '📱', amount: 699, dueIn: 4, color: '#0066FF' },
  { id: 'bl2', name: 'BESCOM Electricity', icon: '⚡', amount: 1842, dueIn: 1, color: '#F5A623' },
]

export const loans = [
  { id: 'l1', name: 'Personal Loan', outstanding: 164220, emi: 9487, nextDue: '12 Aug', paid: 8, total: 24 },
]

export const fmt = (n: number) => n.toLocaleString('en-IN')
