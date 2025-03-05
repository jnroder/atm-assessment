import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useLayoutContext } from '../App'

const Pin = () => {
  const [pin, setPin] = useState('')
  const navigate = useNavigate()
  const { setNavItems } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value)
  }

  useEffect(() => {
    setNavItems([
      { text: 'Back', path: '#', onClick: () => navigate(-1) },
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
        className="block w-31 mx-auto mt-4 bg-white border-gray-300 border-6 p-2 text-2xl text-black center relative z-10"
        maxLength={4}
        value={pin}
        onChange={handleInputChange}
        autoFocus
      />
    </div>
  )
}

export default Pin
