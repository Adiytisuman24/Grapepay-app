// Ledger Service
export interface LedgerEntry {
  id: string;
  transactionId: string;
  accountId: string;
  direction: 'CREDIT' | 'DEBIT';
  amount: number;
  currency: string;
  createdAt: string;
}

const entries: LedgerEntry[] = [];

export const LedgerService = {
  recordDoubleEntry: (
    transactionId: string, 
    debitAccountId: string, 
    creditAccountId: string, 
    amount: number, 
    currency: string = 'INR'
  ) => {
    const timestamp = new Date().toISOString();
    
    // Create debit
    entries.push({
      id: `led_${Date.now()}_d`,
      transactionId,
      accountId: debitAccountId,
      direction: 'DEBIT',
      amount,
      currency,
      createdAt: timestamp
    });
    
    // Create credit
    entries.push({
      id: `led_${Date.now()}_c`,
      transactionId,
      accountId: creditAccountId,
      direction: 'CREDIT',
      amount,
      currency,
      createdAt: timestamp
    });
    
    console.log(`[Ledger] Recorded ${amount} ${currency}: ${debitAccountId} (DR) -> ${creditAccountId} (CR)`);
  },
  
  getBalance: (accountId: string): number => {
    return entries
      .filter(e => e.accountId === accountId)
      .reduce((sum, e) => {
        return sum + (e.direction === 'CREDIT' ? e.amount : -e.amount);
      }, 0);
  }
};
