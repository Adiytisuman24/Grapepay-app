import React, { useState } from 'react'
import { Smartphone } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

export const PayMobile: React.FC = () => {
  const [mobile, setMobile] = useState('')
  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Pay via Mobile" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Smartphone size={32} color={C.primary} />
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 16 }}>Enter mobile number</h2>
          <p style={{ fontSize: 14, color: C.text2, marginTop: 4, textAlign: 'center' }}>We'll find the UPI ID linked to this number</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 32 }}>
          <span style={{ fontSize: 22, fontWeight: 600, color: C.text2 }}>+91</span>
          <input value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))} inputMode="numeric" placeholder="98765 43210" style={{ fontSize: 28, fontWeight: 700, color: C.text, textAlign: 'center', width: 200, letterSpacing: '0.05em' }} />
        </div>
      </div>
      <div style={{ padding: '0 24px 24px' }}>
        <Btn fullWidth disabled={mobile.length < 10} onClick={() => { /* proceed */ }}>Continue</Btn>
      </div>
    </div>
  )
}
