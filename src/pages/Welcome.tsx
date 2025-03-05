import { useEffect } from 'react'
import { useLayoutContext } from '../App'

const Welcome = () => {
  const { setNavItems, setUserData } = useLayoutContext()

  useEffect(() => {
    setNavItems([{ text: 'Enter PIN', path: '/pin' }])
    setUserData(null)
  }, [setNavItems, setUserData])

  return <p className="mt-14 text-3xl/[1.875rem]">Welcome to the ATM</p>
}

export default Welcome
