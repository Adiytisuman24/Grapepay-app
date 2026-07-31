import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Copy, Share2, Users, CheckCircle, ChevronRight } from 'lucide-react'
import { C, R, S } from '../../core/theme'
import { user } from '../../core/data'

const steps = [
  { icon: '📤', title: 'Share your code', desc: 'Send your referral link to friends' },
  { icon: '✅', title: 'Friend joins GrapePay', desc: 'They sign up and add a bank account' },
  { icon: '💸', title: 'Both earn rewards', desc: 'You get ₹100, they get ₹50 cashback' },
]

const referrals = [
  { name: 'Rahul S.', status: 'Joined', reward: '₹100', date: '28 Jul' },
  { name: 'Priya M.', status: 'Pending', reward: '—', date: '30 Jul' },
]

export const Referrals: React.FC = () => {
  const nav = useNavigate()
  const code = 'SUMAN100'

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 16px', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.text} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Invite Friends</h1>
        <div style={{ width: 36 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>
        
        {/* Hero Card */}
        <div className="animate-scale-in" style={{ borderRadius: R.xl, background: C.gradDark, padding: '28px 24px', color: '#fff', boxShadow: S.primaryLg, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
          <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
          <div style={{ fontSize: 48, marginBottom: 8 }}>🎁</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>Invite Friends,<br/>Earn ₹100 each!</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginTop: 10, lineHeight: 1.5 }}>Your friend gets ₹50 on their first payment.<br/>You earn ₹100 when they transact.</p>

          {/* Referral Code Box */}
          <div style={{ marginTop: 24, padding: '14px 16px', borderRadius: R.lg, background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px dashed rgba(255,255,255,0.4)' }}>
            <div>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Your Code</p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: 2, fontFamily: 'Outfit, sans-serif', marginTop: 2 }}>{code}</p>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: R.lg, background: '#fff', color: C.primary, fontWeight: 700, fontSize: 14 }}>
              <Copy size={16} /> Copy
            </button>
          </div>

          <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', marginTop: 14, padding: '15px', borderRadius: R.lg, background: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 700, fontSize: 15 }}>
            <Share2 size={18} /> Share Invite Link
          </button>
        </div>

        {/* How it works */}
        <p className="animate-slide-up animate-delay-1" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>How it works</p>
        <div className="animate-slide-up animate-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 0, background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderBottom: i < steps.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{s.title}</p>
                <p style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Your Referrals */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>Your Referrals</p>
        <div className="animate-slide-up animate-delay-2" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>
          {referrals.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: i < referrals.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: C.primary }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{r.name}</p>
                  <p style={{ fontSize: 12, marginTop: 2, color: r.status === 'Joined' ? C.success : C.warning, fontWeight: 700 }}>{r.status} · {r.date}</p>
                </div>
              </div>
              <p style={{ fontSize: 15, fontWeight: 800, color: r.reward !== '—' ? C.primary : C.text3 }}>{r.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
