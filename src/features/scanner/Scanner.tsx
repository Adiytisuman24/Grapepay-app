import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Zap, Image, QrCode, Sun, CreditCard } from 'lucide-react'
import { C, R, S } from '../../core/theme'
import { contacts } from '../../core/data'

export const Scanner: React.FC = () => {
  const nav = useNavigate()
  const [flash, setFlash] = useState(false)

  return (
    <div style={{ height: '100%', background: '#0A0612', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dark gradient background simulating camera */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #150D24 0%, #0A0612 60%, #150D24 100%)' }} />

      {/* Top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', zIndex: 20, paddingTop: 12 }}>
        <button onClick={() => nav(-1)} style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={22} color="#fff" />
        </button>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Scan &amp; Pay</span>
        <button onClick={() => setFlash(!flash)} style={{ width: 38, height: 38, borderRadius: '50%', background: flash ? 'rgba(255,220,0,0.25)' : 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={20} color={flash ? '#FFDC00' : '#fff'} />
        </button>
      </div>

      {/* Pay Again strip */}
      <div style={{ position: 'absolute', top: 72, left: 0, right: 0, padding: '0 16px', zIndex: 20 }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: R.xl, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>Pay Again</span>
          <div style={{ display: 'flex', gap: 8 }}>
            {(contacts || []).slice(0, 4).map((c: any) => (
              <button key={c.id} onClick={() => nav('/payment')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: c.color || C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff' }}>{c.name.charAt(0)}</div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontWeight: 600, maxWidth: 36, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          <button onClick={() => nav('/pay-contact')} style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>See All</button>
        </div>
      </div>

      {/* QR Frame */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 240, height: 240, zIndex: 10 }}>
        {/* Corner brackets */}
        {[
          { top: 0, left: 0, borderTop: `4px solid ${C.primary}`, borderLeft: `4px solid ${C.primary}`, borderTopLeftRadius: 20 },
          { top: 0, right: 0, borderTop: `4px solid ${C.primary}`, borderRight: `4px solid ${C.primary}`, borderTopRightRadius: 20 },
          { bottom: 0, left: 0, borderBottom: `4px solid ${C.primary}`, borderLeft: `4px solid ${C.primary}`, borderBottomLeftRadius: 20 },
          { bottom: 0, right: 0, borderBottom: `4px solid ${C.primary}`, borderRight: `4px solid ${C.primary}`, borderBottomRightRadius: 20 },
        ].map((s, i) => (
          <div key={i} style={{ position: 'absolute', width: 44, height: 44, ...s }} />
        ))}

        {/* Overlay dimming */}
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, boxShadow: '0 0 0 9999px rgba(0,0,0,0.52)', borderRadius: 24, pointerEvents: 'none' }} />

        {/* Scanning laser line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${C.primary}, transparent)`, boxShadow: `0 0 16px ${C.primary}`, animation: 'scanLine 2s ease-in-out infinite', borderRadius: 2 }} />
        <style>{`@keyframes scanLine{0%,100%{top:0}50%{top:calc(100% - 3px)}}`}</style>
      </div>

      {/* Hint text */}
      <p style={{ position: 'absolute', top: 'calc(50% + 140px)', left: '50%', transform: 'translateX(-50%)', fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 600, whiteSpace: 'nowrap' }}>Align QR code within the frame</p>

      {/* Simulate scan button */}
      <button onClick={() => nav('/payment')} style={{ position: 'absolute', top: 'calc(50% + 180px)', left: '50%', transform: 'translateX(-50%)', padding: '12px 32px', borderRadius: R.pill, background: C.grad, color: '#fff', fontWeight: 800, fontSize: 15, boxShadow: S.primary, whiteSpace: 'nowrap' }}>
        Simulate Scan
      </button>

      {/* Bottom actions */}
      <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0, display: 'flex', justifyContent: 'space-around', padding: '0 32px' }}>
        {[
          { icon: Image, label: 'Gallery' },
          { icon: QrCode, label: 'My QR' },
          { icon: Sun, label: 'Flash' },
        ].map(({ icon: Icon, label }) => (
          <button key={label} onClick={() => label === 'My QR' && nav('/profile/my-qr')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon size={24} color="#fff" />
            </div>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
