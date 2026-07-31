import React from 'react'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

export const Failed: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16, textAlign: 'center' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.errorBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <X size={44} color={C.error} strokeWidth={3} />
      </div>
      <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text }}>Payment failed</h1>
      <p style={{ fontSize: 15, color: C.text2, lineHeight: 1.5, maxWidth: 280 }}>₹850 wasn't debited from your account. Please try again.</p>
      <div style={{ padding: 16, borderRadius: R.lg, background: C.bg, border: `1px solid ${C.border}`, width: '100%', marginTop: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 14, color: C.text2 }}>Amount</span><span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>₹850</span></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}><span style={{ fontSize: 14, color: C.text2 }}>Status</span><span style={{ fontSize: 14, fontWeight: 700, color: C.error }}>Failed</span></div>
      </div>
      <Btn fullWidth onClick={() => nav('/scan')}>Try again</Btn>
      <button onClick={() => nav('/profile/support')} style={{ fontSize: 14, fontWeight: 600, color: C.text2, padding: 8 }}>Get help</button>
    </div>
  )
}
