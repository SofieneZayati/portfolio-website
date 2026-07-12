import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found | Sofiene Zayati"
        description="The requested page could not be found. Return to Sofiene Zayati's engineering portfolio."
        path="/404"
        noindex
      />
      <section className="not-found" aria-labelledby="not-found-heading">
        <div>
          <span className="section-label">404 / Off the map</span>
          <h1 id="not-found-heading">This route leads nowhere.</h1>
          <p>The page may have moved, but the projects are still right where they should be.</p>
          <Link to="/" className="button button--primary">
            <HiArrowLeft aria-hidden="true" /> Return home
          </Link>
        </div>
      </section>
    </>
  )
}
