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
    console.log(e.target.value)
    setPin(e.target.value)
  }

  useEffect(() => {
    setNavItems([
      {
        text: 'Submit Pin',
        path: `/dashboard/${pin}`,
      },
      { text: 'Back', path: '/' },
    ])
  }, [setNavItems, pin])

  return (
    <>
      <label htmlFor="pin">Enter your pin</label>
      <input
        name="pin"
        type="password"
        className="w-30 bg-white border-gray-300 border-6 p-2 text-3xl center"
        maxLength={4}
        value={pin}
        onChange={handleInputChange}
      />
    </>
  )
}

export default Pin
