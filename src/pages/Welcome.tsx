import { useEffect } from 'react'
import { useLayoutContext } from '../App'

const Welcome = () => {
  const { setNavItems, setUserData } = useLayoutContext()

  setUserData(null)

  useEffect(() => {
    setNavItems([{ text: 'Enter PIN', path: '/pin' }])
  }, [setNavItems])

  return <p className="mt-14 text-3xl/[1.875rem]">Welcome to the ATM</p>
}

export default Welcome
