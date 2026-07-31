import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plane, Train, Bus, BedDouble, ChevronRight, Calendar, Users, Sparkles } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

const modes = [
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'trains', label: 'Trains', icon: Train },
  { id: 'bus', label: 'Bus', icon: Bus },
  { id: 'hotels', label: 'Hotels', icon: BedDouble },
]

export const Travel: React.FC = () => {
  const nav = useNavigate()
  const [mode, setMode] = useState('flights')
  const [from, setFrom] = useState('Bangalore')
  const [to, setTo] = useState('Delhi')

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Travel Hub" />

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 100px' }}>
        
        {/* Grape Trip Assistant */}
        <div className="glass-panel animate-scale-in" style={{ padding: '16px', marginBottom: 20, display: 'flex', gap: 16, background: C.gradDark, color: '#fff', alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={24} color="#fff" />
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700 }}>Grape Trip Assistant</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>Tell me where you want to go and I'll build an itinerary.</p>
          </div>
        </div>

        {/* Mode Tabs */}
        <div className="animate-slide-up" style={{ display: 'flex', gap: 8, background: C.surface, borderRadius: R.xl, padding: 8, border: `1px solid ${C.border}`, boxShadow: S.sm }}>
          {modes.map((m) => {
            const Icon = m.icon
            const active = mode === m.id
            return (
              <button key={m.id} onClick={() => setMode(m.id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '12px 4px', borderRadius: R.md, background: active ? C.grad : 'transparent', color: active ? '#fff' : C.text2, fontWeight: 700, fontSize: 12, transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <Icon size={22} color={active ? '#fff' : C.text2} />
                {m.label}
              </button>
            )
          })}
        </div>

        {/* Search Card */}
        <div className="animate-slide-up animate-delay-1" style={{ marginTop: 20, background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.md, padding: '20px' }}>
          {mode !== 'hotels' ? (
            <>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ flex: 1, background: C.bg, padding: '12px 16px', borderRadius: R.md }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2, textTransform: 'uppercase', letterSpacing: 0.5 }}>From</label>
                  <input value={from} onChange={(e) => setFrom(e.target.value)} style={{ fontSize: 20, fontWeight: 800, color: C.text, width: '100%', marginTop: 4, background: 'transparent', border: 'none', outline: 'none' }} />
                </div>
                <button style={{ width: 44, height: 44, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${C.primary}30` }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.primary} strokeWidth="2.5" strokeLinecap="round"><path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12M17 20l4-4M17 20l-4-4" /></svg>
                </button>
                <div style={{ flex: 1, background: C.bg, padding: '12px 16px', borderRadius: R.md }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2, textTransform: 'uppercase', letterSpacing: 0.5 }}>To</label>
                  <input value={to} onChange={(e) => setTo(e.target.value)} style={{ fontSize: 20, fontWeight: 800, color: C.text, width: '100%', marginTop: 4, background: 'transparent', border: 'none', outline: 'none' }} />
                </div>
              </div>
              <div style={{ height: 1, background: C.divider, margin: '20px 0' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Departure</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                    <Calendar size={18} color={C.primary} />
                    <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>7 Aug</span>
                  </div>
                </div>
                {mode === 'flights' && (
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Return</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                      <Calendar size={18} color={C.primary} />
                      <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>11 Aug</span>
                    </div>
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Travellers</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                    <Users size={18} color={C.primary} />
                    <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>2 Adults</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ background: C.bg, padding: '12px 16px', borderRadius: R.md }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: C.text2, textTransform: 'uppercase', letterSpacing: 0.5 }}>Destination</label>
                <input value="Goa" style={{ fontSize: 20, fontWeight: 800, color: C.text, width: '100%', marginTop: 4, background: 'transparent', border: 'none', outline: 'none' }} />
              </div>
              <div style={{ height: 1, background: C.divider, margin: '20px 0' }} />
              <div style={{ display: 'flex', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Check-in</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                    <Calendar size={18} color={C.primary} /><span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>7 Aug</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Check-out</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                    <Calendar size={18} color={C.primary} /><span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>11 Aug</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, color: C.text2 }}>Guests</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '12px', background: C.bg, borderRadius: R.md }}>
                    <Users size={18} color={C.primary} /><span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>2 · 1R</span>
                  </div>
                </div>
              </div>
            </>
          )}
          <Btn fullWidth onClick={() => nav('/flights')} style={{ marginTop: 24, padding: '18px' }}>Search {mode === 'hotels' ? 'Hotels' : mode === 'flights' ? 'Flights' : mode === 'trains' ? 'Trains' : 'Buses'}</Btn>
        </div>

        {/* Upcoming Trip */}
        <p className="animate-slide-up animate-delay-2" style={{ fontSize: 16, fontWeight: 700, color: C.text, marginTop: 32, marginBottom: 12 }}>My Trips</p>
        <button onClick={() => nav('/trip')} className="animate-slide-up animate-delay-2" style={{ width: '100%', background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '20px', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #0066FF 0%, #00B8D4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>✈️</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 16, fontWeight: 800, color: C.text }}>Bangalore → Delhi</p>
              <p style={{ fontSize: 13, color: C.text2, marginTop: 4, fontWeight: 500 }}>7–11 Aug · IndiGo 6E-203</p>
            </div>
            <ChevronRight size={20} color={C.text3} />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.primary, background: C.lavender, padding: '6px 12px', borderRadius: R.pill }}>Flight</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.primary, background: C.lavender, padding: '6px 12px', borderRadius: R.pill }}>Hotel</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.primary, background: C.lavender, padding: '6px 12px', borderRadius: R.pill }}>Cab</span>
          </div>
        </button>

      </div>
    </div>
  )
}
