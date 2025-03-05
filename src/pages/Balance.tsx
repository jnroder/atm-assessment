import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useLayoutContext } from '../App'

const Balance = () => {
  const navigate = useNavigate()
  const { setNavItems, userData } = useLayoutContext()

  useEffect(() => {
    setNavItems([
      { text: 'Exit', path: '/' },
      { text: 'Back', path: '#', onClick: () => navigate(-1) },
    ])
  }, [setNavItems, userData])

  return <div className="mt-40 text-xl">{`Balance: $${userData?.balance}`}</div>
}

export default Balance
