import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Shield, Bell, Lock, HelpCircle, Info, FileText, LogOut, CreditCard, QrCode, Gift, Users, Plane, Zap, BarChart3, Wallet, Settings, BadgeCheck } from 'lucide-react'
import { GrapepayLogo } from '../../core/widgets/Logo'
import { C, R, S } from '../../core/theme'
import { user } from '../../core/data'

export const Profile: React.FC = () => {
  const nav = useNavigate()
  return (
    <div style={{ minHeight: '100%', background: C.bg }}>
      
      {/* Header */}
      <div style={{ background: C.grad, padding: '52px 20px 28px', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, color: '#fff', border: '3px solid rgba(255,255,255,0.4)', flexShrink: 0 }}>
            {user.name.charAt(0)}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#fff', fontFamily: 'Outfit, sans-serif' }}>{user.fullName}</span>
              <BadgeCheck size={18} color="#a5f3c8" />
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 3 }}>{user.mobile}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 700, marginTop: 2 }}>{user.upiId}</div>
          </div>
          <button onClick={() => nav('/profile/my-qr')} style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <QrCode size={22} color="#fff" />
          </button>
        </div>
      </div>

      <div style={{ padding: '20px 20px 100px' }}>

        {/* Financial Services */}
        <Section title="Financial Services">
          <Item icon={Wallet} label="Money Dashboard" onClick={() => nav('/money')} />
          <Item icon={BarChart3} label="Credit Health" sub="Score 782 · Excellent" onClick={() => nav('/cibil')} />
          <Item icon={CreditCard} label="Loans & Credit" onClick={() => nav('/loans')} />
          <Item icon={Plane} label="Travel & Trips" onClick={() => nav('/travel')} />
          <Item icon={Zap} label="Recharge & Bills" onClick={() => nav('/recharge')} />
        </Section>

        {/* Payment Methods */}
        <Section title="Payment Methods">
          <Item icon={CreditCard} label="Bank Accounts" sub="HDFC · ICICI" onClick={() => nav('/profile/banks')} />
          <Item icon={QrCode} label="My QR Code" onClick={() => nav('/profile/my-qr')} />
          <Item icon={Zap} label="UPI Lite" sub="Balance ₹842" />
          <Item icon={Settings} label="Autopay" sub="3 active mandates" />
        </Section>

        {/* Rewards & Social */}
        <Section title="Rewards & Social">
          <Item icon={Gift} label="Grape Rewards" sub="₹247 this month" onClick={() => nav('/rewards')} />
          <Item icon={Users} label="Invite Friends" sub="Give ₹50, Get ₹100" onClick={() => nav('/referrals')} />
        </Section>

        {/* Security & Privacy */}
        <Section title="Security & Privacy">
          <Item icon={Shield} label="Security" />
          <Item icon={Lock} label="Permissions & Consent" />
          <Item icon={Bell} label="Notifications" />
        </Section>

        {/* Help & Legal */}
        <Section title="Help & Legal">
          <Item icon={HelpCircle} label="Help & Support" onClick={() => nav('/profile/support')} />
          <Item icon={Info} label="About GrapePay" />
          <Item icon={FileText} label="Privacy Policy" />
          <Item icon={LogOut} label="Logout" color={C.error} />
        </Section>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32, marginBottom: 4, gap: 8, alignItems: 'center' }}>
          <GrapepayLogo size={24} />
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text2 }}>GrapePay</span>
        </div>
        <p style={{ textAlign: 'center', fontSize: 12, color: C.text3 }}>Version 2.0.0 · Built with ♥</p>
      </div>
    </div>
  )
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginTop: 24 }}>
    <p style={{ fontSize: 12, fontWeight: 700, color: C.text3, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.07em', paddingLeft: 4 }}>{title}</p>
    <div style={{ borderRadius: R.xl, background: C.surface, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: S.sm }}>{children}</div>
  </div>
)

const Item: React.FC<{ icon: React.ElementType; label: string; sub?: string; onClick?: () => void; color?: string }> = ({ icon: Icon, label, sub, onClick, color }) => (
  <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '16px 20px', textAlign: 'left', borderBottom: `1px solid ${C.divider}` }}>
    <div style={{ width: 38, height: 38, borderRadius: 12, background: color ? color + '15' : C.lavender, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={20} color={color || C.primary} />
    </div>
    <div style={{ flex: 1 }}>
      <span style={{ fontSize: 15, fontWeight: 700, color: color || C.text, display: 'block' }}>{label}</span>
      {sub && <span style={{ fontSize: 12, color: C.text2, marginTop: 2, display: 'block' }}>{sub}</span>}
    </div>
    <ChevronRight size={18} color={C.text3} />
  </button>
)
