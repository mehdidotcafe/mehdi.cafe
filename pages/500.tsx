import { useRouter } from 'next/router'
import { useEffect } from 'react'

const InternalError = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  })

  return null
}

export default InternalError
