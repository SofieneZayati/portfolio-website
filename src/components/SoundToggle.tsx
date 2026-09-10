import { useEffect, useState } from 'react'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'

const storageKey = 'sofiene-portfolio-sound'
let audioContext: AudioContext | null = null

function playTone(frequency: number, duration = 0.07, volume = 0.018) {
  const AudioContextClass = window.AudioContext ??
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return

  audioContext ??= new AudioContextClass()
  if (audioContext.state === 'suspended') void audioContext.resume()

  const oscillator = audioContext.createOscillator()
  const gain = audioContext.createGain()
  const now = audioContext.currentTime

  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(frequency, now)
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.08, now + duration)
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.012)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  oscillator.connect(gain)
  gain.connect(audioContext.destination)
  oscillator.start(now)
  oscillator.stop(now + duration + 0.01)
}

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(
    () => typeof window !== 'undefined' && window.localStorage.getItem(storageKey) === 'on',
  )

  useEffect(() => {
    if (!enabled) return

    let lastTarget: Element | null = null

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest('a, button, [role="button"]')
        : null
      if (!target || target === lastTarget || target.closest('.sound-toggle')) return
      lastTarget = target
      playTone(620, 0.045, 0.007)
    }

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest('a, button, [role="button"]')
        : null
      if (target === lastTarget) lastTarget = null
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest('a, button, [role="button"]')
        : null
      if (!target || target.closest('.sound-toggle')) return
      playTone(target.matches('a') ? 440 : 360, 0.08, 0.014)
    }

    document.addEventListener('pointerover', handlePointerOver, { passive: true })
    document.addEventListener('pointerout', handlePointerOut, { passive: true })
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
      document.removeEventListener('click', handleClick)
    }
  }, [enabled])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    window.localStorage.setItem(storageKey, next ? 'on' : 'off')
    playTone(next ? 720 : 280, next ? 0.12 : 0.08, 0.02)
  }

  return (
    <button
      type="button"
      className={`sound-toggle ${enabled ? 'is-enabled' : ''}`}
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Turn sound effects off' : 'Turn sound effects on'}
      title={enabled ? 'Sound effects on' : 'Sound effects off'}
    >
      {enabled ? <HiVolumeUp aria-hidden="true" /> : <HiVolumeOff aria-hidden="true" />}
      <span>{enabled ? 'Sound on' : 'Sound off'}</span>
    </button>
  )
}
