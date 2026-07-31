import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, TrendingUp, TrendingDown, PieChart } from 'lucide-react'
import { C, R, S } from '../../core/theme'
import { banks, loans, fmt } from '../../core/data'

export const Money: React.FC = () => {
  const nav = useNavigate()
  const netWorth = banks.reduce((sum, b) => sum + b.balance, 0) - loans.reduce((sum, l) => sum + l.outstanding, 0)

  return (
    <div style={{ minHeight: '100%', background: C.bg }}>
      <style>{`@keyframes gaugeAnim{from{stroke-dashoffset:220}to{stroke-dashoffset:80}}`}</style>

      {/* Header */}
      <div style={{ background: C.gradDark, padding: '52px 20px 40px', borderBottomLeftRadius: 32, borderBottomRightRadius: 32, position: 'relative', overflow: 'hidden' }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', filter: 'blur(30px)' }} />
        
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: 0.5, textTransform: 'uppercase' }}>Net Snapshot</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
          <span style={{ fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: -1 }}>₹{fmt(248230)}</span>
        </div>
        
        <div className="glass-panel animate-scale-in" style={{ marginTop: 20, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingDown size={20} color="#12A150" />
            </div>
            <div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Spending Insights</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>You spent ₹4,280 less this month</p>
            </div>
          </div>
          <ChevronRight size={18} color="rgba(255,255,255,0.8)" />
        </div>
      </div>

      <div style={{ padding: '20px 20px 16px' }}>

        {/* Bank Accounts */}
        <div className="animate-slide-up animate-delay-1" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${C.divider}` }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Bank Accounts</span>
            <button onClick={() => nav('/profile/banks')} style={{ fontSize: 13, fontWeight: 600, color: C.primary }}>Manage</button>
          </div>
          {banks.map((b, i) => (
            <div key={b.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: i < banks.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>{b.name.slice(0, 2)}</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{b.name}</p>
                  <p style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>{b.num}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: C.text }}>₹{fmt(b.balance)}</span>
              </div>
            </div>
          ))}
          {/* Credit Card Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderTop: `1px solid ${C.divider}`, background: C.errorBg }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: '#C41C24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>RC</div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Credit Card •••• 1234</p>
                <p style={{ fontSize: 13, color: C.error, marginTop: 2, fontWeight: 600 }}>Due on 10 Aug</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 800, color: C.error }}>₹18,230</span>
            </div>
          </div>
        </div>

        {/* Credit Health */}
        <button onClick={() => nav('/cibil')} className="animate-slide-up animate-delay-2" style={{ marginTop: 20, width: '100%', background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '20px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.text, textTransform: 'uppercase', letterSpacing: 0.5 }}>Credit Health</span>
            </div>
            <p style={{ fontSize: 36, fontWeight: 800, color: C.text, lineHeight: 1 }}>782</p>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.success, marginTop: 4 }}>Excellent</p>
            <p style={{ fontSize: 12, color: C.success, marginTop: 2, fontWeight: 500 }}>↑ 12 pts this month</p>
          </div>
          <CreditGauge score={782} />
        </button>

        {/* Upcoming Calendar (from PRD) */}
        <div className="animate-slide-up animate-delay-3" style={{ marginTop: 20, background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${C.divider}`, display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Upcoming in August</span>
            <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>Calendar</span>
          </div>
          {[
            { label: 'Netflix', amount: 649, date: '4 Aug', icon: '🎬', urgent: false },
            { label: 'SIP Investment', amount: 5000, date: '7 Aug', icon: '📈', urgent: false },
            { label: 'Credit Card Bill', amount: 12420, date: '10 Aug', icon: '💳', urgent: true },
            { label: 'Loan EMI', amount: 9487, date: '12 Aug', icon: '🏦', urgent: false },
          ].map((u, i, arr) => (
            <div key={u.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: i < arr.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {u.icon}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{u.label}</p>
                  <p style={{ fontSize: 13, color: u.urgent ? C.error : C.text2, fontWeight: u.urgent ? 700 : 500, marginTop: 2 }}>{u.date}</p>
                </div>
              </div>
              <span style={{ fontSize: 16, fontWeight: 800, color: C.text }}>₹{u.amount.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
        
        {/* Loans */}
        <div className="animate-slide-up animate-delay-4" style={{ marginTop: 20, background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${C.divider}` }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Loans</span>
            <button onClick={() => nav('/loans')} style={{ fontSize: 13, fontWeight: 600, color: C.primary }}>View All</button>
          </div>
          {loans.map((l) => (
            <div key={l.id} style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏦</div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{l.name}</p>
                    <p style={{ fontSize: 13, color: C.text2, marginTop: 2, fontWeight: 500 }}>Next EMI: ₹{l.emi.toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: C.text }}>₹{fmt(l.outstanding)}</p>
                  <p style={{ fontSize: 12, color: C.text3, marginTop: 2, fontWeight: 600 }}>Outstanding</p>
                </div>
              </div>
              <div style={{ marginTop: 16, height: 8, borderRadius: 4, background: C.divider, overflow: 'hidden' }}>
                <div style={{ width: `${(l.paid / l.total) * 100}%`, height: '100%', background: C.grad, borderRadius: 4 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: C.text2, fontWeight: 600 }}>{l.paid} / {l.total} paid</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}

const CreditGauge: React.FC<{ score: number }> = ({ score }) => {
  const pct = (score - 300) / 600
  const circumference = 140
  const offset = circumference - pct * circumference

  return (
    <svg width="100" height="60" viewBox="0 0 100 60">
      <path d="M 10 55 A 40 40 0 0 1 90 55" fill="none" stroke={C.divider} strokeWidth="10" strokeLinecap="round" />
      <path d="M 10 55 A 40 40 0 0 1 90 55" fill="none"
        stroke="url(#gaugeGrad)" strokeWidth="10" strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#FF4B55" /><stop offset="0.5" stopColor="#F5A623" /><stop offset="1" stopColor="#12A150" />
        </linearGradient>
      </defs>
    </svg>
  )
}
