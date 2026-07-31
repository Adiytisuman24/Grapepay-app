import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrapepayLogo } from '../../core/widgets/Logo'
import { Btn } from '../../core/widgets/Btn'
import { C } from '../../core/theme'

export const Splash: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* 3D Illustration Area (simulated with emojis & css) */}
      <div style={{ flex: 1, width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', fontSize: 40, animation: 'float 3s ease-in-out infinite' }}>🎁</div>
        <div style={{ position: 'absolute', top: '25%', right: '15%', fontSize: 40, animation: 'float 4s ease-in-out infinite reverse' }}>💰</div>
        <div style={{ position: 'absolute', bottom: '10%', left: '20%', fontSize: 40, animation: 'float 3.5s ease-in-out infinite' }}>💳</div>
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', fontSize: 40, animation: 'float 4.5s ease-in-out infinite reverse' }}>🎫</div>
        
        {/* Phone frame mockup */}
        <div style={{ width: 140, height: 280, borderRadius: 24, border: `6px solid ${C.grad}`, background: C.surface, position: 'relative', zIndex: 10, boxShadow: '0 20px 40px rgba(91,22,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <GrapepayLogo size={48} />
        </div>
      </div>

      <div style={{ padding: '0 32px 48px', textAlign: 'center', width: '100%' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>Welcome to<br/><span style={{ color: C.primary }}>GrapePay</span></h1>
        <p style={{ fontSize: 14, color: C.text2, fontWeight: 500, marginTop: 12, lineHeight: 1.5 }}>The all-in-one app for payments,<br/>rewards, travel, loans &amp; more.</p>
        
        <Btn fullWidth onClick={() => nav('/auth')} style={{ marginTop: 32 }}>Get Started</Btn>
        <p style={{ fontSize: 13, color: C.text2, marginTop: 24, fontWeight: 500 }}>Already have an account? <span style={{ color: C.primary, fontWeight: 700 }}>Login</span></p>
      </div>

      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}`}</style>
    </div>
  )
}
