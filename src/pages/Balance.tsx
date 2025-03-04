import { useEffect } from 'react'
import { useLayoutContext } from '../App'

const Balance = () => {
  const { setNavItems, userData } = useLayoutContext()

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Back', path: `/dashboard/${userData?.pin}` },
    ])
  }, [setNavItems, userData])

  return <div>`Balance: ${userData?.balance}`</div>
}

export default Balance
