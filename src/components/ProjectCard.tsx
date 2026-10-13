import { Link } from 'react-router-dom'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import type { Project } from '../data/projects'
import ProjectArtwork from './ProjectArtwork'

interface Props {
  project: Project
  featured?: boolean
  index?: number
}
const categoryLabels: Record<Project['category'], string> = {
  web: 'Web & product',
  embedded: 'Embedded & IoT',
  mobile: 'Mobile',
  ai: 'AI & automation',
}
const summaries: Record<string, string> = {
  sobly:
    'A bilingual digital storefront for a Tunisian business. Catalog, checkout, owner admin, and VPS deployment—all in one delivery.',
  benmahmoudstock:
    'An offline Windows workspace that keeps an automotive-parts shop’s inventory, invoicing, returns, and backups in sync.',
  smartproperty:
    'Property operations meet applied AI: recommendations, valuation, document intelligence, and accessible assistance.',
  macropark:
    'One connected parking system, from license-plate recognition and mobile access to firmware that controls the barrier.',
  geniuspmo:
    'A shared workforce platform for HR, payroll, and employees, paired with an Android attendance companion.',
  prigado:
    'Conversational AI and n8n workflows integrated into an existing e-commerce platform, from product enrichment to logistics.',
}

export default function ProjectCard({
  project,
  featured = false,
  index = 0,
}: Props) {
  const path = `/project/${project.id}`
  const preview = project.cardPreview ?? project.screenshots[0]
  return (
    <article
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
    >
      <Link
        to={path}
        className={`project-card__media project-card__media--${project.id}`}
        aria-label={`View ${project.title} case study`}
      >
        <ProjectArtwork
          project={project}
          src={preview}
          eager={featured}
          className={
            project.visualFit === 'cover' ? 'project-artwork-fit-cover' : ''
          }
        />
        <span className="project-card__category">
          {categoryLabels[project.category]}
        </span>
        {project.deployment && (
          <span className="project-card__deployment">
            <span className="availability-dot" aria-hidden="true" /> Live
            product
          </span>
        )}
        <span className="project-card__open" aria-hidden="true">
          ↗
        </span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>
            {String(index + 1).padStart(2, '0')} / {project.year}
          </span>
          <span>
            {project.progress
              ? 'In development'
              : project.context.startsWith('Client')
                ? 'Client work'
                : project.context.includes('Internship') ||
                    project.context.includes('placement') ||
                    project.context.includes('Scheidt')
                  ? 'Professional project'
                  : 'Product & engineering'}
          </span>
        </div>
        <h3>
          <Link to={path}>{project.title}</Link>
        </h3>
        <p className="project-card__description">
          {summaries[project.id] ?? project.description}
        </p>
        <p className="project-card__scope">{project.scope ?? project.role}</p>
        <ul
          className="project-card__stack"
          aria-label={`${project.title} technologies`}
        >
          {project.techStack.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {project.techStack.length > 4 && (
            <li
              aria-label={`${project.techStack.length - 4} more technologies`}
            >
              +{project.techStack.length - 4}
            </li>
          )}
        </ul>
        <div className="project-card__actions">
          <Link to={path} className="project-card__primary-link">
            View case study <HiArrowRight aria-hidden="true" />
          </Link>
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.links.liveLabel ?? 'Demo'}{' '}
              <HiExternalLink aria-hidden="true" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.links.githubLabel ?? 'Source'}{' '}
              <HiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
