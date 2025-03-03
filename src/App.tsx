import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useOutletContext,
} from 'react-router'
import Sign from './Sign'
import CardIndicator from './CardIndicator'
import Buttons from './Buttons'
import Welcome from './pages/Welcome'
import Pin from './pages/Pin'
import './App.css'

type NavItem = {
  text: string
  path: string
}

export type LayoutContextType = {
  navItems: NavItem[]
  setNavItems: (navItems: NavItem[]) => void
}

function Layout() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { text: 'Enter Pin', path: '/pin' },
  ])

  return (
    <div className="inline-block mt-47 mx-auto w-full max-w-[856px]">
      <Sign />
      <div className="facade">
        <CardIndicator />
        <Outlet context={{ navItems, setNavItems }} />
        <Buttons navItems={navItems} />
      </div>
    </div>
  )
}

export function useLayoutContext() {
  return useOutletContext<LayoutContextType>()
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/dashboard" element={<div>User Dashboard</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
