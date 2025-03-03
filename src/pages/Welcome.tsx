import { useEffect } from 'react'
import { useLayoutContext } from '../App'

const Welcome = () => {
  const { setNavItems } = useLayoutContext()

  useEffect(() => {
    setNavItems([{ text: 'Enter Pin', path: '/pin' }])
  }, [setNavItems])

  return (
    <>
      <div>Welcome to the ATM</div>
    </>
  )
}

export default Welcome
