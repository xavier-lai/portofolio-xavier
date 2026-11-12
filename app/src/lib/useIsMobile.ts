import { useEffect, useState } from 'react'

/** True on small screens (phones). Used to skip the heavy pinned-scroll intro. */
export function useIsMobile(query = '(max-width: 767px)') {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return isMobile
}
