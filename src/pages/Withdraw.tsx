import { useEffect, useState } from 'react'
import { useLayoutContext } from '../App'

const Withdraw = () => {
  const [withdraw, setWithdraw] = useState(0)
  const { setNavItems, userData } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdraw(Number(e.target.value))
  }

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Back', path: `/dashboard/${userData?.pin}` },
      { text: 'Confirm', path: `?` },
    ])
  }, [setNavItems, userData])

  return (
    <div className="mt-30 text-xl">
      <label htmlFor="deposit">Enter amount to withdraw</label>
      <input
        name="deposit"
        type="number"
        className="block w-31 mx-auto mt-4 bg-white border-gray-300 border-6 p-2 text-2xl text-black center"
        value={withdraw}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Withdraw
