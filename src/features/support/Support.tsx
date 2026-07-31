import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MessageCircle, Search, Phone, CreditCard, Receipt, Plane, Zap } from 'lucide-react'
import { C, R, S } from '../../core/theme'

const categories = [
  { icon: CreditCard, label: 'Payments' },
  { icon: Receipt, label: 'Recharge' },
  { icon: Plane, label: 'Travel' },
  { icon: Zap, label: 'Bills' },
]

const issues = [
  'Payment failed but money deducted',
  'Cashback not received',
  'Transaction pending for 24+ hours',
  'Need to raise a dispute',
]

export const Support: React.FC = () => {
  const nav = useNavigate()
  const [search, setSearch] = useState('')

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 16px', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.text} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Help & Support</h1>
        <div style={{ width: 36 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>

        {/* Search */}
        <div className="animate-scale-in" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', height: 48, borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, boxShadow: S.xs }}>
          <Search size={18} color={C.text3} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for help topics..." style={{ flex: 1, fontSize: 15, fontWeight: 500, color: C.text, background: 'transparent', border: 'none', outline: 'none' }} />
        </div>

        {/* Categories */}
        <p className="animate-slide-up animate-delay-1" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 24, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>Categories</p>
        <div className="animate-slide-up animate-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {categories.map(({ icon: Icon, label }) => (
            <button key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '16px 8px', borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, boxShadow: S.sm }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={20} color={C.primary} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.text, textAlign: 'center' }}>{label}</span>
            </button>
          ))}
        </div>

        {/* Recent Issues */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>Recent Issues</p>
        <div className="animate-slide-up animate-delay-2" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>
          {issues.map((issue, i) => (
            <button key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '16px 20px', textAlign: 'left', borderBottom: i < issues.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.text, flex: 1 }}>{issue}</span>
              <ChevronRight size={18} color={C.text3} />
            </button>
          ))}
        </div>

        {/* Chat CTA */}
        <div className="animate-slide-up animate-delay-3" style={{ marginTop: 24, borderRadius: R.xl, background: C.grad, padding: '20px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: S.primary }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <MessageCircle size={26} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#fff', fontFamily: 'Outfit, sans-serif' }}>Chat with Support</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>Average response in 2 mins</p>
          </div>
          <ChevronRight size={22} color="rgba(255,255,255,0.8)" />
        </div>

        {/* Call support */}
        <button className="animate-slide-up animate-delay-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', marginTop: 12, padding: '15px', borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, color: C.text, fontWeight: 700, fontSize: 15 }}>
          <Phone size={18} color={C.primary} /> Call Support (9AM – 9PM)
        </button>
      </div>
    </div>
  )
}
