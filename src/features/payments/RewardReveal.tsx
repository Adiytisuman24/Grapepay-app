import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { C, R, S } from '../../core/theme'
import { Btn } from '../../core/widgets/Btn'

export const RewardReveal: React.FC = () => {
  const nav = useNavigate()
  const [revealed, setRevealed] = useState(false)
  return (
    <div style={{ height: '100%', background: C.grad, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, padding: 24 }}>
      <style>{`@keyframes flip{0%{transform:rotateY(0)}100%{transform:rotateY(180deg)}}@keyframes popIn{0%{transform:scale(0);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
      {!revealed ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>You've earned a Grape 🍇</p>
          </div>
          <button onClick={() => setRevealed(true)} style={{ width: 120, height: 120, borderRadius: 28, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, animation: 'float 2s ease-in-out infinite', boxShadow: S.primaryLg }}>🍇</button>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>TAP</p>
        </>
      ) : (
        <div style={{ textAlign: 'center', animation: 'popIn 0.5s ease' }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>🍇</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>₹12 Cashback</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>Added to your Grape Rewards</p>
          <Btn onClick={() => nav('/rewards')} style={{ marginTop: 32, background: '#fff', color: C.primary }}>View Details</Btn>
          <button onClick={() => nav('/home')} style={{ marginTop: 12, fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 600, padding: '8px 24px' }}>Done</button>
        </div>
      )}
    </div>
  )
}
