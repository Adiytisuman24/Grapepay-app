import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScanLine, Smartphone, User, Building2, Bell, ChevronRight, Zap, QrCode, Search, Sparkles } from 'lucide-react'
import { GrapepayLogo } from '../../core/widgets/Logo'
import { TxnList } from '../../core/widgets/TxnList'
import { C, R, S } from '../../core/theme'
import { user, txns, contacts } from '../../core/data'

export const Home: React.FC = () => {
  const nav = useNavigate()
  const [config, setConfig] = useState<any>(null)
  
  useEffect(() => {
    // Fetch dynamic home configuration from our new backend
    fetch('http://localhost:3001/api/v1/home', {
      headers: { 'x-user-id': 'u1' }
    })
      .then(r => r.json())
      .then(data => setConfig(data))
      .catch(err => console.error("Failed to load home config", err))
  }, [])

  const recent = txns.slice(0, 3)

  const getIcon = (name: string) => {
    switch (name) {
      case 'smartphone': return Smartphone;
      case 'user': return User;
      case 'building': return Building2;
      case 'qr': return QrCode;
      case 'zap': return Zap;
      default: return Zap;
    }
  }

  return (
    <div style={{ minHeight: '100%', background: C.bg }}>
      {/* Header & Search */}
      <div style={{ background: C.grad, padding: '52px 20px 28px', borderBottomLeftRadius: 28, borderBottomRightRadius: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <GrapepayLogo size={32} withWordmark variant="white" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Bell size={18} color="#fff" />
              <span style={{ position: 'absolute', top: 8, right: 8, width: 7, height: 7, borderRadius: '50%', background: '#FF4B55', border: '1.5px solid rgba(255,255,255,0.3)' }} />
            </button>
            <button onClick={() => nav('/profile')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: '#fff' }}>
              {user.name.charAt(0)}
            </button>
          </div>
        </div>
        
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Hello, {user.name} 👋</p>
          <p style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 2 }}>{config?.greeting || "Good morning!"}</p>
        </div>

        {/* Universal Search / Grape AI */}
        <div className="glass-panel animate-scale-in" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Sparkles size={20} color="#fff" />
          <input 
            type="text" 
            placeholder="Ask GrapePay or search anything..." 
            style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: 14, fontWeight: 500 }}
          />
          <Search size={18} color="rgba(255,255,255,0.6)" />
        </div>
      </div>

      <div style={{ padding: '20px 20px 16px' }}>
        
        {/* Dynamic Sections from Backend */}
        {config?.sections?.map((section: any, idx: number) => {
          if (section.type === 'scan_pay') {
            return (
              <div key={idx} className="animate-slide-up animate-delay-1" style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <button onClick={() => nav('/scan')} style={{ flex: 1, background: C.surface, borderRadius: R.lg, padding: '16px', display: 'flex', flexDirection: 'column', gap: 8, border: `1px solid ${C.border}`, boxShadow: S.sm }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ScanLine size={20} color={C.primary} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Scan &amp; Pay</p>
                    <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>Any QR code</p>
                  </div>
                </button>
                <button onClick={() => nav('/pay-contact')} style={{ flex: 1, background: C.surface, borderRadius: R.lg, padding: '16px', display: 'flex', flexDirection: 'column', gap: 8, border: `1px solid ${C.border}`, boxShadow: S.sm }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.lavenderSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} color={C.primary} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Pay Contacts</p>
                    <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>Send money</p>
                  </div>
                </button>
              </div>
            )
          }
          
          if (section.type === 'upcoming_bill') {
            const bill = section.payload;
            return (
              <button key={idx} onClick={() => nav('/recharge')} className="animate-slide-up animate-delay-2" style={{ width: '100%', marginBottom: 16, background: C.surface, borderRadius: R.lg, padding: '16px', border: `1px solid ${C.border}`, boxShadow: S.sm, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: bill.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                    {bill.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{bill.biller} Bill Due</p>
                    <p style={{ fontSize: 12, color: C.error, fontWeight: 600, marginTop: 2 }}>Due {bill.dueInDays === 1 ? 'tomorrow' : `in ${bill.dueInDays} days`}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: C.text }}>₹{bill.amount.toLocaleString()}</p>
                  <span style={{ display: 'inline-block', marginTop: 4, background: C.primary, color: '#fff', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: R.pill }}>Pay Now</span>
                </div>
              </button>
            )
          }

          if (section.type === 'reward_banner') {
            return (
              <button key={idx} onClick={() => nav('/rewards')} className="animate-slide-up animate-delay-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 16, padding: '14px 16px', borderRadius: R.lg, background: C.lavender, border: `1px solid rgba(91,22,216,0.12)` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 26 }}>🍇</span>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text, display: 'block' }}>Grape Rewards</span>
                    <span style={{ fontSize: 12, color: C.text2, marginTop: 1, display: 'block' }}>You've earned <strong style={{ color: C.primary }}>₹{section.payload.earnedThisMonth}</strong> this month</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: R.pill, background: C.primary }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>View</span>
                  <ChevronRight size={14} color="#fff" />
                </div>
              </button>
            )
          }
          
          if (section.type === 'travel_offer') {
             return (
               <button key={idx} onClick={() => nav('/travel')} className="animate-slide-up animate-delay-4" style={{ width: '100%', marginBottom: 16, borderRadius: R.lg, background: '#111', overflow: 'hidden', position: 'relative' }}>
                 <div style={{ padding: '20px', position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div style={{ textAlign: 'left' }}>
                     <p style={{ fontSize: 12, color: '#aaa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Travel Hub</p>
                     <p style={{ fontSize: 18, color: '#fff', fontWeight: 800, marginTop: 4 }}>{section.payload.title}</p>
                     <p style={{ fontSize: 14, color: '#fff', fontWeight: 500, marginTop: 4 }}>Starting ₹{section.payload.price}</p>
                   </div>
                   <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <ChevronRight color="#fff" size={20} />
                   </div>
                 </div>
                 {/* Decorative background for the card */}
                 <div style={{ position: 'absolute', right: -20, top: -20, opacity: 0.2, fontSize: 100 }}>✈️</div>
               </button>
             )
          }
          return null;
        })}

        {/* Quick Actions (fallback static if backend slow, or loaded from config) */}
        {config?.quick_actions && (
          <div className="animate-slide-up animate-delay-4" style={{ marginBottom: 16, background: C.surface, borderRadius: R.lg, padding: '16px', border: `1px solid ${C.border}`, boxShadow: S.sm }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Quick Actions</span>
            <div style={{ display: 'flex', gap: 0, justifyContent: 'space-between', marginTop: 14 }}>
              {config.quick_actions.map((a: any) => {
                const Icon = getIcon(a.icon)
                return (
                  <button key={a.label} onClick={() => nav(a.path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, flex: 1 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={20} color={C.primary} /></div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: C.text }}>{a.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Recent Transactions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, marginBottom: 12 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Recent</h3>
          <button onClick={() => nav('/activity')} style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 12, fontWeight: 600, color: C.primary }}>See all <ChevronRight size={14} /></button>
        </div>
        <div style={{ background: C.surface, borderRadius: R.lg, border: `1px solid ${C.border}`, padding: '0 16px', boxShadow: S.sm }}>
          <TxnList txns={recent} onClick={(id) => nav(`/activity/${id}`)} />
        </div>
        
        {/* Bottom padding for the new floating action button */}
        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}
