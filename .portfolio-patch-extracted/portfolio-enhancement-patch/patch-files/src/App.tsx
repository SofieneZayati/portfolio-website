import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'

const Home = lazy(() => import('./pages/Home'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'))

function App() {
  return (
    <BrowserRouter>
      <CursorFollower />
      <Suspense fallback={null}>
        <AnimatedBackground />
      </Suspense>
      <Navbar />
      <main>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#00f5ff]/30 border-t-[#00f5ff] rounded-full animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
