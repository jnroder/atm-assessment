import { useEffect } from 'react'
import { useLayoutContext } from '../App'

// TODO: Implement Pin submission handler
//    fetch user data for the provided pin
//    if user data is found, navigate to the dashboard
//    if user data is not found, display an error message
//    +input validation

const Pin = () => {
  const { setNavItems } = useLayoutContext()

  useEffect(() => {
    setNavItems([
      { text: 'Submit Pin', path: '/pin' },
      { text: 'Back', path: '/' },
    ])
  }, [setNavItems])

  return (
    <form>
      <label htmlFor="pin">Enter your pin</label>
      <input
        name="pin"
        type="password"
        className="w-30 bg-white border-gray-300 border-6 p-2 text-3xl center"
        maxLength={4}
      />
    </form>
  )
}

export default Pin
