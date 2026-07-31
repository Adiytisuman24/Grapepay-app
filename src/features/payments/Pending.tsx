import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

export const Pending: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16, textAlign: 'center' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.warningBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Clock size={44} color={C.warning} strokeWidth={2} />
      </div>
      <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text }}>Payment processing</h1>
      <p style={{ fontSize: 15, color: C.text2, lineHeight: 1.5, maxWidth: 280 }}>We're waiting for confirmation from your bank.<br /><strong style={{ color: C.text }}>Do not pay again yet.</strong></p>
      <div style={{ padding: 16, borderRadius: R.lg, background: C.bg, border: `1px solid ${C.border}`, width: '100%', marginTop: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 14, color: C.text2 }}>Amount</span><span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>₹850</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}><span style={{ fontSize: 14, color: C.text2 }}>Status</span><span style={{ fontSize: 14, fontWeight: 700, color: C.warning }}>Pending</span></div>
      </div>
      <Btn variant="secondary" fullWidth onClick={() => nav('/activity')}>Check status</Btn>
      <Btn fullWidth onClick={() => nav('/home')}>Back to Home</Btn>
    </div>
  )
}
