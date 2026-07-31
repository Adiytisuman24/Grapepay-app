import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { C, R, S } from '../../core/theme'
import { TxnList } from '../../core/widgets/TxnList'
import { txns } from '../../core/data'

const filters = ['All', 'Payments', 'Bills', 'Travel', 'Rewards'] as const
type Filter = typeof filters[number]

export const Activity: React.FC = () => {
  const nav = useNavigate()
  const [filter, setFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')

  const filtered = txns.filter((t) => {
    if (filter === 'Payments' && t.txnCategory !== 'payment') return false
    if (filter === 'Bills' && t.txnCategory !== 'bill') return false
    if (filter === 'Travel' && t.txnCategory !== 'travel') return false
    if (filter === 'Rewards' && t.txnCategory !== 'reward') return false
    if (query && !t.name.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <div style={{ minHeight: '100%', background: C.bg }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 0', background: C.surface, borderBottom: `1px solid ${C.divider}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.text, letterSpacing: '-0.02em', fontFamily: 'Outfit, sans-serif' }}>Activity</h1>
          <button style={{ width: 36, height: 36, borderRadius: '50%', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Search size={18} color={C.text2} />
          </button>
        </div>

        {/* Search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', height: 44, borderRadius: R.lg, background: C.bg, border: `1px solid ${C.border}`, marginBottom: 16 }}>
          <Search size={16} color={C.text3} />
          <input
            value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search transactions..."
            style={{ flex: 1, fontSize: 14, fontWeight: 500, color: C.text, background: 'transparent', border: 'none', outline: 'none' }}
          />
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 16 }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '8px 16px', borderRadius: R.pill, fontSize: 13, fontWeight: 700,
                whiteSpace: 'nowrap',
                background: filter === f ? C.grad : C.bg,
                color: filter === f ? '#fff' : C.text2,
                border: `1.5px solid ${filter === f ? 'transparent' : C.border}`,
                boxShadow: filter === f ? S.primary : 'none',
                transition: 'all 0.2s'
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 20px 16px' }}>
        <div style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>
          {filtered.length > 0
            ? <TxnList txns={filtered} onClick={(id) => nav(`/activity/${id}`)} />
            : (
              <div style={{ padding: '60px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                <p style={{ fontSize: 16, fontWeight: 700, color: C.text }}>No transactions found</p>
                <p style={{ fontSize: 14, color: C.text2, marginTop: 6 }}>Try adjusting your filters</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
