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
      { text: 'Re-Enter Pin', path: '/pin' },
      { text: 'Deposit', path: '/deposit' },
      { text: 'Balance', path: '/balance' },
      { text: 'Withdraw', path: '/withdraw' },
      { text: 'Exit', path: '/' },
    ])
  }, [setNavItems])
  return (
    <>
      <p>{`Hi ${user.name}!`}</p>
      <p>Please make a choice...</p>
    </>
  )
}

export default UserDashboard
