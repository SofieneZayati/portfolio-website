import { createElement, Fragment, type CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  HiArrowRight,
  HiCamera,
  HiChartBar,
  HiChip,
  HiCloud,
  HiCog,
  HiCreditCard,
  HiDatabase,
  HiDesktopComputer,
  HiDeviceMobile,
  HiDocumentText,
  HiLockClosed,
  HiMicrophone,
  HiPhotograph,
  HiServer,
  HiSpeakerphone,
  HiUser,
  HiUsers,
  HiWifi,
} from 'react-icons/hi'
import {
  SiAngular,
  SiArduino,
  SiDocker,
  SiEspressif,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGooglecloud,
  SiGooglegemini,
  SiJenkins,
  SiKubernetes,
  SiLeaflet,
  SiMongodb,
  SiN8N,
  SiNestjs,
  SiOpenapiinitiative,
  SiReact,
  SiSonarqubeserver,
  SiSocketdotio,
  SiSpringboot,
  SiSqlite,
  SiStripe,
} from 'react-icons/si'
import type { ProjectDiagram, ProjectDiagramNode } from '../data/projectContent'

const laneAccents = ['#0891b2', '#7c3aed', '#db2777']

type DiagramNodeKind = 'actor' | 'device' | 'screen' | 'service' | 'data' | 'ai' | 'output'

type VisualDiagramNode = ProjectDiagramNode & {
  kind?: DiagramNodeKind
  icon?: string
  media?: {
    src: string
    alt: string
    fit?: CSSProperties['objectFit']
    position?: CSSProperties['objectPosition']
  }
}

const iconMap: Record<string, IconType> = {
  user: HiUser,
  users: HiUsers,
  agent: HiUser,
  admin: HiUser,
  accounting: HiUser,
  desktop: HiDesktopComputer,
  browser: HiDesktopComputer,
  launcher: HiDesktopComputer,
  product: HiDesktopComputer,
  mobile: HiDeviceMobile,
  server: HiServer,
  api: HiServer,
  gateway: HiServer,
  discovery: HiServer,
  router: HiServer,
  database: HiDatabase,
  backup: HiDatabase,
  persistence: HiDatabase,
  cloud: HiCloud,
  chip: HiChip,
  microchip: HiChip,
  prediction: HiChartBar,
  recommendation: HiChartBar,
  rating: HiChartBar,
  analytics: HiChartBar,
  document: HiDocumentText,
  ocr: HiDocumentText,
  code: HiDocumentText,
  package: HiDocumentText,
  image: HiPhotograph,
  media: HiPhotograph,
  vision: HiPhotograph,
  payment: HiCreditCard,
  microphone: HiMicrophone,
  audio: HiSpeakerphone,
  waveform: HiSpeakerphone,
  download: HiSpeakerphone,
  chart: HiChartBar,
  lock: HiLockClosed,
  barrier: HiLockClosed,
  identifier: HiLockClosed,
  wifi: HiWifi,
  ble: HiWifi,
  bluetooth: HiWifi,
  mqtt: HiWifi,
  realtime: HiWifi,
  camera: HiCamera,
  history: HiCog,
  workflow: HiCog,
  quality: HiCog,
  container: HiCog,
  temperature: HiCloud,
  moisture: HiCloud,
  led: HiCog,
  health: HiCog,
  star: HiChartBar,
  reply: HiSpeakerphone,
  artisan: HiUser,
  chat: HiSpeakerphone,
  email: HiSpeakerphone,
  logistics: HiCog,
  property: HiDesktopComputer,
  preferences: HiUsers,
  map: SiLeaflet,
  react: SiReact,
  nestjs: SiNestjs,
  fastapi: SiFastapi,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  express: SiExpress,
  flutter: SiFlutter,
  esp32: SiEspressif,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  jenkins: SiJenkins,
  sonarqube: SiSonarqubeserver,
  spring: SiSpringboot,
  angular: SiAngular,
  openapi: SiOpenapiinitiative,
  socketio: SiSocketdotio,
  stripe: SiStripe,
  leaflet: SiLeaflet,
  arduino: SiArduino,
  n8n: SiN8N,
  gemini: SiGooglegemini,
  googlecloud: SiGooglecloud,
}

const kindIconMap: Record<DiagramNodeKind, IconType> = {
  actor: HiUser,
  device: HiChip,
  screen: HiDesktopComputer,
  service: HiServer,
  data: HiDatabase,
  ai: HiChip,
  output: HiChartBar,
}

