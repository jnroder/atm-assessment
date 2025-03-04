import { useEffect } from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router'
import { useLayoutContext } from '../App'
import { userAccount } from '../api/userAccount'

type UserLoaderFunctionArgs = {
  params: { pin?: string }
} & LoaderFunctionArgs

export async function loader({ params }: UserLoaderFunctionArgs) {
  if (!params.pin) {
    throw new Error('Pin not provided')
  }
  const user = await userAccount.get(params.pin)
  if (!user) {
    throw new Error('User not found')
  }
  return { user }
}

const UserDashboard = () => {
  const { setNavItems, setUserData } = useLayoutContext()
  const { user } = useLoaderData()

  useEffect(() => {
    setUserData(user)
  }, [setUserData, user])

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Withdraw', path: '/withdraw' },
      { text: 'Balance', path: '/balance' },
      { text: 'Deposit', path: '/deposit' },
      { text: 'Re-Enter PIN', path: '/pin' },
    ])
  }, [setNavItems])
  return (
    <>
      <p className="mt-23 text-xl">{`Hi ${user.name}!`}</p>
      <p className="text-xl">Please make a choice...</p>
    </>
  )
}

export default UserDashboard
