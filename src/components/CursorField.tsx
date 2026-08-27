import { useEffect, useRef } from 'react'

/**
 * A cheap, dependency-free ambient background that follows the pointer.
 * Updates CSS custom properties directly (no re-renders) for smoothness,
 * and falls back to a gentle idle drift on touch devices.
 */
export default function CursorField() {
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const root = document.documentElement

    function setPos(x: number, y: number) {
      if (frame.current) cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${x}%`)
        root.style.setProperty('--my', `${y}%`)
      })
    }

    function onMove(e: PointerEvent) {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setPos(x, y)
    }

    let driftAngle = 0
    let driftTimer: number | null = null
    const isTouch = window.matchMedia('(pointer: coarse)').matches

    if (isTouch) {
      driftTimer = window.setInterval(() => {
        driftAngle += 0.02
        const x = 50 + Math.sin(driftAngle) * 20
        const y = 30 + Math.cos(driftAngle * 0.8) * 15
        setPos(x, y)
      }, 60)
    } else {
      window.addEventListener('pointermove', onMove, { passive: true })
    }

    return () => {
      window.removeEventListener('pointermove', onMove)
      if (driftTimer) window.clearInterval(driftTimer)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <>
      <div className="cursor-field" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  )
}
