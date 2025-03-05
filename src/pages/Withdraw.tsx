import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useLayoutContext } from '../App'

const Withdraw = () => {
  const [withdraw, setWithdraw] = useState(0)
  const [inputError, setInputError] = useState('')
  const navigate = useNavigate()
  const { setNavItems, userData, setUserData } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdraw(Number(e.target.value))
  }

  const handleWithdrawSubmit = useCallback(async () => {
    setInputError('')

    if (!userData?.pin) {
      setInputError('Please re-enter your pin')
      return
    }

    if (withdraw > userData.balance) {
      setInputError('Please enter a valid amount')
      return
    }

    try {
      const response = await fetch(`/api/user/${userData.pin}/withdraw`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: withdraw }),
      })

      if (!response.ok) throw new Error('Withdrawal failed')

      const updatedUser = await response.json()

      setUserData(updatedUser) // Update balance in context
      setWithdraw(0) // Reset input field

      navigate('/success', {
        state: {
          messages: [
            'Withdrawal successful.',
            `New balance: $${updatedUser.balance}`,
          ],
        },
      })
    } catch (error) {
      console.error('Error submitting withdrawal:', error)
    }
  }, [withdraw, userData, setUserData])

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Back', path: '#', onClick: () => navigate(-1) },
      { text: 'Confirm', path: `#`, onClick: handleWithdrawSubmit },
    ])
  }, [setNavItems, userData, handleWithdrawSubmit])

  return (
    <div className="mt-30 text-xl">
      <label htmlFor="withdraw">Enter amount to withdraw</label>
      <input
        name="withraw"
        type="number"
        className="block w-31 mx-auto mt-4 bg-white border-gray-300 border-6 p-2 text-2xl text-black center relative z-10"
        value={withdraw}
        onChange={handleInputChange}
        autoFocus
      />
      {inputError && <p className="text-red-500 mt-4">{inputError}</p>}
    </div>
  )
}

export default Withdraw
