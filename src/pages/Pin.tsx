import { useEffect, useState } from 'react'
import { useLayoutContext } from '../App'

// TODO: Implement Pin submission handler
//    fetch user data for the provided pin
//    if user data is found, navigate to the dashboard
//    if user data is not found, display an error message
//    +input validation

const Pin = () => {
  const [pin, setPin] = useState('')
  const { setNavItems } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value)
  }

  useEffect(() => {
    setNavItems([
      { text: 'Back', path: '/' },
      {
        text: 'Submit Pin',
        path: `/dashboard/${pin}`,
      },
    ])
  }, [setNavItems, pin])

  return (
    <div className="mt-30 text-xl">
      <label htmlFor="pin">Enter your pin</label>
      <input
        name="pin"
        type="password"
        className="block w-31 mx-auto mt-4 bg-white border-gray-300 border-6 p-2 text-2xl text-black center"
        maxLength={4}
        value={pin}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Pin
