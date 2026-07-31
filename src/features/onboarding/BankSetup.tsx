import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { C, R } from '../../core/theme'

const banks = [
  { id: 'hdfc', name: 'HDFC Bank', color: '#004C8F', icon: 'H' },
  { id: 'icici', name: 'ICICI Bank', color: '#F37021', icon: 'I' },
  { id: 'sbi', name: 'State Bank of India', color: '#0066A6', icon: 'S' },
  { id: 'axis', name: 'Axis Bank', color: '#97144D', icon: 'A' },
  { id: 'kotak', name: 'Kotak Mahindra Bank', color: '#ED1C24', icon: 'K' },
]

export const BankSetup: React.FC = () => {
  const nav = useNavigate()
  const [search, setSearch] = useState('')

  return (
    <div style={{ height: '100%', background: C.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 24px' }}>
        <button onClick={() => nav(-1)} style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -8 }}><ChevronLeft size={24} color={C.text} /></button>
      </div>

      <div style={{ padding: '0 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>Select your bank<br/>account</h1>
          <p style={{ fontSize: 14, color: C.text2, fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>Add your bank account to<br/>start using UPI</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 32, padding: '0 16px', height: 48, borderRadius: R.md, background: C.surface, border: `1px solid ${C.border}` }}>
          <Search size={18} color={C.text3} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search your bank" style={{ flex: 1, fontSize: 15, fontWeight: 500, color: C.text, background: 'transparent', border: 'none', outline: 'none' }} />
        </div>

        <p style={{ fontSize: 13, fontWeight: 700, color: C.text, marginTop: 32, marginBottom: 8, letterSpacing: 0.5 }}>Popular Banks</p>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {banks.map((b) => (
            <button key={b.id} onClick={() => nav('/home')} style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '16px 0', borderBottom: `1px solid ${C.divider}` }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 18, marginRight: 16 }}>
                {b.icon}
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: C.text, flex: 1, textAlign: 'left' }}>{b.name}</span>
              <ChevronRight size={20} color={C.text3} />
            </button>
          ))}
        </div>

        <div style={{ marginTop: 'auto', marginBottom: 40, textAlign: 'center' }}>
          <button style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>Don't see your bank?</button>
        </div>
      </div>
    </div>
  )
}
