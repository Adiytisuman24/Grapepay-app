import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ShieldCheck, Delete } from 'lucide-react'
import { C, R } from '../../core/theme'

export const Otp: React.FC = () => {
  const nav = useNavigate()
  const [otp, setOtp] = useState('')
  
  const press = (d: string) => {
    if (d === 'del') {
      setOtp(o => o.slice(0, -1))
    } else if (otp.length < 6) {
      setOtp(o => {
        const newOtp = o + d
        if (newOtp.length === 6) setTimeout(() => nav('/bank-setup'), 300)
        return newOtp
      })
    }
  }

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 24px' }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -8 }}><ChevronLeft size={24} color={C.text} /></button>
      </div>
      
      <div style={{ padding: '0 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>Verify OTP</h1>
          <p style={{ fontSize: 14, color: C.text2, fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>Enter the 6-digit OTP sent to<br/><span style={{ fontWeight: 700, color: C.text }}>+91 98765 43210</span></p>
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 40 }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ width: 44, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: C.text, border: `1.5px solid ${otp.length === i ? C.primary : otp[i] ? C.border : C.divider}`, borderRadius: 12, background: otp.length === i ? C.lavender : C.surface, transition: 'all 0.15s' }}>
              {otp[i] || ''}
            </div>
          ))}
        </div>
        
        <p style={{ textAlign: 'center', fontSize: 13, color: C.text2, marginTop: 32, fontWeight: 500 }}>Resend OTP in 00:25</p>

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
