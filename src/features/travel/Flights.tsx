import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plane, Clock, Filter } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

const flights = [
  { id: 'f1', airline: 'IndiGo', num: '6E-203', dep: '06:10', arr: '08:55', from: 'BLR', to: 'DEL', price: 5420, stops: 'Non-stop', duration: '2h 45m', cheapest: true },
  { id: 'f2', airline: 'Air India', num: 'AI-510', dep: '07:30', arr: '10:15', from: 'BLR', to: 'DEL', price: 5890, stops: 'Non-stop', duration: '2h 45m' },
  { id: 'f3', airline: 'Akasa Air', num: 'QP-1102', dep: '08:40', arr: '11:30', from: 'BLR', to: 'DEL', price: 5180, stops: 'Non-stop', duration: '2h 50m', fastest: true },
  { id: 'f4', airline: 'Vistara', num: 'UK-770', dep: '11:20', arr: '14:10', from: 'BLR', to: 'DEL', price: 6420, stops: 'Non-stop', duration: '2h 50m' },
  { id: 'f5', airline: 'IndiGo', num: '6E-5305', dep: '14:45', arr: '17:30', from: 'BLR', to: 'DEL', price: 5290, stops: 'Non-stop', duration: '2h 45m' },
]

export const Flights: React.FC = () => {
  const nav = useNavigate()
  const [sel, setSel] = useState('f1')
  const selected = flights.find(f => f.id === sel)!

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Select Flight" right={<button style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Filter size={18} color={C.text} /></button>} />

      {/* Route Summary */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ background: C.surface, borderRadius: R.md, padding: '10px 14px', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>BLR → DEL</span>
          <span style={{ fontSize: 12, color: C.text2 }}>7 Aug · 2 Adults</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 10, overflowX: 'auto' }}>
          {['Cheapest', 'Fastest', 'Morning', 'Non-stop'].map((f, i) => (
            <button key={f} style={{ padding: '6px 12px', borderRadius: R.pill, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', background: i === 0 ? C.grad : C.surface, color: i === 0 ? '#fff' : C.text2, border: `1px solid ${i === 0 ? 'transparent' : C.border}` }}>{f}</button>
          ))}
        </div>
      </div>

      {/* Flight List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        {flights.map((f, i) => (
          <React.Fragment key={f.id}>
            <button onClick={() => setSel(f.id)} style={{ width: '100%', background: C.surface, borderRadius: R.lg, border: `1.5px solid ${sel === f.id ? C.primary : C.border}`, boxShadow: S.sm, padding: '14px', textAlign: 'left', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plane size={18} color={C.primary} /></div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{f.airline}</p>
                    <p style={{ fontSize: 11, color: C.text3 }}>{f.num} · {f.stops}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 18, fontWeight: 800, color: C.text }}>₹{f.price.toLocaleString('en-IN')}</p>
                  <p style={{ fontSize: 10, color: C.text3 }}>per person</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                <div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{f.dep}</p>
                  <p style={{ fontSize: 11, color: C.text2 }}>{f.from}</p>
                </div>
                <div style={{ flex: 1, margin: '0 12px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ flex: 1, height: 1, background: C.divider }} />
                    <Plane size={12} color={C.text3} />
                    <div style={{ flex: 1, height: 1, background: C.divider }} />
                  </div>
                  <p style={{ fontSize: 11, color: C.text2, marginTop: 4 }}>{f.duration}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{f.arr}</p>
                  <p style={{ fontSize: 11, color: C.text2 }}>{f.to}</p>
                </div>
              </div>
              {(f.cheapest || f.fastest) && (
                <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                  {f.cheapest && <span style={{ fontSize: 10, fontWeight: 700, color: C.success, background: C.successBg, padding: '3px 8px', borderRadius: R.pill }}>Cheapest</span>}
                  {f.fastest && <span style={{ fontSize: 10, fontWeight: 700, color: C.primary, background: C.lavender, padding: '3px 8px', borderRadius: R.pill }}>Fastest</span>}
                </div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div style={{ padding: '12px 20px 24px', background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <Btn fullWidth onClick={() => nav('/processing')}>Continue · ₹{(selected.price * 2).toLocaleString('en-IN')}</Btn>
      </div>
    </div>
  )
}
