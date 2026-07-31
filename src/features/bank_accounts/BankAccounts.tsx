import React from 'react'
import { Plus, Check } from 'lucide-react'
import { AppBar } from '../../core/widgets/AppBar'
import { C, R, S } from '../../core/theme'
import { banks } from '../../core/data'

export const BankAccounts: React.FC = () => (
  <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
    <AppBar title="Bank Accounts" />
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
      {banks.map((b) => (
        <div key={b.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderRadius: R.lg, border: `1px solid ${C.border}`, marginBottom: 12, boxShadow: S.sm }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>{b.name.slice(0, 2)}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{b.name}</div>
            <div style={{ fontSize: 14, color: C.text2, marginTop: 2 }}>{b.num}</div>
            <div style={{ fontSize: 12, color: C.text2, marginTop: 2 }}>{b.upiId}</div>
          </div>
          {b.primary && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: R.pill, background: C.lavender }}>
              <Check size={14} color={C.primary} /><span style={{ fontSize: 12, fontWeight: 600, color: C.primary }}>Primary</span>
            </div>
          )}
        </div>
      ))}
      <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: 16, borderRadius: R.lg, border: `2px dashed ${C.border}`, fontSize: 15, fontWeight: 600, color: C.primary, marginTop: 4 }}>
        <Plus size={20} color={C.primary} /> Add bank account
      </button>
    </div>
  </div>
)
