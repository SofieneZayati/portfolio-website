import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './portfolio.css'
import './case-studies.css'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (root.dataset.prerendered === 'true') hydrateRoot(root, app)
else createRoot(root).render(app)
