import { useEffect } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router'
import { useLayoutContext } from '../App'

const ErrorPage = () => {
  const error = useRouteError()
  const { setNavItems } = useLayoutContext()

  useEffect(() => {
    setNavItems([{ text: 'Exit', path: '/' }])
  }, [setNavItems])

  return (
    <div className="mt-30 text-xl text-red-500">
      <p>Error!</p>
      {isRouteErrorResponse(error) ? ( // handles `Response` errors
        <p>
          {error.status} - {error.data}
        </p>
      ) : error instanceof Error ? ( // handles JS Errors
        <p>{error.message}</p>
      ) : (
        <p>PC Load Letter</p>
      )}
    </div>
  )
}

export default ErrorPage
