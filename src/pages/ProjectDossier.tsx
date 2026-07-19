import { Link } from 'react-router-dom'
import { HiArrowLeft, HiDownload, HiExternalLink } from 'react-icons/hi'
import SEO from '../components/SEO'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import projectContent from '../data/projectContent'
import { experiences } from '../data/experience'
import { skillCategories } from '../data/skills'

const preparedDate = 'July 2026'

export default function ProjectDossier() {
  const education = experiences.filter((item) => item.type === 'education')
  const placements = experiences.filter((item) => item.type === 'work')
  const screenshotCount = projects.reduce((total, project) => total + project.screenshots.length, 0)

  return (
    <>
      <SEO
        title="Project Dossier | Sofiene Zayati"
        description="A detailed, CV-ready record of Sofiene Zayati's full-stack, AI, embedded, IoT, and product engineering projects."
        path="/project-dossier"
        type="profile"
      />
      <div className="dossier-page">
        <div className="dossier-toolbar" aria-label="Project dossier actions">
          <Link to="/" className="dossier-toolbar__link">
            <HiArrowLeft aria-hidden="true" /> Back to portfolio
          </Link>
          <a className="dossier-toolbar__download" href="/Sofiene_Zayati_Project_Dossier.pdf" download>
            <HiDownload aria-hidden="true" /> Download PDF
          </a>
        </div>

        <header className="dossier-cover">
          <div className="dossier-cover__mark" aria-hidden="true">SZ</div>
          <p className="dossier-kicker">Portfolio project context · {preparedDate}</p>
          <h1>Engineering project dossier</h1>
          <p className="dossier-cover__name">{profile.name}</p>
          <p className="dossier-cover__summary">
            A structured evidence record for CV tailoring, interview preparation, and professional-profile updates.
            It separates full-stack implementations, professional contributions, team projects, and frontend prototypes.
          </p>
          <dl className="dossier-cover__metrics">
            <div><dt>{projects.length}</dt><dd>documented projects</dd></div>
            <div><dt>{screenshotCount}</dt><dd>portfolio screens</dd></div>
            <div><dt>{placements.length}</dt><dd>professional placements</dd></div>
            <div><dt>{profile.languages.length}</dt><dd>working languages</dd></div>
          </dl>
          <div className="dossier-cover__contact">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
          </div>
        </header>

        <main className="dossier-document">
          <section className="dossier-section dossier-guidance">
            <div>
              <p className="dossier-kicker">How to use this document</p>
              <h2>CV and interview guidance</h2>
            </div>
            <div className="dossier-guidance__grid">
              <article>
                <strong>For CV updates</strong>
                <p>Pair this dossier with the current CV. Select only the projects and technologies relevant to the target role, then rewrite bullets around contribution, scope, and verified implementation.</p>
              </article>
              <article>
                <strong>Claim discipline</strong>
                <p>Do not describe a frontend prototype as a production SaaS. Preserve labels such as team project, owned microservice, personal MVP, local-first product, and interactive prototype.</p>
              </article>
              <article>
                <strong>Best evidence</strong>
                <p>Prioritize Machetamache for full-stack product ownership, SmartProperty for team-scale AI integration, Prigado for professional automation, and MacroPark for connected embedded systems.</p>
              </article>
            </div>
          </section>

          <section className="dossier-section dossier-profile">
            <div>
              <p className="dossier-kicker">Professional positioning</p>
              <h2>{profile.title}</h2>
              <p className="dossier-lead">{profile.tagline}</p>
            </div>
            <div className="dossier-skill-grid">
              {skillCategories.map((group) => (
                <article key={group.category}>
                  <h3>{group.category}</h3>
                  <p>{group.items.join(' · ')}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="dossier-section dossier-index">
            <div>
              <p className="dossier-kicker">Project index</p>
              <h2>Scope at a glance</h2>
            </div>
            <ol>
              {projects.map((project, index) => (
                <li key={project.id}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{project.title}</strong><small>{project.tagline}</small></div>
                  <em>{project.year}</em>
                </li>
              ))}
            </ol>
          </section>

          <section className="dossier-projects" aria-label="Detailed project records">
            {projects.map((project, index) => {
              const content = projectContent[project.id]
              const links = [
                project.links.github ? { label: project.links.githubLabel ?? 'Repository', url: project.links.github } : null,
                project.links.live ? { label: 'Demo', url: project.links.live } : null,
              ].filter(Boolean) as { label: string; url: string }[]

              return (
                <article className="dossier-project" id={`dossier-${project.id}`} key={project.id}>
                  <header className="dossier-project__header">
                    <span className="dossier-project__number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="dossier-kicker">{project.context} · {project.year}</p>
                      <h2>{project.title}</h2>
                      <p className="dossier-project__tagline">{project.tagline}</p>
                    </div>
                  </header>

                  <div className="dossier-project__summary">
                    <div>
                      <p>{project.longDescription}</p>
                      <dl>
                        <div><dt>Contribution</dt><dd>{project.role}</dd></div>
                        <div><dt>Declared scope</dt><dd>{project.scope ?? project.context}</dd></div>
                        <div><dt>Primary category</dt><dd>{project.category}{project.tags?.length ? ` + ${project.tags.join(', ')}` : ''}</dd></div>
                      </dl>
                    </div>
                    {project.screenshots[0] && (
                      <figure>
                        <img src={project.screenshots[0]} alt={`${project.title} representative interface`} />
                        <figcaption>Representative portfolio screen</figcaption>
                      </figure>
                    )}
                  </div>

                  {project.techStack.length > 0 && (
                    <div className="dossier-project__block">
                      <h3>Technology evidence</h3>
                      <ul className="dossier-tags">
                        {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="dossier-project__columns">
                    <div className="dossier-project__block">
                      <h3>Implemented capabilities</h3>
                      <ul className="dossier-detail-list">
                        {content.features.map((feature) => (
                          <li key={`${feature.group}-${feature.title}`}>
                            <strong>{feature.title}</strong>
                            <span>{feature.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="dossier-project__block">
                        <h3>Architecture and engineering</h3>
                        {content.architecture.map((item) => (
                          <div className="dossier-note" key={item.title}>
                            <strong>{item.title}</strong>
                            <p>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      {content.challenges?.length ? (
                        <div className="dossier-project__block">
                          <h3>Problems solved</h3>
                          <ul className="dossier-compact-list">
                            {content.challenges.map((challenge) => (
                              <li key={challenge.title}><strong>{challenge.title}:</strong> {challenge.desc}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {content.results?.length ? (
                    <div className="dossier-project__block dossier-results">
                      <h3>Outcome and CV-ready evidence</h3>
                      <div>
                        {content.results.map((result) => (
                          <article key={result.title}>
                            <strong>{result.title}</strong>
                            <p>{result.content}</p>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {links.length > 0 && (
                    <div className="dossier-project__links">
                      {links.map((link) => (
                        <a href={link.url} key={link.url}>{link.label} <HiExternalLink aria-hidden="true" /></a>
                      ))}
                    </div>
                  )}
                </article>
              )
            })}
          </section>

          <section className="dossier-section dossier-history">
            <div>
              <p className="dossier-kicker">Supporting context</p>
              <h2>Education and professional placements</h2>
            </div>
            <div className="dossier-history__columns">
              <div>
                <h3>Professional experience</h3>
                {placements.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <time>{item.period}</time>
                    <strong>{item.title}</strong>
                    <span>{item.organization}</span>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
              <div>
                <h3>Education</h3>
                {education.map((item) => (
                  <article key={`${item.period}-${item.title}`}>
                    <time>{item.period}</time>
                    <strong>{item.title}</strong>
                    <span>{item.organization}</span>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <footer className="dossier-footer">
            <strong>{profile.name}</strong>
            <span>{profile.email} · {profile.phone} · {profile.location}</span>
            <small>Prepared from the supplied project repositories and portfolio case-study data · {preparedDate}</small>
          </footer>
        </main>
      </div>
    </>
  )
}
