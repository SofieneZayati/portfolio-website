import { useState, useEffect, useCallback, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

interface GalleryImage {
  src: string
  caption: string
  width?: number
  height?: number
  variant?: 'screen' | 'mobile' | 'diagram'
}

interface Props {
  images: GalleryImage[]
  layout?: 'grid' | 'hero'
  priority?: boolean
}

export default function ImageGallery({
  images,
  layout = 'grid',
  priority = false,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLAnchorElement | null>(null)
  const dialogLabelId = useId()
  const isOpen = selected !== null

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected((s) =>
      s !== null ? (s - 1 + images.length) % images.length : null,
    )
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

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.tabIndex >= 0)

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
    const focusFrame = window.requestAnimationFrame(() =>
      closeButtonRef.current?.focus(),
    )

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
      <div className={`image-gallery ${layout === 'hero' ? 'is-hero' : ''}`}>
        {images.map((image, index) => {
          const portrait =
            image.variant === 'mobile' ||
            Boolean(image.width && image.height && image.height > image.width)
          return (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item ${portrait ? 'is-portrait' : ''} ${index === 0 && images.length > 2 && !portrait ? 'is-wide' : ''}`}
              aria-label={`Open ${image.caption} image preview`}
              onClick={(event) => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return
                event.preventDefault()
                triggerRef.current = event.currentTarget
                setSelected(index)
              }}
            >
              <div className="gallery-media">
                <img
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  loading={priority ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="gallery-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="gallery-caption">
                <span>{image.caption}</span>
                {layout !== 'hero' && (
                  <small aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </small>
                )}
              </div>
            </a>
          )
        })}
      </div>
      {typeof document !== 'undefined' &&
        createPortal(
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
                transition={{ duration: 0.15 }}
                className="gallery-dialog"
                onClick={close}
              >
                <div
                  className="gallery-dialog-panel"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="gallery-dialog-toolbar">
                    <span>
                      Project image {selected + 1} / {images.length}
                    </span>
                    <div>
                      <a
                        href={images[selected].src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open original ↗
                      </a>
                      <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="Close image preview"
                        onClick={close}
                      >
                        <HiX aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <img
                    className="gallery-dialog-image"
                    src={images[selected].src}
                    alt={images[selected].caption}
                    width={images[selected].width}
                    height={images[selected].height}
                    decoding="async"
                  />
                  <div className="gallery-dialog-footer">
                    {images.length > 1 && (
                      <button
                        type="button"
                        aria-label="Previous image"
                        onClick={prev}
                      >
                        <HiChevronLeft aria-hidden="true" />
                      </button>
                    )}
                    <p id={dialogLabelId} aria-live="polite">
                      {images[selected].caption}
                    </p>
                    {images.length > 1 && (
                      <button
                        type="button"
                        aria-label="Next image"
                        onClick={next}
                      >
                        <HiChevronRight aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  )
}
