import React from 'react'

interface LogoProps {
  size?: number
  withWordmark?: boolean
  variant?: 'color' | 'white'
}

export const GrapepayLogo: React.FC<LogoProps> = ({ size = 40, withWordmark = false, variant = 'color' }) => {
  const wordmarkColor = variant === 'white' ? '#FFFFFF' : '#17131D'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gpGrape" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A3DE6" />
            <stop offset="1" stopColor="#5B16D8" />
          </linearGradient>
          <linearGradient id="gpLeaf" x1="22" y1="4" x2="30" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5BBA6D" />
            <stop offset="1" stopColor="#3D9B4F" />
          </linearGradient>
        </defs>
        <path d="M24 10c6 0 11 4.5 11 11 0 6-5 11-11 11s-11-5-11-11c0-6.5 5-11 11-11z" fill="url(#gpGrape)" />
        <circle cx="18.5" cy="18" r="5" fill="#8B20F5" opacity="0.9" />
        <circle cx="29.5" cy="18" r="5" fill="#5B16D8" opacity="0.9" />
        <circle cx="24" cy="25" r="5" fill="#7A3DE6" opacity="0.95" />
        <path d="M24 10c-1-3 0.5-5 3-6-1 2.5-1 4 1 6z" fill="url(#gpLeaf)" />
        <path d="M27 4c2 1 3.5 3 3 6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
      {withWordmark && (
        <span style={{ fontWeight: 800, fontSize: size * 0.48, color: wordmarkColor, letterSpacing: '-0.02em' }}>
          GrapePay
        </span>
      )}
    </div>
  )
}
