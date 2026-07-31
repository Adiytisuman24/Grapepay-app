import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ShieldCheck, Delete } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R } from '../../core/theme'

export const Login: React.FC = () => {
  const nav = useNavigate()
  const [mobile, setMobile] = useState('')
  
  const press = (d: string) => {
    if (d === 'del') {
      setMobile(m => m.slice(0, -1))
    } else if (mobile.length < 10) {
      setMobile(m => m + d)
    }
  }

  const formatMobile = (m: string) => {
    let res = ''
    for (let i = 0; i < 10; i++) {
      if (i === 5) res += ' '
      res += m[i] || ''
    }
    return res
  }

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 24px' }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -8 }}><ChevronLeft size={24} color={C.text} /></button>
      </div>
      
      <div style={{ padding: '0 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>Enter your mobile number</h1>
          <p style={{ fontSize: 14, color: C.text2, fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>We will send you an OTP to<br/>verify your number</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1.5px solid ${mobile.length === 10 ? C.primary : C.border}`, borderRadius: R.lg, padding: '0 16px', height: 56, background: C.surface, marginTop: 32, transition: 'border-color 0.15s' }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text, paddingRight: 16, borderRight: `1.5px solid ${C.divider}`, marginRight: 16 }}>+91</span>
          <div style={{ flex: 1, fontSize: 18, fontWeight: 700, color: mobile ? C.text : C.text3, letterSpacing: '0.1em' }}>
            {mobile ? formatMobile(mobile) : '98765 43210'}
          </div>
        </div>

        <Btn fullWidth onClick={() => nav('/otp')} disabled={mobile.length < 10} style={{ marginTop: 24, padding: '16px' }}>Continue</Btn>

        <div style={{ marginTop: 'auto', marginBottom: 24 }}>
          {/* Custom Dialpad */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: '0 24px' }}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', 'del'].map((d) => (
              <button key={d} onClick={() => press(d)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 64, fontSize: 24, fontWeight: 600, color: C.text, borderRadius: '50%' }}>
                {d === 'del' ? <Delete size={24} /> : d}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 32 }}>
            <ShieldCheck size={16} color={C.success} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.success }}>Secure &amp; Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  )
}
