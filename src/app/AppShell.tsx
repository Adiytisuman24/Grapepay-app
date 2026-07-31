import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from '../core/widgets/BottomNav'

export const AppShell: React.FC = () => {
  const loc = useLocation()
  const showNav = ['/home', '/money', '/rewards', '/activity', '/profile'].some((p) => loc.pathname === p)
  
  return (
    <div className="app-container">
      <div className="app-scroll">
        <Outlet />
      </div>
      {showNav && <BottomNav />}
    </div>
  )
}
