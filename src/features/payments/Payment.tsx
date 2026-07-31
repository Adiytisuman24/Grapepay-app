import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronLeft, Sparkles, Image, QrCode, Zap } from 'lucide-react'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'
import { merchant, paymentMethods } from '../../core/data'

export const Payment: React.FC = () => {
  const nav = useNavigate()
  const [amount, setAmount] = useState('850')
  const [showMethods, setShowMethods] = useState(false)
  const [selMethod, setSelMethod] = useState(paymentMethods[0])
  const [note, setNote] = useState('')

  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '52px 20px 0' }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, borderRadius: '50%', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ChevronLeft size={20} color={C.text} />
        </button>
        <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: 16, fontWeight: 700, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Scan &amp; Pay</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
        {/* Merchant Info */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 28, gap: 8 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: C.lavender, border: `2px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>
            {merchant.emoji}
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: C.text, fontFamily: 'Outfit, sans-serif' }}>{merchant.name}</h2>
          <span style={{ fontSize: 13, color: C.text2, fontWeight: 500 }}>Add a note (optional)</span>
        </div>

        {/* Amount Input */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4, marginTop: 36 }}>
          <span style={{ fontSize: 32, fontWeight: 700, color: C.text }}>₹</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/\D/g, '').slice(0, 6))}
            inputMode="numeric"
            style={{ fontSize: 52, fontWeight: 800, color: C.text, textAlign: 'center', width: 200, letterSpacing: '-0.04em', fontFamily: 'Outfit, sans-serif', background: 'transparent', border: 'none', outline: 'none' }}
          />
        </div>
        <div style={{ height: 2, width: 120, background: C.primary, borderRadius: 2, margin: '0 auto' }} />

        {/* Payment Method */}
        <p style={{ fontSize: 13, fontWeight: 700, color: C.text2, marginTop: 32, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>Pay using</p>

        <button
          onClick={() => setShowMethods(!showMethods)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '14px 16px', borderRadius: R.lg, border: `1.5px solid ${C.border}`, background: C.bg, boxShadow: S.xs }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: selMethod.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 13 }}>
              {selMethod.abbr}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{selMethod.label}</div>
              <div style={{ fontSize: 12, color: C.text2, marginTop: 1 }}>{selMethod.sub}</div>
            </div>
          </div>
          <ChevronDown size={18} color={C.text2} style={{ transform: showMethods ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        {showMethods && (
          <div style={{ marginTop: 8, borderRadius: R.lg, border: `1px solid ${C.border}`, overflow: 'hidden', background: C.surface, boxShadow: S.md }}>
            {paymentMethods.map((m) => (
              <button key={m.id} onClick={() => { setSelMethod(m); setShowMethods(false) }} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '14px 16px', textAlign: 'left', borderBottom: `1px solid ${C.divider}` }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 12 }}>{m.abbr}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{m.label}</div>
                  <div style={{ fontSize: 12, color: C.text2, marginTop: 1 }}>{m.sub}</div>
                </div>
                {m.recommended && <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, background: C.lavender, padding: '3px 8px', borderRadius: R.pill }}>Recommended</span>}
              </button>
            ))}
          </div>
        )}

        {/* UPI Lite / Pay Later options */}
        <div style={{ marginTop: 10, padding: '12px 16px', borderRadius: R.lg, border: `1px solid ${C.border}`, background: C.bg, display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>UPI Lite</div>
            <div style={{ fontSize: 11, color: C.text2, marginTop: 1 }}>Available: ₹400</div>
          </div>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.success, alignSelf: 'center' }} />
        </div>

        {/* Reward estimate */}
        {selMethod.recommended && (
          <div style={{ marginTop: 14, padding: '14px 16px', borderRadius: R.lg, background: C.lavender, display: 'flex', alignItems: 'center', gap: 12, border: `1px solid rgba(91,22,216,0.12)` }}>
            <Sparkles size={20} color={C.primary} />
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: C.primary }}>Earn ₹12 Grape Cashback</p>
              <p style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>On this eligible payment</p>
            </div>
          </div>
        )}

        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" style={{ width: '100%', padding: '14px 16px', borderRadius: R.lg, border: `1.5px solid ${C.border}`, fontSize: 15, color: C.text, marginTop: 14, background: C.bg, outline: 'none' }} />
      </div>

      <div style={{ padding: '16px 24px 32px' }}>
        <Btn fullWidth onClick={() => nav('/processing')} style={{ padding: '18px', fontSize: 17, fontWeight: 800 }}>
          Pay ₹{amount || '0'}
        </Btn>
      </div>
    </div>
  )
}
