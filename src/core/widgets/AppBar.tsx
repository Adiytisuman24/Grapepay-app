import React from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { C } from '../theme'

interface Props { title?: string; right?: React.ReactNode; onBack?: () => void }

export const AppBar: React.FC<Props> = ({ title, right, onBack }) => {
  const nav = useNavigate()
  return (
    <div style={{ height: 52, display: 'flex', alignItems: 'center', padding: '0 12px', position: 'relative', zIndex: 10 }}>
      <button onClick={onBack || (() => nav(-1))} style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ChevronLeft size={24} color={C.text} />
      </button>
      {title && <span style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: 16, fontWeight: 600, color: C.text }}>{title}</span>}
      <div style={{ marginLeft: 'auto' }}>{right}</div>
    </div>
  )
}
