import { lazy, Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    let frame = 0
    let attempts = 0
    const shouldMoveFocus = !firstRender.current
    firstRender.current = false

    const focusElement = (element: HTMLElement) => {
      element.setAttribute('tabindex', '-1')
      element.focus({ preventScroll: true })
    }

    const moveToDestination = () => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ block: 'start' })
          if (shouldMoveFocus) focusElement(target)
          return
        }
        if (attempts < 30) {
          attempts += 1
          frame = window.requestAnimationFrame(moveToDestination)
        }
        return
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      if (shouldMoveFocus) {
        const heading = document.querySelector<HTMLElement>('#main-content h1')
        if (heading) {
          focusElement(heading)
          return
        }
        if (attempts < 30) {
          attempts += 1
          frame = window.requestAnimationFrame(moveToDestination)
        }
      }
    }

    frame = window.requestAnimationFrame(moveToDestination)

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollManager />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <CursorFollower />
        <AnimatedBackground />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center" role="status">
                <span className="loading-mark">SZ</span>
                <span className="sr-only">Loading portfolio</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
