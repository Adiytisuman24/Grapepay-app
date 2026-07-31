import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Zap, Check } from 'lucide-react'
import { C } from '../../core/theme'
import { merchant } from '../../core/data'

const steps = [
  { id: 's1', label: 'Payment initiated', icon: Check },
  { id: 's2', label: 'Verifying with bank', icon: Shield },
  { id: 's3', label: 'Securing payment', icon: Zap },
]

export const Processing: React.FC = () => {
  const nav = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(p => Math.min(p + 2, 100))
    }, 50)
    const stepInterval = setInterval(() => setActiveStep((s) => Math.min(s + 1, steps.length - 1)), 900)
    const t = setTimeout(() => nav('/success'), 3200)
    return () => { clearInterval(stepInterval); clearInterval(progressInterval); clearTimeout(t) }
  }, [nav])

  const circumference = 2 * Math.PI * 52
  const dashOffset = circumference - (progress / 100) * circumference

  return (
    <div style={{ height: '100%', background: '#0A0612', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0, padding: 32 }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-ring { 0%,100% { opacity:0.3; transform:scale(0.95); } 50% { opacity:0.6; transform:scale(1.05); } }
      `}</style>

      {/* Title */}
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 40 }}>Processing Payment</p>

      {/* Circular Progress */}
      <div style={{ position: 'relative', width: 140, height: 140 }}>
        {/* Glowing ring background */}
        <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,22,216,0.2) 0%, transparent 70%)', animation: 'pulse-ring 2s ease-in-out infinite' }} />
        <svg width="140" height="140" viewBox="0 0 140 140" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Track */}
          <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          {/* Progress */}
          <circle
            cx="70" cy="70" r="52" fill="none"
            stroke="url(#progressGrad)" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 70 70)"
            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
          />
          <defs>
            <linearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5B16D8" />
              <stop offset="100%" stopColor="#8B20F5" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center content */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Outfit, sans-serif' }}>₹850</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Processing</span>
        </div>
      </div>

      {/* Merchant Info */}
      <div style={{ marginTop: 28, textAlign: 'center' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>To {merchant.name}</h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>UPI Payment</p>
      </div>

      {/* Step Indicators */}
      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: 260 }}>
        {steps.map((s, i) => {
          const Icon = s.icon
          const done = i < activeStep
          const active = i === activeStep
          return (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 14, opacity: i <= activeStep ? 1 : 0.3, transition: 'opacity 0.4s' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: done ? '#12A150' : active ? 'rgba(91,22,216,0.4)' : 'rgba(255,255,255,0.08)', border: active ? '2px solid #5B16D8' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {done ? <Check size={14} color="#fff" /> : <Icon size={14} color={active ? '#8B20F5' : 'rgba(255,255,255,0.4)'} />}
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: done || active ? '#fff' : 'rgba(255,255,255,0.3)' }}>{s.label}</span>
              {active && (
                <div style={{ marginLeft: 'auto', width: 16, height: 16, border: '2px solid rgba(91,22,216,0.3)', borderTopColor: '#8B20F5', borderRadius: '50%', animation: 'spin 0.7s linear infinite', flexShrink: 0 }} />
              )}
            </div>
          )
        })}
      </div>

      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 40, fontWeight: 500 }}>🔒 256-bit encrypted transaction</p>
    </div>
  )
}
