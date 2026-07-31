import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Plane, BedDouble, Car, MapPin, ChevronRight } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

export const Trip: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="My Trip" />

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        {/* Trip Header */}
        <div style={{ borderRadius: R.xl, background: C.grad, padding: '20px', color: '#fff', boxShadow: S.primary }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MapPin size={16} color="rgba(255,255,255,0.8)" />
            <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.9 }}>Bangalore → Delhi</span>
          </div>
          <p style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>7 – 11 Aug 2026</p>
          <p style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>4 nights · 2 travellers</p>
          <div style={{ display: 'flex', gap: 16, marginTop: 14 }}>
            <div><p style={{ fontSize: 10, opacity: 0.7 }}>Total</p><p style={{ fontSize: 18, fontWeight: 800, marginTop: 1 }}>₹18,420</p></div>
            <div><p style={{ fontSize: 10, opacity: 0.7 }}>Cashback</p><p style={{ fontSize: 18, fontWeight: 800, marginTop: 1 }}>₹642 🍇</p></div>
          </div>
        </div>

        {/* Itinerary Items */}
        <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginTop: 20, marginBottom: 10 }}>Itinerary</p>

        {/* Flight */}
        <div style={{ background: C.surface, borderRadius: R.lg, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '16px', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#0066FF20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plane size={20} color="#0066FF" /></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>IndiGo 6E-203</p>
              <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>BLR → DEL · 7 Aug, 06:10</p>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>₹10,840</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.success, background: C.successBg, padding: '4px 10px', borderRadius: R.pill }}>Confirmed</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.text2, background: C.bg, padding: '4px 10px', borderRadius: R.pill }}>Terminal 1</span>
          </div>
        </div>

        {/* Hotel */}
        <div style={{ background: C.surface, borderRadius: R.lg, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '16px', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#F5A62320', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BedDouble size={20} color="#F5A623" /></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>The Leela Palace</p>
              <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>4 nights · Check-in 7 Aug</p>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>₹6,200</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.success, background: C.successBg, padding: '4px 10px', borderRadius: R.pill }}>Confirmed</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.text2, background: C.bg, padding: '4px 10px', borderRadius: R.pill }}>Deluxe King</span>
          </div>
        </div>

        {/* Cab */}
        <div style={{ background: C.surface, borderRadius: R.lg, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '16px', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#12A15020', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Car size={20} color="#12A150" /></div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Airport Transfer</p>
              <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>DEL Airport → Hotel · 7 Aug</p>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>₹1,380</span>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: C.success, background: C.successBg, padding: '4px 10px', borderRadius: R.pill }}>Confirmed</span>
          </div>
        </div>

        {/* Total Summary */}
        <div style={{ background: C.surface, borderRadius: R.lg, border: `1px solid ${C.border}`, boxShadow: S.sm, padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: C.text2 }}>Flight</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>₹10,840</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: C.text2 }}>Hotel (4 nights)</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>₹6,200</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: C.text2 }}>Cab</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>₹1,380</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: C.primary, fontWeight: 600 }}>Grape Cashback</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>−₹642</span>
          </div>
          <div style={{ height: 1, background: C.divider, margin: '8px 0' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Total Paid</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: C.text }}>₹17,778</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '12px 20px 24px', display: 'flex', gap: 10 }}>
        <Btn variant="secondary" fullWidth>Download Ticket</Btn>
        <Btn fullWidth onClick={() => nav('/home')}>Done</Btn>
      </div>
    </div>
  )
}
