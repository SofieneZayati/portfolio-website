import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reduceMotion.matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let ringX = targetX
    let ringY = targetY
    let frame = 0

    const show = () => {
      dot.classList.add('is-visible')
      ring.classList.add('is-visible')
    }

    const hide = () => {
      dot.classList.remove('is-visible')
      ring.classList.remove('is-visible')
    }

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target
      const interactive = target instanceof Element && target.closest('a, button, input, textarea, [role="link"]')
      ring.classList.toggle('is-active', Boolean(interactive))
    }

    const handlePointerDown = () => ring.classList.add('is-pressed')
    const handlePointerUp = () => ring.classList.remove('is-pressed')

    const animate = () => {
      ringX += (targetX - ringX) * 0.16
      ringY += (targetY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`

      if (Math.abs(targetX - ringX) < 0.1 && Math.abs(targetY - ringY) < 0.1) {
        ringX = targetX
        ringY = targetY
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
        frame = 0
        return
      }

      frame = window.requestAnimationFrame(animate)
    }

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      const nearViewportEdge =
        targetX < 24 ||
        targetY < 24 ||
        targetX > window.innerWidth - 24 ||
        targetY > window.innerHeight - 24
      if (nearViewportEdge) hide()
      else show()
      if (frame === 0) frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerover', handlePointerOver, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', hide)

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerover', handlePointerOver)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  )
}
