import React from 'react'
import { Share2, Download } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { GrapepayLogo } from '../../core/widgets/Logo'
import { C, R, S } from '../../core/theme'
import { user } from '../../core/data'

export const MyQr: React.FC = () => (
  <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
    <AppBar title="My QR" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 }}>
      <GrapepayLogo size={40} withWordmark />
      <p style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{user.fullName}</p>
      <div style={{ padding: 20, borderRadius: R.xl, background: '#fff', border: `1px solid ${C.border}`, boxShadow: S.md }}>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="200" fill="#fff" />
          {/* Simulated QR pattern */}
          <g fill="#17131D">
            {/* Corner markers */}
            <rect x="10" y="10" width="44" height="44" rx="8" fill="none" stroke="#17131D" strokeWidth="6" />
            <rect x="26" y="26" width="12" height="12" rx="2" />
            <rect x="146" y="10" width="44" height="44" rx="8" fill="none" stroke="#17131D" strokeWidth="6" />
            <rect x="162" y="26" width="12" height="12" rx="2" />
            <rect x="10" y="146" width="44" height="44" rx="8" fill="none" stroke="#17131D" strokeWidth="6" />
            <rect x="26" y="162" width="12" height="12" rx="2" />
            {/* Random data dots */}
            {Array.from({ length: 80 }).map((_, i) => {
              const x = 70 + (i % 8) * 14 + Math.floor(i / 8) * 2
              const y = 70 + Math.floor(i / 8) * 14
              return <rect key={i} x={x} y={y} width="10" height="10" rx="2" fill={i % 3 === 0 ? '#5B16D8' : '#17131D'} opacity={i % 2 === 0 ? 1 : 0.4} />
            })}
            {/* Center logo */}
            <rect x="85" y="85" width="30" height="30" rx="8" fill="#fff" />
            <circle cx="100" cy="95" r="5" fill="#8B20F5" />
            <circle cx="100" cy="107" r="5" fill="#5B16D8" />
            <path d="M100 88c-1-2 0-3 1.5-3.5c-0.5 1.5-0.5 2.5 0.5 3.5z" fill="#4CAF50" />
          </g>
        </svg>
      </div>
      <p style={{ fontSize: 16, fontWeight: 600, color: C.primary }}>{user.upiId}</p>
    </div>
    <div style={{ padding: '0 24px 24px', display: 'flex', gap: 12 }}>
      <Btn variant="secondary" fullWidth><Share2 size={18} /> Share QR</Btn>
      <Btn variant="secondary" fullWidth><Download size={18} /> Download</Btn>
    </div>
  </div>
)
