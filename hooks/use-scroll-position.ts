
'use client'

import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollPosition = () => {
      const currentScrollY = window.pageYOffset
      setScrollPosition(currentScrollY)
      setIsScrollingDown(currentScrollY > lastScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScrollPosition, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])

  return {
    scrollPosition,
    isScrollingDown,
    isAtTop: scrollPosition === 0,
  }
}
