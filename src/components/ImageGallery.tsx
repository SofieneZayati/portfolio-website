import { useState, useEffect, useCallback, useId, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface GalleryImage {
  src: string
  caption: string
}

interface Props {
  images: GalleryImage[]
}

export default function ImageGallery({ images }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const dialogLabelId = useId()
  const isOpen = selected !== null

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null))
  }, [images.length])

  const next = useCallback(() => {
    setSelected((s) => (s !== null ? (s + 1) % images.length : null))
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',')

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
        return
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
        return
      }

      if (e.key !== 'Tab') return

      const dialog = dialogRef.current
      if (!dialog) return

      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) => element.tabIndex >= 0
      )

      if (focusable.length === 0) {
        e.preventDefault()
        dialog.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault()
        first.focus()
      }
    }

    const containFocus = (e: FocusEvent) => {
      const dialog = dialogRef.current
      if (dialog && !dialog.contains(e.target as Node)) {
        closeButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handler)
    document.addEventListener('focusin', containFocus)
    document.body.style.overflow = 'hidden'
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', handler)
      document.removeEventListener('focusin', containFocus)
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [isOpen, close, prev, next])

  if (images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {images.map((img, i) => (
          <motion.button
            key={i}
            type="button"
            aria-label={`Open ${img.caption} image preview`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            onClick={(event) => {
              triggerRef.current = event.currentTarget
              setSelected(i)
            }}
            className="group cursor-pointer text-left"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.12]">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-56 md:h-64 object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
              {img.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogLabelId}
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close image preview"
              onClick={close}
              className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
            >
              <HiX size={24} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            >
              <HiChevronLeft size={32} aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            >
              <HiChevronRight size={32} aria-hidden="true" />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[90vh] mx-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p
                id={dialogLabelId}
                aria-live="polite"
                className="mt-4 text-sm text-white/70"
              >
                {images[selected].caption}
                <span className="text-white/60 ml-2">
                  {selected + 1} / {images.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
