import React from 'react'
import { Home, Wallet, Gift, Activity, User, ScanLine } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { C, S } from '../theme'

const tabs = [
  { id: 'home', label: 'Home', icon: Home, path: '/home' },
  { id: 'money', label: 'Money', icon: Wallet, path: '/money' },
  { id: 'rewards', label: 'Rewards', icon: Gift, path: '/rewards' },
  { id: 'activity', label: 'Activity', icon: Activity, path: '/activity' },
  { id: 'profile', label: 'You', icon: User, path: '/profile' },
]

export const BottomNav: React.FC = () => {
  const nav = useNavigate()
  const loc = useLocation()
  
  return (
    <>
      {/* Floating Scanner Button */}
      <div style={{ position: 'absolute', bottom: 84, left: '50%', transform: 'translateX(-50%)', zIndex: 101 }}>
        <button 
          onClick={() => nav('/scan')} 
          className="animate-slide-up"
          style={{ 
            width: 56, height: 56, borderRadius: '50%', background: C.grad, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            boxShadow: S.primary, border: '3px solid var(--c-surface)' 
          }}>
          <ScanLine color="#fff" size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* Bottom Nav Bar */}
      <nav style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 72, background: C.surface, borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 100, paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {tabs.map((t) => {
          const active = loc.pathname.startsWith(t.path)
          const Icon = t.icon
          return (
            <button key={t.id} onClick={() => nav(t.path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flex: 1, padding: 8 }}>
              <Icon size={22} strokeWidth={active ? 2.5 : 2} color={active ? C.primary : C.text3} />
              <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, color: active ? C.primary : C.text3 }}>{t.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
