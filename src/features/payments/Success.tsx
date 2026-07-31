import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Share2 } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'
import { merchant } from '../../core/data'

export const Success: React.FC = () => {
  const nav = useNavigate()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column', padding: '40px 24px 32px', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes pop { 0%{transform:scale(0.3);opacity:0} 60%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(100vh) rotate(720deg);opacity:0} }
        .confetti-piece { position:absolute; width:8px; height:8px; border-radius:2px; animation:confettiFall linear forwards; }
      `}</style>

      {/* Confetti */}
      {show && [
        { l:'10%', d:'0.2s', c:'#5B16D8' }, { l:'25%', d:'0.5s', c:'#8B20F5' },
        { l:'40%', d:'0.1s', c:'#F5A623' }, { l:'55%', d:'0.7s', c:'#12A150' },
        { l:'70%', d:'0.3s', c:'#FF4B55' }, { l:'85%', d:'0.6s', c:'#00B8D4' },
        { l:'15%', d:'0.9s', c:'#F5A623' }, { l:'60%', d:'0.4s', c:'#5B16D8' },
        { l:'80%', d:'0.2s', c:'#12A150' }, { l:'35%', d:'0.8s', c:'#FF4B55' },
      ].map((c, i) => (
        <div key={i} className="confetti-piece" style={{ left: c.l, top: 0, background: c.c, animationDuration: `${1.8 + i * 0.15}s`, animationDelay: c.d }} />
      ))}

      {/* Success icon */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <div style={{ animation: show ? 'pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' : 'none', opacity: 0 }}>
          <CheckCircle size={88} color="#12A150" strokeWidth={1.5} />
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: C.text, marginTop: 16, fontFamily: 'Outfit, sans-serif', animation: show ? 'slideUp 0.5s ease 0.3s both' : 'none', opacity: 0 }}>
          Payment Successful!
        </h1>
        <p style={{ fontSize: 18, color: C.text2, fontWeight: 600, animation: show ? 'slideUp 0.5s ease 0.35s both' : 'none', opacity: 0 }}>₹850</p>
        <p style={{ fontSize: 14, color: C.text2, marginTop: 4, animation: show ? 'slideUp 0.5s ease 0.4s both' : 'none', opacity: 0 }}>
          Paid to {merchant.name}
        </p>
        <p style={{ fontSize: 13, color: C.text3, marginTop: 4, animation: show ? 'slideUp 0.5s ease 0.45s both' : 'none', opacity: 0 }}>
          {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} · UPI
        </p>
      </div>

      {/* Cashback card */}
      <div style={{ borderRadius: R.xl, background: C.lavender, padding: '20px', textAlign: 'center', marginBottom: 20, animation: show ? 'slideUp 0.6s ease 0.5s both' : 'none', opacity: 0, border: `1px solid rgba(91,22,216,0.12)` }}>
        <span style={{ fontSize: 32 }}>🍇</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 10 }}>
          <div>
            <p style={{ fontSize: 13, color: C.text2, fontWeight: 600 }}>Grape Cashback Earned</p>
            <p style={{ fontSize: 32, fontWeight: 800, color: C.primary, fontFamily: 'Outfit, sans-serif', marginTop: 2 }}>₹12</p>
          </div>
        </div>
        <Btn variant="secondary" fullWidth onClick={() => nav('/rewards')} style={{ marginTop: 14 }}>View Rewards</Btn>
      </div>

      {/* Bottom actions */}
      <div style={{ display: 'flex', gap: 12, animation: show ? 'slideUp 0.6s ease 0.6s both' : 'none', opacity: 0 }}>
        <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '16px', borderRadius: R.lg, border: `1.5px solid ${C.border}`, fontSize: 15, fontWeight: 700, color: C.text, background: C.bg }}>
          <Share2 size={18} color={C.text} /> Share Receipt
        </button>
        <Btn fullWidth={false} onClick={() => nav('/home')} style={{ flex: 1, padding: '16px' }}>Done</Btn>
      </div>
    </div>
  )
}
