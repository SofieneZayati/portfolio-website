import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [clicking, setClicking] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let dotX = mouseX
    let dotY = mouseY
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)

    window.addEventListener('mousemove', handleMouse, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const animate = () => {
      dotX += (mouseX - dotX) * 0.15
      dotY += (mouseY - dotY) * 0.15
      ringX += (mouseX - ringX) * 0.08
      ringY += (mouseY - ringY) * 0.08

      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div className="hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100] transition-colors duration-200 ${clicking ? 'bg-[#ff0080]' : 'bg-[#00f5ff]'} mix-blend-screen shadow-[0_0_8px_rgba(0,245,255,0.8)]`}
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99] border transition-all duration-300 ${clicking ? 'border-[#ff0080] scale-75 opacity-100' : 'border-[#00f5ff]/40 scale-100 opacity-50'} mix-blend-screen shadow-[0_0_15px_rgba(0,245,255,0.2)]`}
      />
    </div>
  )
}
