import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Check, Share2, LifeBuoy } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'
import { txns } from '../../core/data'

export const TxnDetail: React.FC = () => {
  const nav = useNavigate()
  const { id } = useParams()
  const txn = txns.find((t) => t.id === id) || txns[0]
  const isPending = txn.type === 'pending'
  const isFailed = txn.type === 'failed'

  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Transaction" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 12, gap: 6 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: isFailed ? C.errorBg : isPending ? C.warningBg : C.successBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isFailed ? <span style={{ fontSize: 28 }}>✕</span> : isPending ? <span style={{ fontSize: 28 }}>⏳</span> : <Check size={36} color={C.success} strokeWidth={3} />}
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: isFailed ? C.error : isPending ? C.warning : C.success, marginTop: 4 }}>{isFailed ? 'Payment failed' : isPending ? 'Payment processing' : 'Payment successful'}</p>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: C.text, marginTop: 4 }}>₹{txn.amount.toLocaleString('en-IN')}</h1>
          <p style={{ fontSize: 15, color: C.text2 }}>{txn.name}</p>
        </div>
        <div style={{ height: 1, background: C.divider, margin: '24px 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Row label="Paid from" value={txn.bank || 'HDFC Bank •••• 4821'} />
          <Row label="UPI Transaction ID" value="425871920182" />
          <Row label="GrapePay Transaction ID" value={`GP${txn.id.toUpperCase()}91021`} />
          {txn.cashback && <Row label="Cashback" value={`₹${txn.cashback}`} valueColor={C.primary} />}
          <Row label="Date" value={`${txn.date} · ${txn.time}`} />
          <Row label="Category" value={txn.category || '—'} />
        </div>
      </div>
      <div style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Btn variant="secondary" fullWidth>
          <Share2 size={18} /> Share receipt
        </Btn>
        <button onClick={() => nav('/profile/support')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 12, fontSize: 14, fontWeight: 600, color: C.text2 }}>
          <LifeBuoy size={16} /> Having trouble? Get help
        </button>
      </div>
    </div>
  )
}

const Row: React.FC<{ label: string; value: string; valueColor?: string }> = ({ label, value, valueColor }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
    <span style={{ fontSize: 14, color: C.text2, flexShrink: 0 }}>{label}</span>
    <span style={{ fontSize: 14, fontWeight: 600, color: valueColor || C.text, textAlign: 'right', wordBreak: 'break-word' }}>{value}</span>
  </div>
)
