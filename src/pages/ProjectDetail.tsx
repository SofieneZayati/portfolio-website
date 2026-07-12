import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink, HiCollection, HiUsers, HiServer, HiCode } from 'react-icons/hi'
import { projects } from '../data/projects'
import projectContent from '../data/projectContent'
import ImageGallery from '../components/ImageGallery'
import ProjectSectionNav from '../components/ProjectSectionNav'
import SEO from '../components/SEO'

function ProjectSection({
  children,
  delay = 0,
  first = false,
  className = '',
  id,
}: {
  children: React.ReactNode
  delay?: number
  first?: boolean
  className?: string
  id?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-20 md:mb-28 last:mb-0 ${first ? 'mt-8 md:mt-10' : 'mt-16 md:mt-24'} ${className}`}
      style={id ? { scrollMarginTop: '5rem' } : undefined}
    >
      {children}
    </motion.section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label block mb-4">{children}</span>
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-display font-bold text-white max-w-2xl leading-[1.2] mb-8 md:mb-10 ${className}`}
    >
      {children}
    </h2>
  )
}

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)
  const content = id ? projectContent[id] : undefined

  if (!project || !content) {
    return (
      <>
        <SEO
          title="Project not found | Sofiene Zayati"
          description="The requested project could not be found."
          path={id ? `/project/${id}` : '/project'}
          noindex
        />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <span className="section-label block mb-4">404 / Project</span>
            <h1 className="text-4xl font-bold text-white mb-4">Project not found</h1>
            <p className="text-white/60 mb-8">The project may have moved or the link may be incorrect.</p>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[#00f5ff] hover:underline"
            >
              <HiArrowLeft /> Back to selected work
            </Link>
          </div>
        </div>
      </>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const totalTechs = content.techStack.reduce((sum, g) => sum + g.items.length, 0)
  const totalCategories = content.techStack.length
  const hasGallery = content.gallery && content.gallery.length > 0
  const hasArchitecture = content.architecture && content.architecture.length > 0
  const hasChallenges = content.challenges && content.challenges.length > 0
  const hasResults = content.results && content.results.length > 0
  const hasFacts = content.facts && content.facts.length > 0
  const hasMetrics = hasResults && content.results!.some((r) => r.metric)
  const hasFeatures = content.features.length > 0
  const heroPreviewSrc = project.screenshots[0] ?? content.gallery[0]?.src
  const heroPreviewCaption =
    content.gallery.find((image) => image.src === heroPreviewSrc)?.caption ??
    `${project.title} project preview`
  const contentDemoLink = content.cta.primary &&
    /demo|watch|live/i.test(`${content.cta.primary.label} ${content.cta.primary.url}`)
    ? content.cta.primary.url
    : undefined
  const contentCodeLink = content.cta.secondary?.find((link) =>
    /github|source|code|repository/i.test(`${link.label} ${link.url}`)
  )?.url
  const demoUrl = project.links.live ?? contentDemoLink
  const codeUrl = project.links.github ?? contentCodeLink
  const heroMetadata = [project.category, ...(content.status ?? [])].slice(0, 3)

  const sections = [
    ...(hasFacts ? [{ id: 'overview' as const, label: 'Overview' }] : []),
    ...(hasFeatures ? [{ id: 'capabilities' as const, label: 'Capabilities' }] : []),
    ...(content.techStack.length > 0 ? [{ id: 'stack' as const, label: 'Stack' }] : []),
    ...(hasArchitecture ? [{ id: 'architecture' as const, label: 'Architecture' }] : []),
    ...(hasGallery ? [{ id: 'gallery' as const, label: 'In Action' }] : []),
    ...(hasChallenges ? [{ id: 'decisions' as const, label: 'Considerations' }] : []),
    ...(hasResults ? [{ id: 'outcomes' as const, label: 'Outcomes' }] : []),
    { id: 'next-steps' as const, label: 'Next Steps' },
  ]

  return (
    <>
      <SEO
        title={`${project.title} | Sofiene Zayati`}
        description={`${project.description} A project by Sofiene Zayati.`}
        path={`/project/${project.id}`}
        image={project.logo || '/images/og-image.png'}
        imageAlt={`${project.title} project by Sofiene Zayati`}
        type="article"
      />
      <div className="min-h-screen pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-8">
      <div className="max-w-[1000px] mx-auto">
        {/* Back link */}
        <div>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#00f5ff] transition-colors mb-10 md:mb-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff]/60 rounded-lg"
          >
            <HiArrowLeft /> Back to projects
          </Link>
        </div>

        {/* 1. HERO */}
        <header className="mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-90"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
            ) : (
              <span className="text-xs font-bold text-white/50">
                {project.title.slice(0, 3).toUpperCase()}
              </span>
            )}
            <span className="text-xs font-display tracking-[0.25em] uppercase text-white/55 font-semibold">
              Selected project
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[0.98] tracking-[-0.04em] text-white mb-5 md:mb-6 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/65 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <ul className="flex flex-wrap items-center gap-2" aria-label="Project highlights">
              {heroMetadata.map((item, index) => (
                <li
                  key={item}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full border ${
                    index === 0
                      ? 'text-[#00f5ff]/90 border-[#00f5ff]/25 bg-[#00f5ff]/[0.05]'
                      : 'text-white/60 border-white/[0.1] bg-white/[0.02]'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {(demoUrl || codeUrl) && (
              <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Project links">
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} demo (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#050505] rounded-xl bg-[#00f5ff] hover:bg-white hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff]/60"
                  >
                    <HiExternalLink size={16} />
                    View demo
                  </a>
                )}
                {codeUrl && (
                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code (opens in a new tab)`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white/80 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:text-white hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5ff]/60"
                  >
                    <HiCode size={16} />
                    View code
                  </a>
                )}
              </div>
            )}
          </div>

          {heroPreviewSrc && (
            <figure className="mt-10 md:mt-14">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/[0.05] via-transparent to-[#8b5cf6]/[0.06]"
                  aria-hidden="true"
                />
                <img
                  src={heroPreviewSrc}
                  alt={heroPreviewCaption}
                  className="relative z-10 w-full h-full object-contain"
                  decoding="async"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
              <figcaption className="mt-3 text-xs text-white/55 leading-relaxed">
                {heroPreviewCaption}
              </figcaption>
            </figure>
          )}

          <div className="accent-rule mt-10 md:mt-16" />
        </header>

        <ProjectSectionNav sections={sections} />

        {/* 2. OVERVIEW (lead paragraph + stat cards) */}
        {hasFacts && (
          <ProjectSection id="overview" first>
            <div className="section-anchor mb-4" />
            <SectionLabel>Overview</SectionLabel>
            <h2 className="sr-only">Project overview</h2>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mb-10 md:mb-14">
              {project.description}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {content.facts.map((fact, i) => {
                const iconMap: Record<string, React.ReactNode> = {
                  Type: <HiCollection size={16} />,
                  Roles: <HiUsers size={16} />,
                  Deployment: <HiServer size={16} />,
                  Stack: <HiCode size={16} />,
                }
                return (
                  <div key={i} className="stat-card">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#00f5ff]/70">{iconMap[fact.label] || <HiCollection size={16} />}</span>
                      <span className="text-[0.6875rem] font-display font-semibold tracking-[0.2em] uppercase text-white/55">
                        {fact.label}
                      </span>
                    </div>
                    <div className="text-base md:text-lg font-semibold text-white/92 leading-[1.4]">
                      {fact.value}
                    </div>
                  </div>
                )
              })}
            </div>
          </ProjectSection>
        )}

        {/* 3. CAPABILITIES (grouped glass containers) */}
        {hasFeatures && (() => {
          const grouped = content.features.reduce<Record<string, typeof content.features>>((acc, f) => {
            const g = f.group || 'Capabilities'
            if (!acc[g]) acc[g] = []
            acc[g].push(f)
            return acc
          }, {})
          const groupNames = Object.keys(grouped)
          const groupAccents = ['#00f5ff', '#8b5cf6', '#ff0080', '#00f5ff', '#8b5cf6', '#ff0080']
          return (
            <ProjectSection id="capabilities">
              <div className="section-anchor mb-4" />
              <SectionLabel>Capabilities</SectionLabel>
              <SectionHeading>What it does</SectionHeading>
              <div className="grid md:grid-cols-2 gap-6">
                {groupNames.map((gName, gi) => {
                  const accentColor = groupAccents[gi % groupAccents.length]
                  const glowColor = accentColor + '1A'
                  return (
                    <motion.div
                      key={gName}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: gi * 0.08 }}
                      className="group relative"
                    >
                      <div
                        className="glass-card-elevated rounded-2xl p-8 card-left-glow card-hover-glow transition-all duration-500"
                        style={{
                          '--card-accent': accentColor,
                          '--card-glow': glowColor,
                        } as React.CSSProperties}
                      >
                        <div
                          className="group-accent -mx-8 -mt-8 mb-4"
                          style={{ backgroundColor: accentColor, height: '4px' }}
                        />
                        <h3 className="font-display font-bold text-white text-lg mb-4">
                          {gName}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                          {grouped[gName].map((feat, fi) => (
                            <div key={fi}>
                              <div className="flex items-center gap-3 mb-3">
                                <span className="icon-glow" aria-hidden="true">
                                  <span>{feat.icon}</span>
                                </span>
                                <span className="text-base font-semibold text-white">
                                  {feat.title}
                                </span>
                              </div>
                              <p className="text-sm text-white/60 leading-relaxed">
                                {feat.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </ProjectSection>
          )
        })()}

        {/* 4. STACK (single glass panel) */}
        {content.techStack.length > 0 && (
          <ProjectSection id="stack">
            <div className="section-anchor mb-4" />
            <SectionLabel>Stack</SectionLabel>
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white leading-[1.2]">
                <span className="text-gradient-cyan">{totalTechs}</span>{' '}
                <span className="text-white/85">technologies</span>{' '}
                <span className="text-white/60 font-normal text-xl">across {totalCategories} categories</span>
              </h2>
            </div>
            <div className="glass-card-elevated rounded-2xl p-6 md:p-8 hover:-translate-y-0.5 transition-transform duration-500">
              {content.techStack.map((group, gi) => (
                <div
                  key={gi}
                  className="tech-row border-b border-white/[0.04] last:border-b-0 !py-5 first:!pt-0 last:!pb-0"
                >
                  <span className="tech-row-label">{group.category}</span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="tech-pill"
                        title={item.description}
                        aria-label={item.description ? `${item.name}: ${item.description}` : item.name}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ProjectSection>
        )}

        {/* 5. ARCHITECTURE (subtle glass per block) */}
        {hasArchitecture && (
          <ProjectSection id="architecture">
            <div className="section-anchor mb-4" />
            <SectionLabel>Architecture</SectionLabel>
            <SectionHeading>System design</SectionHeading>
            <div className="space-y-6 max-w-[860px] mx-auto">
              {content.architecture.map((arch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group"
                >
                  <div className="glass-card-elevated rounded-2xl p-6 md:p-8 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="architecture-badge shrink-0">{pad2(i + 1)}</span>
                      <h3 className="architecture-title" style={{ marginBottom: 0 }}>{arch.title}</h3>
                    </div>
                    <p className="architecture-desc mb-5">{arch.desc}</p>
                    {arch.image && (
                      <figure className="mb-5">
                        <img
                          src={arch.image}
                          alt={arch.title}
                          className="w-full rounded-2xl border border-white/[0.04]"
                          loading="lazy"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </figure>
                    )}
                    {arch.items && arch.items.length > 0 && (
                      <ul className="architecture-items mt-5">
                        {arch.items.map((item, j) => (
                          <li key={j}>
                            <strong>{item.label}</strong>
                            <span>{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </ProjectSection>
        )}

        {/* 6. IN ACTION (gallery) */}
        {hasGallery && (
          <ProjectSection id="gallery">
            <div className="section-anchor mb-4" />
            <SectionLabel>In Action</SectionLabel>
            <SectionHeading>
              {content.gallery.length} screenshot{content.gallery.length !== 1 ? 's' : ''}
            </SectionHeading>
            <ImageGallery images={content.gallery} />
          </ProjectSection>
        )}

        {/* 7. ENGINEERING CONSIDERATIONS */}
        {hasChallenges && (
          <ProjectSection id="decisions">
            <div className="section-anchor mb-4" />
            <SectionLabel>Engineering Considerations</SectionLabel>
            <SectionHeading>What had to be solved</SectionHeading>
            <div className="space-y-6 max-w-3xl">
              {content.challenges!.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group"
                >
                  <div className="glass-card-elevated rounded-2xl p-6 md:p-8 decision-rule transition-transform duration-500">
                    <span className="text-xs font-display font-semibold tracking-[0.25em] uppercase text-white/55 block mb-2">
                      Consideration {pad2(i + 1)}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-4 leading-snug">
                      {ch.title}
                    </h3>
                    <p className="text-base text-white/65 leading-relaxed">{ch.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ProjectSection>
        )}

        {/* 8. OUTCOMES (metric tiles OR icon pillars, auto-detect) */}
        {hasResults && (
          <ProjectSection id="outcomes">
            <div className="section-anchor mb-4" />
            <SectionLabel>Outcomes</SectionLabel>
            <SectionHeading>What the project demonstrates</SectionHeading>
            {hasMetrics ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
                {content.results!.map((r, i) => (
                  <div key={i} className="max-w-xs">
                    {r.metric && <div className="metric-figure mb-3">{r.metric}</div>}
                    <div className="text-xs font-display font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
                      {r.title}
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">{r.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                {content.results!.map((r, i) => (
                  <div key={i} className="max-w-xs">
                    {r.icon && (
                      <div className="text-3xl mb-4" aria-hidden="true">
                        {r.icon}
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed whitespace-pre-line">
                      {r.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </ProjectSection>
        )}

        {/* 9. NEXT STEPS (centered, no card, no border) */}
        <ProjectSection id="next-steps">
          <div className="accent-rule mb-20" />
          <div className="text-center max-w-2xl mx-auto py-8">
            <span className="section-label block mb-6">Next Steps</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-[1.15] mb-5">
              Want to dive deeper?
            </h2>
            <p className="text-base text-white/55 leading-relaxed mb-10 max-w-md mx-auto">
              Open the available project resources or get in touch to discuss the engineering behind it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {content.cta.primary && (
                <a
                  href={content.cta.primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#050505] rounded-xl bg-[#00f5ff] hover:bg-white hover:-translate-y-1 transition-all duration-300"
                >
                  <HiExternalLink size={16} />
                  {content.cta.primary.label}
                </a>
              )}
              {content.cta.secondary?.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white/80 rounded-xl border border-white/[0.12] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
                >
                  <HiExternalLink size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </ProjectSection>

        {/* 10. PREV / NEXT NAVIGATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-6"
        >
          {prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="group flex items-center gap-3 text-left"
            >
              <HiArrowLeft className="text-white/55 group-hover:text-[#00f5ff] transition-colors shrink-0" />
              <div>
                <span className="text-xs text-white/55 block uppercase tracking-wider">Previous</span>
                <span className="text-lg font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="group flex items-center gap-3 text-right sm:text-left justify-end"
            >
              <div>
                <span className="text-xs text-white/55 block uppercase tracking-wider">Next</span>
                <span className="text-lg font-bold text-white group-hover:text-[#ff0080] transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <HiArrowRight className="text-white/55 group-hover:text-[#ff0080] transition-colors shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </div>
    </>
  )
}
