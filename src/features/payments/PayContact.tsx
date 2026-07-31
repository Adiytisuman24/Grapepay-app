import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'
import { contacts } from '../../core/data'

export const PayContact: React.FC = () => {
  const [sel, setSel] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const filtered = contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Pay Contact" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px', height: 44, borderRadius: R.md, background: C.bg, border: `1px solid ${C.border}`, marginTop: 8 }}>
          <Search size={18} color={C.text3} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search people" style={{ flex: 1, fontSize: 14, color: C.text }} />
        </div>
        <h3 style={{ fontSize: 13, fontWeight: 700, color: C.text2, marginTop: 20, marginBottom: 8 }}>Recent</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {filtered.map((c) => (
            <button key={c.id} onClick={() => setSel(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: R.md, border: `1px solid ${sel === c.id ? C.primary : 'transparent'}`, background: sel === c.id ? C.lavender : 'transparent', textAlign: 'left' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.emoji}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{c.name}</div>
                <div style={{ fontSize: 13, color: C.text2 }}>{c.upiId}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 20px 24px' }}>
        <Btn fullWidth disabled={!sel} onClick={() => { /* navigate to amount entry */ }}>Continue</Btn>
      </div>
    </div>
  )
}
