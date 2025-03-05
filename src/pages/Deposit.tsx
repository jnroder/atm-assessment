import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useLayoutContext } from '../App'

const Deposit = () => {
  const [deposit, setDeposit] = useState(0)
  const [inputError, setInputError] = useState('')
  const navigate = useNavigate()
  const { setNavItems, userData, setUserData } = useLayoutContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(Number(e.target.value))
    console.log(deposit)
  }

  const handleDepositSubmit = useCallback(async () => {
    setInputError('')

    if (!userData?.pin) {
      setInputError('Please re-enter your pin')
      return
    }

    if (deposit <= 0) {
      setInputError('Please enter a valid amount')
      return
    }

    try {
      const response = await fetch(`/api/user/${userData.pin}/deposit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: deposit }),
      })

      if (!response.ok) throw new Error('Deposit failed')

      const updatedUser = await response.json()

      setUserData(updatedUser) // Update balance in context
      setDeposit(0) // Reset input field

      navigate('/success', {
        state: {
          messages: [
            'Deposit successful.',
            `New balance: $${updatedUser.balance}`,
          ],
        },
      })
    } catch (error) {
      console.error('Error submitting deposit:', error)
    }
  }, [deposit, userData, setUserData])

  useEffect(() => {
    setNavItems([
      { text: 'Clear', path: '#', onClick: () => setDeposit(0) },
      { text: 'Exit', path: '/' },
      { text: 'Back', path: '#', onClick: () => navigate(-1) },
      { text: 'Submit Deposit', path: '#', onClick: handleDepositSubmit },
    ])
  }, [setNavItems, userData, handleDepositSubmit])

  return (
    <div className="mt-30 text-xl">
      <label htmlFor="deposit">Enter amount to deposit</label>
      <input
        name="deposit"
        type="number"
        className="block w-31 mx-auto mt-4 bg-white border-gray-300 border-6 p-2 text-2xl text-black center relative z-10"
        value={deposit}
        onChange={handleInputChange}
        autoFocus
      />
      {inputError && <p className="mt-4 text-red-500">{inputError}</p>}
    </div>
  )
}

export default Deposit
