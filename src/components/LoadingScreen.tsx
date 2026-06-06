import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center"
          >
            <span className="text-4xl font-extrabold bg-gradient-to-r from-[#00f5ff] via-[#ff0080] to-[#8b5cf6] bg-clip-text text-transparent">
              SZ
            </span>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
            className="h-[2px] bg-gradient-to-r from-[#00f5ff] via-[#ff0080] to-[#8b5cf6] rounded-full mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