function inferIcon(node: VisualDiagramNode): IconType {
  if (node.icon && iconMap[node.icon]) return iconMap[node.icon]

  const label = node.label.toLowerCase()
  const matches: Array<[RegExp, IconType]> = [
    [/react/, SiReact],
    [/nest/, SiNestjs],
    [/fastapi/, SiFastapi],
    [/mongo/, SiMongodb],
    [/sqlite/, SiSqlite],
    [/express/, SiExpress],
    [/flutter/, SiFlutter],
    [/esp32|wt32/, SiEspressif],
    [/arduino/, SiArduino],
    [/docker/, SiDocker],
    [/kubernetes/, SiKubernetes],
    [/jenkins/, SiJenkins],
    [/sonar/, SiSonarqubeserver],
    [/spring/, SiSpringboot],
    [/angular/, SiAngular],
    [/openapi|swagger/, SiOpenapiinitiative],
    [/socket/, SiSocketdotio],
    [/stripe|payment/, SiStripe],
    [/leaflet|openstreetmap|map/, SiLeaflet],
    [/n8n/, SiN8N],
    [/gemini/, SiGooglegemini],
    [/phone|mobile/, HiDeviceMobile],
    [/browser|dashboard|interface|workspace|portal|client/, HiDesktopComputer],
    [/agent|admin|user|driver|accountant|seller|manager/, HiUser],
    [/people|roles|team/, HiUsers],
    [/database|data|storage|persistence|mysql/, HiDatabase],
    [/server|api|gateway|service|backend|broker|mqtt/, HiServer],
    [/camera|lpr/, HiCamera],
    [/image|media|clip|blip/, HiPhotograph],
    [/document|ocr|evidence/, HiDocumentText],
    [/voice|speech|microphone/, HiMicrophone],
    [/audio|wav|playback/, HiSpeakerphone],
    [/wifi|network|lan|ble|beacon/, HiWifi],
    [/recommend|model|xgboost|intelligence|ai|solvency/, HiChip],
    [/report|analytics|statistics|output|valuation/, HiChartBar],
    [/access|auth|permission|lock/, HiLockClosed],
    [/cloud|blynk/, HiCloud],
  ]

  return matches.find(([pattern]) => pattern.test(label))?.[1] ?? kindIconMap[node.kind ?? 'service'] ?? HiCog
}

function DiagramNode({ node, compact = false }: { node: VisualDiagramNode; compact?: boolean }) {
  const kind = node.kind ?? (node.media ? 'screen' : 'service')
  const icon = createElement(inferIcon(node))

  return (
    <div
      className={`system-map__node system-map__node--${kind}${node.media ? ' system-map__node--media' : ''}${compact ? ' system-map__node--compact' : ''}`}
      role="listitem"
    >
      {node.media ? (
        <div className="system-map__media">
          <img
            src={node.media.src}
            alt={node.media.alt}
            loading="lazy"
            style={{ objectFit: node.media.fit ?? 'cover', objectPosition: node.media.position ?? 'center' }}
          />
          <span aria-hidden="true">{icon}</span>
        </div>
      ) : (
        <span className="system-map__node-icon" aria-hidden="true">{icon}</span>
      )}

      <span className="system-map__node-copy">
        <strong>{node.label}</strong>
        {node.detail && <small>{node.detail}</small>}
      </span>
    </div>
  )
}

export default function ProjectSystemDiagram({ diagram }: { diagram: ProjectDiagram }) {
  const headingId = `system-map-${diagram.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`

  return (
    <figure className={`system-map system-map--${diagram.layout}`} aria-labelledby={headingId}>
      <figcaption className="system-map__header">
        <span>System workflow</span>
        <div>
          <h3 id={headingId}>{diagram.title}</h3>
          <p>{diagram.description}</p>
        </div>
      </figcaption>

      <div className="system-map__lanes">
        {diagram.lanes.map((lane, laneIndex) => (
          <section
            key={lane.label}
            className="system-map__lane"
            style={{ '--system-map-accent': laneAccents[laneIndex % laneAccents.length] } as CSSProperties}
            aria-label={lane.label}
          >
            <header className="system-map__lane-header">
              <span aria-hidden="true" />
              <h4>{lane.label}</h4>
            </header>

            <div className="system-map__flow" role="list">
              {lane.stages.map((stage, stageIndex) => (
                <Fragment key={stage.label}>
                  <article className="system-map__stage" role="listitem">
                    <h5>{stage.label}</h5>
                    <div
                      className={`system-map__nodes${stage.nodes.length > 1 ? ' system-map__nodes--branched' : ''}`}
                      role="list"
                    >
                      {stage.nodes.map((node, nodeIndex) => (
                        <DiagramNode key={`${node.label}-${nodeIndex}`} node={node as VisualDiagramNode} />
                      ))}
                    </div>
                  </article>

                  {stage.connector && stageIndex < lane.stages.length - 1 && (
                    <div className="system-map__connector" aria-label={`Connection: ${stage.connector}`}>
                      <span>{stage.connector}</span>
                      <HiArrowRight aria-hidden="true" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </section>
        ))}
      </div>

      {diagram.shared && (
        <aside className="system-map__shared" aria-label={diagram.shared.label}>
          <span>{diagram.shared.label}</span>
          <div role="list">
            {diagram.shared.nodes.map((node, nodeIndex) => (
              <DiagramNode key={`${node.label}-${nodeIndex}`} node={node as VisualDiagramNode} compact />
            ))}
          </div>
        </aside>
      )}
    </figure>
  )
}
