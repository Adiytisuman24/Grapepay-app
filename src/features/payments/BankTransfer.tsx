import React, { useState } from 'react'
import { AppBar } from '../../core/widgets/AppBar'
import { Btn } from '../../core/widgets/Btn'
import { C, R, S } from '../../core/theme'

export const BankTransfer: React.FC = () => {
  const [acc, setAcc] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [name, setName] = useState('')
  const valid = acc.length >= 8 && ifsc.length >= 6 && name.length >= 2
  return (
    <div style={{ height: '100%', background: C.surface, display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Bank Transfer" />
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
        <p style={{ fontSize: 14, color: C.text2, marginTop: 8 }}>Enter beneficiary details to send money via UPI</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
          <Field label="Account Number" value={acc} onChange={(v) => setAcc(v.replace(/\D/g, '').slice(0, 18))} placeholder="Enter account number" inputMode="numeric" />
          <Field label="IFSC Code" value={ifsc} onChange={(v) => setIfsc(v.toUpperCase().slice(0, 11))} placeholder="HDFC0001234" />
          <Field label="Beneficiary Name" value={name} onChange={(v) => setName(v.slice(0, 40))} placeholder="Enter full name" />
        </div>
      </div>
      <div style={{ padding: '0 24px 24px' }}>
        <Btn fullWidth disabled={!valid}>Continue</Btn>
      </div>
    </div>
  )
}

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder: string; inputMode?: string }> = ({ label, value, onChange, placeholder, inputMode }) => (
  <div>
    <label style={{ fontSize: 13, fontWeight: 600, color: C.text2, display: 'block', marginBottom: 6 }}>{label}</label>
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} inputMode={inputMode as any} style={{ width: '100%', padding: '14px 16px', borderRadius: R.md, border: `1.5px solid ${C.border}`, fontSize: 15, color: C.text, background: C.surface }} />
  </div>
)
