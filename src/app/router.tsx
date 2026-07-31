import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './AppShell'
import { Splash } from '../features/onboarding/Splash'
import { Login } from '../features/auth/Login'
import { Otp } from '../features/auth/Otp'
import { BankSetup } from '../features/onboarding/BankSetup'
import { Home } from '../features/home/Home'
import { Money } from '../features/money/Money'
import { Scanner } from '../features/scanner/Scanner'
import { Payment } from '../features/payments/Payment'
import { Processing } from '../features/payments/Processing'
import { Success } from '../features/payments/Success'
import { RewardReveal } from '../features/payments/RewardReveal'
import { Rewards } from '../features/rewards/Rewards'
import { Activity } from '../features/activity/Activity'
import { TxnDetail } from '../features/transaction/TxnDetail'
import { Profile } from '../features/profile/Profile'
import { BankAccounts } from '../features/bank_accounts/BankAccounts'
import { MyQr } from '../features/profile/MyQr'
import { PayContact } from '../features/payments/PayContact'
import { PayMobile } from '../features/payments/PayMobile'
import { BankTransfer } from '../features/payments/BankTransfer'
import { Referrals } from '../features/referrals/Referrals'
import { Support } from '../features/support/Support'
import { Pending } from '../features/payments/Pending'
import { Failed } from '../features/payments/Failed'
import { Recharge } from '../features/recharge/Recharge'
import { Cibil } from '../features/credit/Cibil'
import { Loans } from '../features/loans/Loans'
import { Travel } from '../features/travel/Travel'
import { Flights } from '../features/travel/Flights'
import { Trip } from '../features/travel/Trip'

export const router = createBrowserRouter([
  { path: '/', element: <Splash /> },
  { path: '/auth', element: <Login /> },
  { path: '/otp', element: <Otp /> },
  { path: '/bank-setup', element: <BankSetup /> },
  {
    element: <AppShell />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/money', element: <Money /> },
      { path: '/rewards', element: <Rewards /> },
      { path: '/activity', element: <Activity /> },
      { path: '/activity/:id', element: <TxnDetail /> },
      { path: '/profile', element: <Profile /> },
      { path: '/profile/banks', element: <BankAccounts /> },
      { path: '/profile/my-qr', element: <MyQr /> },
      { path: '/profile/referrals', element: <Referrals /> },
      { path: '/profile/support', element: <Support /> },
      { path: '/scan', element: <Scanner /> },
      { path: '/payment', element: <Payment /> },
      { path: '/processing', element: <Processing /> },
      { path: '/success', element: <Success /> },
      { path: '/reward', element: <RewardReveal /> },
      { path: '/pay-contact', element: <PayContact /> },
      { path: '/pay-mobile', element: <PayMobile /> },
      { path: '/bank-transfer', element: <BankTransfer /> },
      { path: '/pending', element: <Pending /> },
      { path: '/failed', element: <Failed /> },
      { path: '/recharge', element: <Recharge /> },
      { path: '/cibil', element: <Cibil /> },
      { path: '/loans', element: <Loans /> },
      { path: '/travel', element: <Travel /> },
      { path: '/flights', element: <Flights /> },
      { path: '/trip', element: <Trip /> },
    ],
  },
])
