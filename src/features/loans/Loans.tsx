import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Shield, Clock, Zap, TrendingUp, BadgeCheck } from 'lucide-react'
import { C, R, S } from '../../core/theme'

const products = [
  { id: 'pl', name: 'Personal Loan', range: '₹25K – ₹5L', emoji: '💰', color: '#5B16D8' },
  { id: 'cl', name: 'Credit Line', range: 'Use as needed', emoji: '🔄', color: '#12A150' },
  { id: 'bl', name: 'Bike Loan', range: 'Up to ₹2L', emoji: '🏍️', color: '#F5A623' },
  { id: 'el', name: 'Education Loan', range: 'Up to ₹20L', emoji: '🎓', color: '#004C8F' },
  { id: 'hl', name: 'Home Loan', range: 'Up to ₹5Cr', emoji: '🏠', color: '#C41C24' },
  { id: 'gl', name: 'Gold Loan', range: 'Instant', emoji: '🏆', color: '#D4A017' },
]

export const Loans: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      {/* AppBar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 16px', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color={C.text} />
        </button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Loans</h1>
        <div style={{ width: 36 }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 100px' }}>

        {/* Pre-qualified Banner — matches mockup with illustration + offer */}
        <div className="animate-scale-in" style={{ borderRadius: R.xl, background: C.gradDark, padding: '24px', color: '#fff', boxShadow: S.primaryLg, position: 'relative', overflow: 'hidden' }}>
          {/* Decorative blobs */}
          <div style={{ position: 'absolute', top: -30, right: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', bottom: -20, right: 24, fontSize: 80, opacity: 0.25 }}>💰</div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: R.pill, background: 'rgba(255,255,255,0.15)', marginBottom: 14 }}>
            <BadgeCheck size={14} color="#fff" />
            <span style={{ fontSize: 12, fontWeight: 700 }}>Pre-approved Offer</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Get up to</p>
          <p style={{ fontSize: 36, fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: -1 }}>₹2,50,000</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>Starting 11.5% p.a. · Instant rewards</p>

          <div style={{ display: 'flex', gap: 20, marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            {[{ l: 'Tenure', v: '12–60 mo' }, { l: 'EMI', v: '₹6,842/mo' }, { l: 'Disbursal', v: 'Instant' }].map(i => (
              <div key={i.l}>
                <p style={{ fontSize: 11, opacity: 0.7, fontWeight: 500 }}>{i.l}</p>
                <p style={{ fontSize: 15, fontWeight: 800, marginTop: 2 }}>{i.v}</p>
              </div>
            ))}
          </div>
          <button onClick={() => nav('/processing')} style={{ marginTop: 20, padding: '14px 24px', borderRadius: R.lg, background: '#fff', color: C.primary, fontWeight: 800, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Outfit, sans-serif' }}>
            Check Offer <ChevronRight size={18} />
          </button>
        </div>

        {/* Loan Products Grid */}
        <p className="animate-slide-up animate-delay-1" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>Loan Products</p>
        <div className="animate-slide-up animate-delay-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {products.map((p) => (
            <button key={p.id} style={{ padding: '18px', borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, boxShadow: S.sm, textAlign: 'left' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: p.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{p.emoji}</div>
              <p style={{ fontSize: 14, fontWeight: 800, color: C.text, marginTop: 12, fontFamily: 'Outfit, sans-serif' }}>{p.name}</p>
              <p style={{ fontSize: 12, color: C.text2, marginTop: 3 }}>{p.range}</p>
            </button>
          ))}
        </div>

        {/* Active Loan */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 28, marginBottom: 14, fontFamily: 'Outfit, sans-serif' }}>Active Loan</p>
        <div className="animate-slide-up animate-delay-2" style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>💰</div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 800, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Personal Loan</p>
                <p style={{ fontSize: 13, color: C.text2, marginTop: 2, fontWeight: 500 }}>EMI: ₹9,487 · 12 Aug</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 20, fontWeight: 800, color: C.text, fontFamily: 'Outfit, sans-serif' }}>₹1,64,220</p>
              <p style={{ fontSize: 12, color: C.text3, marginTop: 2 }}>Outstanding</p>
            </div>
          </div>
          <div style={{ marginTop: 16, height: 8, borderRadius: 4, background: C.divider, overflow: 'hidden' }}>
            <div style={{ width: '33%', height: '100%', background: C.grad, borderRadius: 4 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <span style={{ fontSize: 12, color: C.text3, fontWeight: 600 }}>8 / 24 paid</span>
            <span style={{ fontSize: 12, color: C.text3, fontWeight: 600 }}>16 remaining</span>
          </div>
          <button style={{ marginTop: 16, width: '100%', padding: '14px', borderRadius: R.lg, background: C.lavender, color: C.primary, fontWeight: 800, fontSize: 15, fontFamily: 'Outfit, sans-serif' }}>Pay EMI</button>
        </div>
      </div>
    </div>
  )
}
