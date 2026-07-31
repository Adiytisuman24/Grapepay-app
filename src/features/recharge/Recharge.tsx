import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

const tabs = ['Mobile', 'DTH', 'FASTag', 'Metro', 'More'] as const
type Tab = typeof tabs[number]
const tabIcons = { Mobile: '📱', DTH: '📺', FASTag: '🚘', Metro: '🚇', More: '⋯' }

const plans = [
  { id: 'p1', price: 349, days: 28, data: '2GB/day', calls: 'Unlimited', badge: 'Recommended', highlight: true },
  { id: 'p2', price: 299, days: 24, data: '1.5GB/day', calls: 'Unlimited', badge: '', highlight: false },
  { id: 'p3', price: 399, days: 56, data: '2GB/day', calls: 'Unlimited', badge: 'Best Value', highlight: false },
  { id: 'p4', price: 666, days: 84, data: '1.5GB/day', calls: 'Unlimited', badge: '', highlight: false },
  { id: 'p5', price: 899, days: 84, data: '2.5GB/day', calls: 'Unlimited', badge: 'Popular', highlight: false },
]

export const Recharge: React.FC = () => {
  const nav = useNavigate()
  const [tab, setTab] = useState<Tab>('Mobile')
  const [mobile, setMobile] = useState('98XXXXXX23')
  const [selPlan, setSelPlan] = useState('p1')
  const selected = plans.find(p => p.id === selPlan)!

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 0', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.text} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Recharge</h1>
        <div style={{ width: 36 }} />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '12px 0', fontSize: 11, fontWeight: 700, color: tab === t ? C.primary : C.text3, borderBottom: `2.5px solid ${tab === t ? C.primary : 'transparent'}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, transition: 'color 0.2s' }}>
            <span style={{ fontSize: 20 }}>{tabIcons[t]}</span>
            {t}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>
        {/* Number Input */}
        <div className="animate-scale-in" style={{ background: C.surface, borderRadius: R.xl, padding: '18px 20px', border: `1px solid ${C.border}`, boxShadow: S.sm }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: C.text2, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Mobile Number</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={{ fontSize: 22, fontWeight: 800, color: C.text, flex: 1, letterSpacing: '0.05em', background: 'transparent', border: 'none', outline: 'none', fontFamily: 'Outfit, sans-serif' }}
            />
            <div style={{ padding: '6px 12px', borderRadius: R.pill, background: C.lavender, flexShrink: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>Jio </span>
              <span style={{ fontSize: 11, color: C.text2 }}>KA</span>
            </div>
          </div>
        </div>

        {/* Recommended Plan */}
        <p className="animate-slide-up animate-delay-1" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 24, marginBottom: 12, fontFamily: 'Outfit, sans-serif' }}>Recommended Plan</p>
        <div className="animate-slide-up animate-delay-1" style={{ borderRadius: R.xl, background: C.grad, padding: '20px', color: '#fff', boxShadow: S.primary, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: 36, fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: -1 }}>₹{plans[0].price}</p>
              <div style={{ display: 'flex', gap: 20, marginTop: 14 }}>
                {[{ l: 'Validity', v: `${plans[0].days} Days` }, { l: 'Data', v: plans[0].data }, { l: 'Calls', v: plans[0].calls }].map(i => (
                  <div key={i.l}>
                    <p style={{ fontSize: 10, opacity: 0.7, fontWeight: 500 }}>{i.l}</p>
                    <p style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{i.v}</p>
                  </div>
                ))}
              </div>
            </div>
            <span style={{ padding: '5px 12px', borderRadius: R.pill, background: 'rgba(255,255,255,0.2)', fontSize: 11, fontWeight: 700 }}>5G ⚡</span>
          </div>
        </div>

        {/* Popular Plans */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 24, marginBottom: 12, fontFamily: 'Outfit, sans-serif' }}>Popular Plans</p>
        <div className="animate-slide-up animate-delay-2" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {plans.map((p) => (
            <button key={p.id} onClick={() => setSelPlan(p.id)} style={{ padding: '12px 16px', borderRadius: R.lg, border: `2px solid ${selPlan === p.id ? C.primary : C.border}`, background: selPlan === p.id ? C.lavender : C.surface, minWidth: 72, textAlign: 'center', boxShadow: selPlan === p.id ? S.primary : S.xs, transition: 'all 0.2s', position: 'relative' }}>
              {p.badge && <span style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', background: C.primary, color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: R.pill, whiteSpace: 'nowrap' }}>{p.badge}</span>}
              <p style={{ fontSize: 17, fontWeight: 800, color: selPlan === p.id ? C.primary : C.text }}>{p.price}</p>
              <p style={{ fontSize: 10, color: C.text2, marginTop: 3, fontWeight: 500 }}>{p.days}d · {p.data}</p>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px 20px 32px', background: C.surface, borderTop: `1px solid ${C.divider}` }}>
        <Btn fullWidth onClick={() => nav('/processing')} style={{ padding: '17px', fontSize: 16, fontWeight: 800 }}>
          Recharge ₹{selected.price}
        </Btn>
      </div>
    </div>
  )
}
