import React from 'react'
import { C, R } from '../theme'
import type { Txn } from '../data'

interface Props { txns: Txn[]; onClick?: (id: string) => void }

const typeCfg = {
  sent: { color: C.text2, sign: '-' },
  received: { color: C.success, sign: '+' },
  reward: { color: C.primary, sign: '+' },
  pending: { color: C.warning, sign: '' },
  failed: { color: C.error, sign: '' },
}

export const TxnList: React.FC<Props> = ({ txns, onClick }) => (
  <>
    {txns.map((t, i) => {
      const cfg = typeCfg[t.type]
      return (
        <React.Fragment key={t.id}>
          <button onClick={() => onClick?.(t.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 0', textAlign: 'left' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{t.emoji || t.name.charAt(0)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: cfg.color, whiteSpace: 'nowrap' }}>{cfg.sign}₹{t.amount.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2, gap: 8 }}>
                <span style={{ fontSize: 12, color: C.text2 }}>{t.subtitle}</span>
                {t.cashback && <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, background: C.lavender, padding: '3px 8px', borderRadius: R.pill, whiteSpace: 'nowrap' }}>🍇 +₹{t.cashback}</span>}
              </div>
            </div>
          </button>
          {i < txns.length - 1 && <div style={{ height: 1, background: C.divider }} />}
        </React.Fragment>
      )
    })}
  </>
)
