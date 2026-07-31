import React from 'react'
import { C, R, S } from '../theme'

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  fullWidth?: boolean
  loading?: boolean
}

export const Btn: React.FC<BtnProps> = ({ variant = 'primary', fullWidth, loading, children, disabled, style, ...rest }) => {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: C.grad, color: '#fff', boxShadow: S.primary },
    secondary: { background: C.lavender, color: C.primary },
    ghost: { background: 'transparent', color: C.primary },
    danger: { background: C.errorBg, color: C.error },
  }
  return (
    <button
      disabled={disabled || loading}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        width: fullWidth ? '100%' : 'auto', borderRadius: R.md, fontWeight: 700, fontSize: 16,
        padding: '15px 24px', transition: 'transform 0.12s, opacity 0.18s', whiteSpace: 'nowrap',
        ...styles[variant],
        ...(disabled || loading ? { background: C.border, color: C.text3, boxShadow: 'none', cursor: 'not-allowed' } : {}),
        ...style,
      }}
      onPointerDown={(e) => { if (!disabled && !loading) (e.currentTarget.style.transform = 'scale(0.97)') }}
      onPointerUp={(e) => { (e.currentTarget.style.transform = 'scale(1)') }}
      {...rest}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
}

const Spinner: React.FC = () => (
  <div style={{ width: 20, height: 20, border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
)
