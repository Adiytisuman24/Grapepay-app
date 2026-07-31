import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, TrendingUp, TrendingDown, Info, RefreshCw } from 'lucide-react'
import { C, R, S } from '../../core/theme'

const factors = [
  { label: 'Payment History', status: 'Excellent', pct: 98, color: '#12A150' },
  { label: 'Credit Utilization', status: 'Good', pct: 73, color: '#12A150' },
  { label: 'Credit Age', status: 'Fair', pct: 52, color: '#F5A623' },
  { label: 'Credit Enquiries', status: 'Good', pct: 80, color: '#12A150' },
  { label: 'Account Mix', status: 'Excellent', pct: 92, color: '#12A150' },
]

const changes = [
  { type: 'up', text: 'Credit card utilization dropped 42% → 27%' },
  { type: 'up', text: 'All payments made on time' },
  { type: 'down', text: '1 new credit enquiry this month' },
]

export const Cibil: React.FC = () => {
  const nav = useNavigate()
  const score = 782
  const circumference = 251
  const filled = circumference * ((score - 300) / 600)

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 16px', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.text} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>CIBIL Score</h1>
        <button style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <RefreshCw size={18} color={C.primary} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>

        {/* Score Card */}
        <div className="animate-scale-in" style={{ background: C.surface, borderRadius: R.xl, padding: '32px 24px 24px', textAlign: 'center', border: `1px solid ${C.border}`, boxShadow: S.md }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.text2, textTransform: 'uppercase', letterSpacing: 1 }}>Powered by TransUnion</p>
          <div style={{ position: 'relative', display: 'inline-block', marginTop: 12 }}>
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none" stroke={C.divider} strokeWidth="16" strokeLinecap="round" />
              <path d="M 20 110 A 80 80 0 0 1 180 110" fill="none"
                stroke="url(#scoreGradMain)" strokeWidth="16" strokeLinecap="round"
                strokeDasharray={circumference} strokeDashoffset={circumference - filled}
                style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
              <defs>
                <linearGradient id="scoreGradMain" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF4B55" />
                  <stop offset="40%" stopColor="#F5A623" />
                  <stop offset="100%" stopColor="#12A150" />
                </linearGradient>
              </defs>
              <text x="18" y="118" fontSize="10" fill={C.text3} fontWeight="700">300</text>
              <text x="164" y="118" fontSize="10" fill={C.text3} fontWeight="700">900</text>
            </svg>
            <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 44, fontWeight: 800, color: C.text, fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>{score}</span>
            </div>
          </div>
          <p style={{ fontSize: 18, fontWeight: 800, color: C.success, marginTop: 4 }}>Excellent</p>
          <p style={{ fontSize: 14, color: C.success, fontWeight: 600, marginTop: 4 }}>↑ +12 pts this month</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 16, padding: '8px 16px', borderRadius: R.pill, background: C.lavender }}>
            <Info size={14} color={C.primary} />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.primary }}>Last updated: 31 Jul 2024</span>
          </div>
        </div>

        {/* Full Report CTA */}
        <button className="animate-slide-up animate-delay-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', marginTop: 16, padding: '16px', borderRadius: R.xl, background: C.grad, color: '#fff', fontSize: 16, fontWeight: 800, fontFamily: 'Outfit, sans-serif', boxShadow: S.primary }}>
          View Full Report
        </button>

        {/* Score Factors */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 12, fontFamily: 'Outfit, sans-serif' }}>Score Factors</p>
        <div className="animate-slide-up animate-delay-2" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, overflow: 'hidden' }}>
          {factors.map((f, i) => (
            <div key={f.label} style={{ padding: '16px 20px', borderBottom: i < factors.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{f.label}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: f.color }}>{f.status}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: C.divider, overflow: 'hidden' }}>
                <div style={{ width: `${f.pct}%`, height: '100%', background: f.color, borderRadius: 4, transition: 'width 1s ease' }} />
              </div>
            </div>
          ))}
        </div>

        {/* What Changed */}
        <p className="animate-slide-up animate-delay-3" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 12, fontFamily: 'Outfit, sans-serif' }}>What Changed?</p>
        <div className="animate-slide-up animate-delay-3" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '8px 20px' }}>
          {changes.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 0', borderBottom: i < changes.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: c.type === 'up' ? C.successBg : C.warningBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                {c.type === 'up' ? <TrendingUp size={15} color={C.success} /> : <TrendingDown size={15} color={C.warning} />}
              </div>
              <span style={{ fontSize: 14, color: C.text, fontWeight: 500, lineHeight: 1.5 }}>{c.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
