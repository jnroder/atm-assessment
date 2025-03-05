import { useLocation } from 'react-router'
import { useLayoutContext } from '../App'
import { useEffect } from 'react'

const SimpleMessage = () => {
  const { state } = useLocation()
  const messages = state.messages
  const { setNavItems } = useLayoutContext()

  useEffect(() => {
    setNavItems([{ text: 'Exit', path: '/' }])
  }, [setNavItems])

  return (
    <div className="mt-30 text-xl">
      {messages.map((message: string, index: number) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  )
}

export default SimpleMessage
