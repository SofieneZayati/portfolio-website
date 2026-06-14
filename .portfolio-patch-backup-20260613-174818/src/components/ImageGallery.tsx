import { useState, useEffect, useCallback } from 'react'
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

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : null))
  }, [images.length])

  const next = useCallback(() => {
    setSelected((s) => (s !== null ? (s + 1) % images.length : null))
  }, [images.length])

  useEffect(() => {
    if (selected === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [selected, close, prev, next])

  if (images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {images.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            onClick={() => setSelected(i)}
            className="group cursor-pointer text-left"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.04] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.08]">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
              {img.caption}
            </p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
            >
              <HiX size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            >
              <HiChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
            >
              <HiChevronRight size={32} />
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
              <p className="mt-4 text-sm text-white/70">
                {images[selected].caption}
                <span className="text-white/40 ml-2">
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
