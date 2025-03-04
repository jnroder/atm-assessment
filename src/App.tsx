import { StrictMode, useState } from 'react'
import {
  RouterProvider,
  Route,
  Outlet,
  useOutletContext,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router'
import Sign from './Sign'
import CardIndicator from './CardIndicator'
import Buttons from './Buttons'
import Welcome from './pages/Welcome'
import Pin from './pages/Pin'
import UserDashboard, { loader as userLoader } from './pages/UserDashboard'
import Balance from './pages/Balance'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import './App.css'

interface NavItem {
  text: string
  path: string
  onClick?: (args?: unknown) => void // allow onClick handler to accept any arguments
}

interface UserData {
  pin: string
  name: string
  balance: number
  cardType: string | undefined
}

export interface LayoutContextType {
  navItems: NavItem[]
  setNavItems: (navItems: NavItem[]) => void
  userData: UserData | null
  setUserData: (userData: UserData | null) => void
}

function Layout() {
  const [navItems, setNavItems] = useState<NavItem[]>([
    { text: 'Enter Pin', path: '/pin' },
  ])
  const [userData, setUserData] = useState<UserData | null>(null)

  return (
    <div className="inline-block mt-47 mx-auto w-full max-w-[856px]">
      <Sign />
      <div className="facade max-w-[760px] h-[1700px] mx-auto bg-white border-t-16 border-[#BEBEBE]">
        <CardIndicator cardType={userData?.cardType} />
        {/* pass button state setter to children. get with useLayoutContext */}
        <div className="interface relative">
          <div className="screen max-w-[476px] h-[456px] mt-3 mx-auto bg-[#7EB4D5] border-10 border-[#E1E1D6] box-content text-center">
            <Outlet
              context={{ navItems, setNavItems, userData, setUserData }}
            />
          </div>
          <Buttons navItems={navItems} />
        </div>
      </div>
    </div>
  )
}

// this exposes context passed in Outlet component props to child components
export function useLayoutContext() {
  return useOutletContext<LayoutContextType>()
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="/pin" element={<Pin />} />
      <Route
        path="/dashboard/:pin" // use a route parameter to pass pin to loader. get with useLocation
        element={<UserDashboard />}
        loader={userLoader}
      />
      <Route path="/balance" element={<Balance />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
    </Route>
  )
)

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
