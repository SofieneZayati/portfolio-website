import { Link, useParams } from 'react-router-dom'
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDown,
  HiCode,
  HiDownload,
  HiExternalLink,
} from 'react-icons/hi'
import { projects } from '../data/projects'
import projectContent from '../data/projectContent'
import { projectNarratives } from '../data/projectNarratives'
import { additionalDiagrams } from '../data/projectDiagrams'
import ImageGallery from '../components/ImageGallery'
import ProjectSectionNav from '../components/ProjectSectionNav'
import ProjectSystemDiagram from '../components/ProjectSystemDiagram'
import SEO from '../components/SEO'

function SectionTitle({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <header className="case-section-heading">
      <span className="section-label">
        <span>{number} /</span>
        {label}
      </span>
      <h2>{title}</h2>
    </header>
  )
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((item) => item.id === id)
  const content = id ? projectContent[id] : undefined
  if (!project || !content)
    return (
      <>
        <SEO
          title="Project not found | Sofiene Zayati"
          description="The requested project could not be found."
          path={`/project/${id ?? ''}`}
          noindex
        />
        <div className="not-found">
          <div>
            <span className="section-label">404 / Project</span>
            <h1>Project not found.</h1>
            <p>The project may have moved or the link may be incorrect.</p>
            <Link to="/#projects" className="button button--primary">
              Back to selected work <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </>
    )

  const narrative = projectNarratives[project.id]
  const diagram = content.diagram ?? additionalDiagrams[project.id]
  const primary = content.cta.primary
  const demoUrl =
    project.links.live ??
    (primary && /demo|watch|live/i.test(primary.label)
      ? primary.url
      : undefined)
  const codeUrl =
    project.links.github ??
    content.cta.secondary?.find((link) =>
      /github|source|repository/i.test(link.label),
    )?.url
  const gallery = [...content.gallery]
  for (const src of project.screenshots) {
    if (!gallery.some((image) => image.src === src))
      gallery.push({ src, caption: `${project.title} — project interface` })
  }
  const heroImage =
    gallery.find((image) => image.src === project.screenshots[0]) ?? gallery[0]
  const grouped = content.features.reduce<
    Record<string, typeof content.features>
  >((groups, feature) => {
    const key = feature.group ?? 'Product capabilities'
    ;(groups[key] ??= []).push(feature)
    return groups
  }, {})
  const sections = [
    { id: 'overview', label: 'Brief' },
    ...(content.features.length
      ? [{ id: 'capabilities', label: 'Capabilities' }]
      : []),
    ...(diagram || content.architecture.length
      ? [{ id: 'architecture', label: 'System' }]
      : []),
    ...(gallery.length ? [{ id: 'gallery', label: 'Walkthrough' }] : []),
    ...(content.challenges?.length
      ? [{ id: 'decisions', label: 'Decisions' }]
      : []),
    ...(content.techStack.length ? [{ id: 'stack', label: 'Toolkit' }] : []),
    ...(content.results?.length ? [{ id: 'outcomes', label: 'Delivery' }] : []),
    { id: 'next-steps', label: 'Resources' },
  ]
  const index = projects.findIndex((item) => item.id === id)
  const adjacent = [projects[index - 1], projects[index + 1]]
  const isDownload = (url: string, label: string) =>
    /download/i.test(label) || /\.(pdf|pptx)(?:$|\?)/i.test(url)

  return (
    <>
      <SEO
        title={`${project.title} | Sofiene Zayati`}
        description={project.description}
        path={`/project/${project.id}`}
        image={project.cardPreview ?? project.screenshots[0] ?? '/og.png'}
        imageAlt={`${project.title} project by Sofiene Zayati`}
        type="article"
      />
      <div className="case-page">
        <div className="case-container">
          <Link to="/#projects" className="case-back">
            <HiArrowLeft aria-hidden="true" /> All projects
          </Link>
          <header className="case-hero">
            <div className="case-hero-copy">
              <p className="case-kicker">
                <span>{project.year}</span> / Project case study
              </p>
              <h1>{project.title}</h1>
              <p className="case-tagline">{project.tagline}</p>
              <p className="case-description">{project.description}</p>
              <dl className="case-meta">
                <div>
                  <dt>My role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>{project.scope}</dd>
                </div>
              </dl>
              {project.deployment && (
                <p className="case-status">
                  <span className="availability-dot" aria-hidden="true" />{' '}
                  Deployed · {project.deployment.platform}
                </p>
              )}
              {project.progress && (
                <p className="case-status">
                  In development · {project.progress.available}
                </p>
              )}
              <div className="case-actions">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary"
                  >
                    {project.links.liveLabel ??
                      (primary?.url === demoUrl
                        ? primary.label
                        : 'View demo')}{' '}
                    <HiExternalLink aria-hidden="true" />
                  </a>
                )}
                {codeUrl && (
                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--secondary"
                  >
                    <HiCode aria-hidden="true" />
                    {project.links.githubLabel ?? 'View source'}
                  </a>
                )}
                {!demoUrl && !codeUrl && (
                  <a href="#architecture" className="button button--primary">
                    Explore the system <HiArrowRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            {heroImage && (
              <div className="case-cover">
                <ImageGallery images={[heroImage]} layout="hero" priority />
                <a href="#gallery" className="case-cover-link">
                  {gallery.length} project{' '}
                  {gallery.length === 1 ? 'view' : 'views'}{' '}
                  <HiArrowRight aria-hidden="true" />
                </a>
              </div>
            )}
          </header>
          <ProjectSectionNav sections={sections} />
          <section id="overview" className="case-section">
            <SectionTitle
              number="01"
              label="At a glance"
              title="The project in a minute."
            />
            <div className="case-brief">
              <article>
                <span>01 / The problem</span>
                <h3>Why it exists</h3>
                <p>{narrative?.problem ?? project.description}</p>
              </article>
              <article>
                <span>02 / My contribution</span>
                <h3>What I built</h3>
                <p>{narrative?.contribution ?? project.longDescription}</p>
              </article>
              <article>
                <span>03 / Delivery scope</span>
                <h3>
                  {project.progress ? 'Where it stands' : 'What’s included'}
                </h3>
                <p>{project.progress?.available ?? project.scope}</p>
                <a href={project.progress ? '#next-steps' : '#architecture'}>
                  {project.progress
                    ? 'See the next milestone'
                    : 'Explore the implementation'}{' '}
                  <HiArrowRight aria-hidden="true" />
                </a>
              </article>
            </div>
            <dl className="case-facts">
              {content.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <details className="case-context">
              <summary>
                Read the full project context{' '}
                <HiChevronDown aria-hidden="true" />
              </summary>
              <p>{project.longDescription}</p>
              <small>{project.context}</small>
            </details>
          </section>
          {!!content.features.length && (
            <section id="capabilities" className="case-section">
              <SectionTitle
                number="02"
                label="Product experience"
                title="What the product does."
              />
              <div className="case-capabilities">
                {Object.entries(grouped).map(([name, features], groupIndex) => (
                  <details
                    key={name}
                    className="case-capability-group"
                    open={groupIndex === 0}
                  >
                    <summary>
                      <span>
                        <small>{String(groupIndex + 1).padStart(2, '0')}</small>
                        {name}
                      </span>
                      <span>
                        {features.length} capabilities{' '}
                        <HiChevronDown aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="case-feature-grid">
                      {features.map((feature) => (
                        <article key={feature.title}>
                          <h3>{feature.title}</h3>
                          <p>{feature.desc}</p>
                        </article>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
          {(diagram || !!content.architecture.length) && (
            <section id="architecture" className="case-section">
              <SectionTitle
                number="03"
                label="System design"
                title="How the pieces connect."
              />
              {diagram && <ProjectSystemDiagram diagram={diagram} />}
              <div className="case-architecture">
                {content.architecture.map((block, i) => (
                  <details key={block.title} open={!diagram && i === 0}>
                    <summary>
                      <span>
                        <small>{String(i + 1).padStart(2, '0')}</small>
                        {block.title}
                      </span>
                      <HiChevronDown aria-hidden="true" />
                    </summary>
                    <div className="case-architecture-body">
                      <p>{block.desc}</p>
                      {block.image && (
                        <ImageGallery
                          layout="hero"
                          images={[
                            {
                              src: block.image,
                              caption:
                                block.imageAlt ??
                                block.imageCaption ??
                                block.title,
                              width: block.imageWidth,
                              height: block.imageHeight,
                              variant:
                                block.imageKind === 'diagram'
                                  ? 'diagram'
                                  : 'screen',
                            },
                          ]}
                        />
                      )}
                      {block.items && (
                        <dl>
                          {block.items.map((item) => (
                            <div key={item.label}>
                              <dt>{item.label}</dt>
                              <dd>{item.desc}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}
          {!!gallery.length && (
            <section id="gallery" className="case-section">
              <SectionTitle
                number="04"
                label="In action"
                title="A closer look at the build."
              />
              <p className="case-section-lead">
                Actual project screens and documented visuals. Open any image
                for the full view.
              </p>
              <ImageGallery images={gallery} />
            </section>
          )}
          {!!content.challenges?.length && (
            <section id="decisions" className="case-section">
              <SectionTitle
                number="05"
                label="Engineering choices"
                title="The decisions behind the build."
              />
              <div className="case-decisions">
                {content.challenges.map((decision, i) => (
                  <article key={decision.title}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
          {!!content.techStack.length && (
            <section id="stack" className="case-section">
              <SectionTitle
                number="06"
                label="The toolkit"
                title="Each tool has a job."
              />
              <p className="case-section-lead">
                Open a technology to see its role in this project.
              </p>
              <div className="case-stack">
                {content.techStack.map((group) => (
                  <div className="case-stack-group" key={group.category}>
                    <h3>{group.category}</h3>
                    <div>
                      {group.items.map((item) =>
                        item.description ? (
                          <details key={item.name}>
                            <summary>
                              {item.name} <span aria-hidden="true">+</span>
                            </summary>
                            <p>{item.description}</p>
                          </details>
                        ) : (
                          <span key={item.name} className="case-stack-item">
                            {item.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          {!!content.results?.length && (
            <section id="outcomes" className="case-section">
              <SectionTitle
                number="07"
                label="Delivery notes"
                title="The documented scope."
              />
              <div className="case-delivery">
                {content.results.map((result) => (
                  <article key={result.title}>
                    {result.metric && (
                      <span className="case-delivery-metric">
                        {result.metric}
                      </span>
                    )}
                    <h3>{result.title}</h3>
                    <p>{result.content}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
          <section id="next-steps" className="case-section case-resources">
            <div>
              <span className="section-label">
                {project.progress ? 'Next milestone' : 'Explore further'}
              </span>
              <h2>
                {project.progress
                  ? 'The next step is defined.'
                  : 'Want to go deeper?'}
              </h2>
              <p>
                {project.progress?.next ??
                  'Explore the available resources or talk with me about the design and engineering behind this project.'}
              </p>
            </div>
            <div className="case-resource-links">
              {primary && (
                <a
                  href={primary.url}
                  className="button button--primary"
                  download={isDownload(primary.url, primary.label) || undefined}
                  target={primary.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    primary.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {primary.label}
                  {isDownload(primary.url, primary.label) ? (
                    <HiDownload aria-hidden="true" />
                  ) : (
                    <HiExternalLink aria-hidden="true" />
                  )}
                </a>
              )}
              {content.cta.secondary
                ?.filter((link) => !link.url.includes('#contact'))
                .map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="button button--secondary"
                    download={isDownload(link.url, link.label) || undefined}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.url.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {link.label} <HiExternalLink aria-hidden="true" />
                  </a>
                ))}
              <Link to="/#contact" className="button button--secondary">
                Let’s talk <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </section>
          <nav className="case-adjacent" aria-label="More projects">
            {adjacent.map((item, i) =>
              item ? (
                <Link key={item.id} to={`/project/${item.id}`}>
                  <small>{i === 0 ? 'Previous project' : 'Next project'}</small>
                  <strong>{item.title}</strong>
                  <span>{item.tagline}</span>
                  {i === 0 ? (
                    <HiArrowLeft aria-hidden="true" />
                  ) : (
                    <HiArrowRight aria-hidden="true" />
                  )}
                </Link>
              ) : (
                <div key={i} />
              ),
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
