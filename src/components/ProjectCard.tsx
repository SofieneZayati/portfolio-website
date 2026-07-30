import { Link } from 'react-router-dom'
import { HiArrowRight, HiExternalLink } from 'react-icons/hi'
import type { Project } from '../data/projects'
import ProjectArtwork from './ProjectArtwork'

interface Props {
  project: Project
  featured?: boolean
}

const categoryLabels: Record<Project['category'], string> = {
  web: 'Web platform',
  embedded: 'Embedded system',
  mobile: 'Mobile product',
  ai: 'AI automation',
}

export default function ProjectCard({ project, featured = false }: Props) {
  const detailPath = `/project/${project.id}`
  const preview = project.screenshots[0]
  const techLimit = 3

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <Link to={detailPath} className="project-card__media" aria-label={`View ${project.title} case study`}>
        <ProjectArtwork
          project={project}
          src={preview}
          eager={featured}
          className={project.visualFit === 'cover' ? 'project-artwork-fit-cover' : ''}
        />
        <div className="project-card__media-shade" aria-hidden="true" />
        <span className="project-card__category">{categoryLabels[project.category]}</span>
        {project.logo && preview && (
          <span className="project-card__logo" aria-hidden="true">
            <img src={project.logo} alt="" />
          </span>
        )}
      </Link>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.year}</span>
          <span>{project.context}</span>
        </div>
        <h3>
          <Link to={detailPath}>{project.title}</Link>
        </h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__role">
          <span>Role &amp; ownership</span>
          <strong>{project.role}</strong>
          {project.scope && <small>{project.scope}</small>}
        </div>

        {project.techStack.length > 0 && (
          <ul className="project-card__stack" aria-label={`${project.title} technologies`}>
            {project.techStack.slice(0, techLimit).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
            {project.techStack.length > techLimit && <li>+{project.techStack.length - techLimit}</li>}
          </ul>
        )}

        <div className="project-card__actions">
          <Link to={detailPath} className="project-card__primary-link">
            Read case study <HiArrowRight aria-hidden="true" />
          </Link>
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              Demo <HiExternalLink aria-hidden="true" />
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              {project.links.githubLabel ?? 'Code'} <HiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
