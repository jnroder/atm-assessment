import { useEffect, useState } from 'react'
import { useLayoutContext } from '../App'

const Deposit = () => {
  const [deposit, setDeposit] = useState(0)
  const { setNavItems, userData } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(Number(e.target.value))
  }

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Back', path: `/dashboard/${userData?.pin}` },
    ])
  }, [setNavItems, userData])

  return (
    <>
      <label htmlFor="deposit">Enter amount to deposit</label>
      <input
        name="deposit"
        type="number"
        className="w-31 bg-white border-gray-300 border-6 p-2 text-2xl text-black center"
        value={deposit}
        onChange={handleInputChange}
      />
    </>
  )
}

export default Deposit
