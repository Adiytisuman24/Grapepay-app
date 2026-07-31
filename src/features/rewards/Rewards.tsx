import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Gift, Users, Flame, TrendingUp, Star } from 'lucide-react'
import { C, R, S } from '../../core/theme'
import { rewards } from '../../core/data'

export const Rewards: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ minHeight: '100%', background: C.bg }}>
      
      {/* Header Card */}
      <div style={{ background: C.grad, padding: '52px 20px 28px', borderBottomLeftRadius: 32, borderBottomRightRadius: 32, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', bottom: -20, left: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Outfit, sans-serif' }}>Rewards</h1>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Gift size={20} color="#fff" />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: 0, border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>Total Balance</p>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginTop: 4, fontFamily: 'Outfit, sans-serif' }}>₹1,247</p>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.15)', margin: '0 4px' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>This Month</p>
            <p style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginTop: 4, fontFamily: 'Outfit, sans-serif' }}>₹247</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 20px 16px' }}>

        {/* Ways to Earn */}
        <p style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 12, fontFamily: 'Outfit, sans-serif' }}>Ways to Earn More</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          <EarnCard
            icon={<Flame size={22} color="#FF4B55" />}
            color="#FF4B5520"
            title="Pay 3 merchants"
            subtitle="2 of 3 completed"
            reward="Up to ₹25"
            progress={66}
            onClick={() => {}}
          />
          <EarnCard
            icon={<Star size={22} color="#F5A623" />}
            color="#F5A62320"
            title="Weekend Boost"
            subtitle="Earn extra on Saturday & Sunday"
            reward="1–5% cashback"
            onClick={() => {}}
          />
          <button onClick={() => nav('/referrals')} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px', borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, boxShadow: S.sm }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={22} color={C.primary} />
            </div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>Invite Friends</div>
              <div style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>Earn ₹100 per referral</div>
            </div>
            <ChevronRight size={20} color={C.text3} />
          </button>
        </div>

        {/* Recent Rewards */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <p style={{ fontSize: 16, fontWeight: 800, color: C.text, fontFamily: 'Outfit, sans-serif' }}>Recent Rewards</p>
          <button style={{ fontSize: 13, fontWeight: 700, color: C.primary }}>See all</button>
        </div>

        <div style={{ background: C.surface, borderRadius: R.xl, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>
          {rewards.map((r, i) => (
            <div key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: i < rewards.length - 1 ? `1px solid ${C.divider}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🍇</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{r.merchant}</div>
                  <div style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>{r.date} · <span style={{ color: r.status === 'Credited' ? C.success : C.warning, fontWeight: 600 }}>{r.status}</span></div>
                </div>
              </div>
              <span style={{ fontSize: 17, fontWeight: 800, color: C.primary }}>+₹{r.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const EarnCard: React.FC<{ icon: React.ReactNode; color: string; title: string; subtitle: string; reward: string; progress?: number; onClick: () => void }> = ({
  icon, color, title, subtitle, reward, progress, onClick
}) => (
  <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px', borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, boxShadow: S.sm, textAlign: 'left' }}>
    <div style={{ width: 48, height: 48, borderRadius: 14, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{title}</div>
      <div style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>{subtitle}</div>
      {progress !== undefined && (
        <div style={{ marginTop: 8, height: 6, borderRadius: 3, background: C.divider, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: C.grad, borderRadius: 3, transition: 'width 0.8s ease' }} />
        </div>
      )}
    </div>
    <div style={{ textAlign: 'right', flexShrink: 0 }}>
      <div style={{ fontSize: 11, color: C.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>Reward</div>
      <div style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginTop: 2 }}>{reward}</div>
    </div>
  </button>
)
