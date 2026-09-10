export type ProjectCategory = 'embedded' | 'web' | 'mobile' | 'ai'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription: string
  year: string
  role: string
  context: string
  scope?: string
  progress?: {
    available: string
    next: string
  }
  featured?: boolean
  techStack: string[]
  logo: string
  screenshots: string[]
  visualFit?: 'contain' | 'cover'
  category: ProjectCategory
  tags?: ProjectCategory[]
  links: {
    github?: string
    githubLabel?: string
    live?: string
  }
}

export const featuredProjectIds = [
  'benmahmoudstock',
  'geniuspmo',
  'macroparkexperience',
  'machetamache',
  'smartproperty',
  'tounsiads',
  'macropark',
  'prigado',
] as const

const portfolioOrder = [
  'benmahmoudstock',
  'geniuspmo',
  'macroparkexperience',
  'machetamache',
  'smartproperty',
  'macropark',
  'tounsiads',
  'prigado',
  'greencoffee',
  'aurelle',
  'pitchly',
  'interna',
  'daymark',
  'innomall',
  'digiservice',
  'secondchance',
  'smartunlock',
  'smartagri',
  'zenithhouse',
  'sps',
] as const

const portfolioRank = new Map<string, number>(
  portfolioOrder.map((projectId, index) => [projectId, index]),
)

const projectCatalog: Project[] = [
  {
    id: 'benmahmoudstock',
    title: 'Ben Mahmoud Stock',
    tagline: 'Offline Automotive Stock & Invoicing',
    description:
      'A production-minded Windows application for a Tunis automotive-parts shop, covering stock, clients, suppliers, negotiated invoices, returns, reporting, backups, and multilingual delivery.',
    longDescription:
      'I designed and engineered Ben Mahmoud Stock as a professional offline desktop application for Etablissement Ben Mahmoud. Electron keeps the shop independent from internet availability, while a typed IPC boundary protects the React renderer from raw Node and filesystem access. SQLite migrations, integer-millime money, transactional invoice finalization, immutable sale snapshots, returns, audit history, PDF printing, backup and restore, and a French-first interface make the system practical for everyday counter work.',
    year: '2026',
    role: 'Product designer & full-stack desktop engineer',
    context: 'Client product for an automotive-parts shop',
    scope: 'Offline Windows product · Client-ready delivery',
    featured: true,
    techStack: ['Electron', 'React 19', 'TypeScript', 'SQLite', 'electron-vite', 'PDF / Print', 'IPC', 'Windows'],
    logo: '/images/projects/benmahmoudstock/brand-icon.png',
    screenshots: [
      '/images/projects/benmahmoudstock/invoice-workspace.png',
      '/images/projects/benmahmoudstock/automotive-operations-editorial.webp',
    ],
    visualFit: 'cover',
    category: 'web',
    links: { github: 'https://github.com/SofieneZayati/Automobile-Stock' },
  },
  {
    id: 'macroparkexperience',
    title: 'MacroPark Experience',
    tagline: 'Interactive 3D Parking Consultation',
    description:
      'A client-facing 3D product experience where visitors choose a place, preview physical parking solutions, build a plan, and export a project brief without needing to understand the underlying technology.',
    longDescription:
      'MacroPark Experience turns the connected-parking platform into an interactive sales journey. Instead of presenting a feature list, it lets homeowners, residences, and retailers watch access, guidance, reservations, guest journeys, charging, and solar change a responsive 3D environment. The interface separates previewing from adding a solution, preserves a plan for each place, exports one consistent project brief, adapts graphics quality, supports reduced motion, and remains usable when WebGL is unavailable.',
    year: '2026',
    role: 'Product experience & 3D frontend engineer',
    context: 'Interactive sales experience for MacroPark',
    scope: 'Responsive 3D journey · Production build validated',
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'Three.js', 'React Three Fiber', 'GSAP', 'Zustand', 'WebGL', 'Node Test Runner'],
    logo: '/images/projects/macropark/macrologo.png',
    screenshots: ['/images/projects/macropark-experience/opening.png'],
    visualFit: 'cover',
    category: 'web',
    tags: ['embedded', 'mobile'],
    links: { github: 'https://github.com/SofieneZayati/MacroParkWeb' },
  },
  {
    id: 'daymark',
    title: 'Daymark',
    tagline: 'Calm Personal Planning Dashboard',
    description:
      'A compact personal dashboard that brings everyday tasks, a watchlist, and a game queue into one responsive, locally persistent workspace.',
    longDescription:
      'Daymark explores a quieter approach to personal planning. It combines quick capture, category-specific lists, completion filters, progress feedback, and device-local persistence in a responsive single-page dashboard. The project is intentionally small in scope and is presented as a polished product experiment rather than a production service.',
    year: '2026',
    role: 'Product designer & frontend engineer',
    context: 'Personal productivity experiment',
    scope: 'Responsive frontend · Device-local persistence',
    featured: false,
    techStack: ['React 19', 'TypeScript', 'Vinext', 'Vite', 'LocalStorage', 'Responsive CSS'],
    logo: '',
    screenshots: ['/images/projects/daymark/dashboard.png'],
    category: 'web',
    links: {},
  },
  {
    id: 'machetamache',
    title: 'Machetamache',
    tagline: 'Local-First Recipe & Food-Costing Studio',
    description:
      'A full-stack culinary workspace for a working chef, combining recipe operations, exact food costing, print-ready kitchen sheets, SQLite persistence, LAN access, and a portable Windows release.',
    longDescription:
      'Machetamache is a complete local-first product built for a real chef. It centralizes recipes, ingredient prices, portion scaling, production notes, profitability, photos, printing, and backups without requiring a cloud subscription. I engineered the React interface, Express API, SQLite data model, network-safety controls, automated tests, legacy-phone fallbacks, and branded Windows packaging from end to end.',
    year: '2026',
    role: 'Product designer & full-stack engineer',
    context: 'Culinary product for a working chef',
    scope: 'Full-stack local product · Windows release',
    featured: true,
    techStack: ['React 19', 'TypeScript', 'Express 5', 'SQLite', 'Vitest', 'Supertest', 'Vite', 'PowerShell'],
    logo: '/images/projects/machetamache/logo.png',
    screenshots: [
      '/images/projects/machetamache/recipe-library.webp',
      '/images/projects/machetamache/product-overview.png',
      '/images/projects/machetamache/mobile-recipe.png',
    ],
    category: 'web',
    tags: ['mobile'],
    links: { github: 'https://github.com/SofieneZayati/Machetamache' },
  },
  {
    id: 'smartproperty',
    title: 'SmartProperty',
    tagline: 'AI-Powered Real Estate Platform',
    description:
      'An end-to-end real estate platform combining multi-role property operations with recommendation, valuation, document intelligence, automation, and accessible AI.',
    longDescription:
      'SmartProperty connects a React product experience with NestJS and FastAPI services, MongoDB data, real-time workflows, AI and machine-learning capabilities, OCR solvency analysis, computer vision, deployment configuration, and role-specific journeys for agents, administrators, clients, and accountants.',
    year: '2026',
    role: 'Full-stack & AI engineer',
    context: 'AI-powered real estate platform',
    scope: 'Complete multi-service platform',
    featured: true,
    techStack: [
      'React',
      'NestJS',
      'FastAPI',
      'MongoDB',
      'XGBoost',
      'Groq',
      'Computer Vision',
      'Docker',
    ],
    logo: '/images/projects/smartproperty/SmartPropertyLogo.png',
    screenshots: [
      '/images/projects/smartproperty/realestatedashboard.png',
      '/images/projects/smartproperty/propertysearch.webp',
      '/images/projects/smartproperty/aianalysis.png',
      '/images/projects/smartproperty/homepage.webp',
      '/images/projects/smartproperty/admindashboard.png',
      '/images/projects/smartproperty/clientpropertydetails.webp',
      '/images/projects/smartproperty/aifeedrecommendation.webp',
      '/images/projects/smartproperty/aipriceestimation.png',
      '/images/projects/smartproperty/aiimagedesc.png',
      '/images/projects/smartproperty/chatbotaiaigent.png',
      '/images/projects/smartproperty/aihandsfreenavigationvoiceassistant.png',
      '/images/projects/smartproperty/engagements.png',
    ],
    category: 'ai',
    tags: ['web'],
    links: { live: 'https://youtu.be/z0v_b0Qgeng' },
  },
  {
    id: 'aurelle',
    title: 'Aurelle',
    tagline: 'Premium Aesthetics Client Experience',
    description:
      'A conversion-focused clinic concept that connects editorial brand storytelling with a guided treatment consultation, demo booking flow, and persistent member-care portal.',
    longDescription:
      'I designed and built Aurelle as a complete premium client experience around two business goals: converting mobile visitors into consultation requests and supporting retention through an organized member space. It includes guided goal discovery, appointment selection, persistent member care, accessible motion, medical disclaimers, and automated accessibility and visual smoke checks, with production clinic services planned as the next release.',
    year: '2026',
    role: 'Product & experience engineer',
    context: 'Client-ready aesthetics product',
    scope: 'Responsive product experience · Active development',
    progress: {
      available: 'Complete consultation, booking, and member-care journeys with automated interaction checks.',
      next: 'Connect scheduling, identity, content, and clinic operations services.',
    },
    featured: false,
    techStack: ['React 19', 'React Router', 'JavaScript', 'Motion', 'Playwright', 'axe-core', 'Vite'],
    logo: '',
    screenshots: [
      '/images/projects/aurelle/home-desktop.webp',
      '/images/projects/aurelle/consultation-result.png',
      '/images/projects/aurelle/member-portal.png',
      '/images/projects/aurelle/home-mobile.png',
    ],
    category: 'web',
    tags: ['mobile'],
    links: {},
  },
  {
    id: 'pitchly',
    title: 'Pitchly',
    tagline: 'Two-Sided Football Pitch Marketplace',
    description:
      'A polished reservation product connecting players and venue managers through discovery, availability, approval workflows, calendars, team spaces, and operational dashboards.',
    longDescription:
      'I designed and built Pitchly as a complete two-sided football-pitch reservation product. Players discover venues, choose slots, manage bookings, and coordinate a team; venue managers review the same requests, control schedules, inspect revenue signals, and maintain venue information. The connected product model is ready for production identity, payments, concurrency, and booking services.',
    year: '2026',
    role: 'Product engineer',
    context: 'Two-sided sports marketplace',
    scope: 'Complete product flows · Active development',
    progress: {
      available: 'Responsive player and venue-manager journeys with connected booking state.',
      next: 'Add production identity, payments, concurrency, and server-side slot locking.',
    },
    featured: false,
    techStack: ['React 19', 'TypeScript', 'Vite', 'Lucide', 'LocalStorage', 'Responsive CSS'],
    logo: '',
    screenshots: [
      '/images/projects/pitchly/player-dashboard.webp',
      '/images/projects/pitchly/find-a-pitch.png',
      '/images/projects/pitchly/manager-dashboard.png',
      '/images/projects/pitchly/manager-requests.png',
      '/images/projects/pitchly/player-mobile.png',
    ],
    category: 'web',
    tags: ['mobile'],
    links: { github: 'https://github.com/SofieneZayati/StadiumSaaS' },
  },
  {
    id: 'interna',
    title: 'Interna',
    tagline: 'University Internship Operations Platform',
    description:
      'A role-based university workspace for internship placements, applications, attendance, journals, documents, validations, evaluations, and AI-assisted report preparation.',
    longDescription:
      'I designed and built Interna around the complete university internship lifecycle. Program teams follow cohorts, placements, approval pipelines, attendance exceptions, documents, validations, and evaluations, while students manage progress, deadlines, journals, and report readiness. The product model and role-specific workflows are structured for the next production-service integration.',
    year: '2026',
    role: 'Product systems engineer',
    context: 'University operations product',
    scope: 'Dual-role product system · Active development',
    progress: {
      available: 'Complete program-office and student workflows across the internship lifecycle.',
      next: 'Connect authentication, institutional data, document storage, and report services.',
    },
    featured: false,
    techStack: ['React 19', 'JavaScript', 'Vite', 'Lucide', 'Responsive CSS', 'Local demo data'],
    logo: '',
    screenshots: [
      '/images/projects/interna/admin-overview.png',
      '/images/projects/interna/internships.png',
      '/images/projects/interna/ai-reports.png',
      '/images/projects/interna/student-portal.png',
      '/images/projects/interna/student-mobile.png',
    ],
    category: 'web',
    tags: ['ai', 'mobile'],
    links: { github: 'https://github.com/SofieneZayati/Interna' },
  },
  {
    id: 'prigado',
    title: 'Prigado AI',
    tagline: 'Intelligent E-Commerce Automation',
    description:
      'AI workflow automation for an e-commerce platform, with conversational assistants supporting product enrichment, analytics, marketing, and logistics operations.',
    longDescription:
      'During my Inspark Connect placement, I developed AI-powered workflows and assistants for the Prigado e-commerce platform. The work included n8n routing, intent extraction, JSON sanitization, structured SQL aggregation, Gemini integrations, and automated email flows connected to a Laravel and Vue.js product.',
    year: '2025',
    role: 'AI automation & full-stack developer',
    context: 'Professional placement',
    scope: 'Integrated into an existing platform',
    featured: true,
    techStack: ['n8n', 'Laravel', 'Vue.js', 'MySQL', 'Gemini', 'SMTP', 'REST APIs'],
    logo: '',
    screenshots: [
      '/images/projects/prigado/architecture-globale.webp',
      '/images/projects/prigado/usecase-general.webp',
      '/images/projects/prigado/workflow-logistics.png',
      '/images/projects/prigado/workflow-boost.png',
      '/images/projects/prigado/workflow-product-creation.png',
    ],
    category: 'ai',
    tags: ['web'],
    links: {},
  },
  {
    id: 'tounsiads',
    title: 'TounsiAds',
    tagline: 'Tunisian-Dialect Campaign & Voice Studio',
    description:
      'A React and Node MVP that turns a local business brief into an editable advertising campaign, then generates playable Tunisian-dialect voiceovers through server-side Gemini TTS.',
    longDescription:
      'TounsiAds is a full-stack MVP for building local advertising campaigns. Users can draft and edit concepts and scenes, manage brand and template settings, use browser speech input, and generate or download WAV voiceovers. The Gemini key remains on an Express server route, while drafts and workspace preferences are persisted locally for the prototype.',
    year: '2026',
    role: 'Product designer & full-stack developer',
    context: 'AI campaign product MVP',
    scope: 'Working MVP · Local persistence',
    featured: true,
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'Gemini TTS', 'Web Speech API', 'WAV'],
    logo: '',
    screenshots: [
      '/images/projects/tounsiads/campaign-overview.png',
      '/images/projects/tounsiads/campaign-script.png',
      '/images/projects/tounsiads/voice-studio.png',
      '/images/projects/tounsiads/templates.png',
      '/images/projects/tounsiads/brand-kits.png',
      '/images/projects/tounsiads/studio.png',
      '/images/projects/tounsiads/mobile-studio.png',
    ],
    category: 'ai',
    tags: ['web'],
    links: {},
  },
  {
    id: 'macropark',
    title: 'MacroPark',
    tagline: 'Connected Parking Access & Supervision System',
    description:
      'A complete parking management and supervision project combining an admin platform, Flutter mobile access, Quercus license-plate recognition, WT32 barrier control, MQTT orchestration, and containerized backend services.',
    longDescription:
      'MacroPark was my 2024 graduation project at Scheidt & Bachmann Maghreb, delivered across five Scrum sprints. I engineered and validated its administration, Flutter access, LPR/MQTT, and embedded barrier-control workflows. Administrators manage users, guests, access evidence, barriers, emergency commands, and event logs; drivers enter through camera-based plate recognition or the mobile app over BLE; and WT32-ETH01 firmware controls four barrier channels with persistent configuration and OTA maintenance.',
    year: '2024',
    role: 'Embedded systems & software engineer',
    context: 'Graduation project at Scheidt & Bachmann',
    scope: 'Complete multi-application IoT system',
    featured: true,
    techStack: ['C++ / Arduino', 'WT32-ETH01', 'Flutter', 'FastAPI', 'MQTT', 'BLE', 'Quercus SmartLPR', 'Docker Compose'],
    logo: '/images/projects/macropark/macrologo.png',
    screenshots: [
      '/images/projects/macropark/system-architecture.jpeg',
      '/images/projects/macropark/admin-dashboard.png',
      '/images/projects/macropark/admin-users.png',
      '/images/projects/macropark/access-history-lpr.png',
      '/images/projects/macropark/emergency-barrier-controls.png',
      '/images/projects/macropark/barrier-events.png',
      '/images/projects/macropark/mobile-barrier-access.png',
      '/images/projects/macropark/mobile-access-history.jpeg',
      '/images/projects/macropark/barrier-controller-hardware.png',
      '/images/projects/macropark/controller-portal.png',
      '/images/projects/macropark/controller-network-config.png',
      '/images/projects/macropark/controller-device-info.png',
      '/images/projects/macropark/controller-ota-update.png',
      '/images/projects/macropark/access-path-validation.png',
      '/images/projects/macropark/company-id-configuration.png',
    ],
    category: 'embedded',
    tags: ['mobile', 'web'],
    links: {
      github: 'https://github.com/SofieneZayati/MacroPark',
      githubLabel: 'Firmware',
    },
  },
  {
    id: 'geniuspmo',
    title: 'LeadX HRMS',
    tagline: 'Secure Workforce Operations & Mobile Attendance',
    description:
      'A role-aware workforce platform connecting company administration, HR, leadership, payroll, employee self-service, and server-authorized Android attendance.',
    longDescription:
      'I designed and engineered LeadX HRMS for Genius PMO as one source of truth for workforce operations. The responsive web platform and focused Android companion share a FastAPI and PostgreSQL backend that owns identity, scoped permissions, workflow state, attendance decisions, and audit history. The result moved beyond a prototype into a deployment-ready source handoff with automated checks, reproducible delivery, backup and recovery procedures, and a physically tested preview APK.',
    year: '2026',
    role: 'Product designer & full-stack engineer',
    context: 'Internship product for Genius PMO',
    scope: 'Web + Android platform · Company deployment handoff',
    progress: {
      available: 'Deployment-ready web, API, database, and mobile source; tested preview APK; recovery tooling; and company-facing handoff material.',
      next: 'Add the company HTTPS API URL, DNS/TLS, production secrets, database settings, and exact Office/proxy networks, then rebuild the final Android release.',
    },
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'Expo 54', 'FastAPI', 'PostgreSQL 17', 'Docker Compose', 'Alembic', 'Playwright'],
    logo: '/images/projects/leadx/leadx-attendance-app-icon.png',
    screenshots: [
      '/images/projects/leadx/01-login.png',
      '/images/projects/leadx/17-admin-overview.png',
      '/images/projects/leadx/02-mobile-today.png',
    ],
    category: 'web',
    tags: ['mobile'],
    links: {},
  },
  {
    id: 'greencoffee',
    title: 'Green Coffee OS',
    tagline: 'Coffee Shop Operations Platform',
    description:
      'A high-fidelity operations product connecting live orders, menus, reservations, tables, CRM and loyalty, campaigns, analytics, and role-focused workspaces.',
    longDescription:
      'I designed and built Green Coffee OS as one connected operating experience for owners, managers, baristas, floor staff, and customers. Live order states, menus, tables, reservations, CRM, loyalty, campaigns, and analytics share a coherent product model across responsive light and dark workspaces. Production identity, payments, messaging, realtime synchronization, and AI services form the next release.',
    year: '2026',
    role: 'Product systems engineer',
    context: 'Coffee operations product',
    scope: 'Multi-role product system · Active development',
    progress: {
      available: 'Five connected operational journeys with persistent order, menu, table, and customer state.',
      next: 'Connect production identity, payments, messaging, realtime synchronization, and AI services.',
    },
    featured: true,
    techStack: ['React 19', 'Vite', 'JavaScript', 'CSS', 'LocalStorage', 'SessionStorage'],
    logo: '',
    screenshots: [
      '/images/projects/greencoffee/dashboard.webp',
      '/images/projects/greencoffee/owner-dashboard.png',
      '/images/projects/greencoffee/orders.png',
      '/images/projects/greencoffee/floor-plan.png',
      '/images/projects/greencoffee/analytics.png',
      '/images/projects/greencoffee/customer-menu.webp',
      '/images/projects/greencoffee/barista-orders.png',
      '/images/projects/greencoffee/owner-mobile.png',
    ],
    category: 'web',
    links: { github: 'https://github.com/SofieneZayati/CoffeeShop-SaaS' },
  },
  {
    id: 'innomall',
    title: 'InnoMall',
    tagline: 'Integrated Mall Management Ecosystem',
    description:
      'A full-stack mall management platform with JavaFX and Symfony interfaces, IoT parking, reservations, payments, customer-support automation, and analytics.',
    longDescription:
      'I developed the full-stack and IoT workflows connecting multi-floor parking sensors, live availability, online reservations, Stripe payments, a Gemini assistant, Twilio notifications, and operational analytics across JavaFX and Symfony applications.',
    year: '2025',
    role: 'Full-stack & IoT engineer',
    context: 'Academic product project',
    scope: 'Desktop, web & IoT prototype',
    techStack: ['Symfony 6', 'Java', 'JavaFX', 'MySQL', 'Stripe API', 'Gemini API', 'Twilio', 'IoT Sensors'],
    logo: '/images/projects/innomall/innologo.png',
    screenshots: [
      '/images/projects/innomall/parking.png',
      '/images/projects/innomall/admin.png',
      '/images/projects/innomall/analytics.png',
      '/images/projects/innomall/payment.png',
      '/images/projects/innomall/web.png',
      '/images/projects/innomall/chatbot.png',
    ],
    category: 'web',
    tags: ['embedded'],
    links: { live: 'https://youtu.be/Zs875HdhmJ8' },
  },
  {
    id: 'digiservice',
    title: 'DigiService Reviews',
    tagline: 'Service Marketplace Microservice',
    description:
      'A Spring Boot reviews service for a microservices marketplace, supporting ratings, responses, filters, artisan statistics, OpenAPI documentation, and service discovery.',
    longDescription:
      'DigiService’s reviews and evaluations domain is a Java 17 Spring Boot API with review and response lifecycles, validation, filters, rating statistics, OpenAPI documentation, health endpoints, Eureka registration, and gateway integration.',
    year: '2025',
    role: 'Reviews microservice developer',
    context: 'Academic microservices project',
    scope: 'Reviews domain · API, data & integration',
    techStack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'OpenFeign', 'Eureka', 'OpenAPI', 'Angular'],
    logo: '/images/projects/digiservice/logo.svg',
    screenshots: ['/images/projects/digiservice/marketplace.jpg'],
    category: 'web',
    links: {},
  },
  {
    id: 'secondchance',
    title: 'SecondChance',
    tagline: 'Reintegration Support Platform',
    description:
      'A social-impact platform connecting formerly incarcerated people with job opportunities, training, support resources, community concepts, and administrative tools.',
    longDescription:
      'I built the FastAPI and MongoDB application foundation, server-rendered flows, user-data operations, and prototype journey for employment, training, support, and community resources.',
    year: '2025',
    role: 'Backend & application developer',
    context: 'Academic social-impact project',
    scope: 'Social-impact platform prototype',
    techStack: ['FastAPI', 'MongoDB', 'PyMongo', 'Motor', 'Jinja2', 'Pydantic'],
    logo: '/images/projects/secondchance/secondchancelogo.png',
    screenshots: [
      '/images/projects/secondchance/homepage.png',
      '/images/projects/secondchance/homedashboard.png',
      '/images/projects/secondchance/login.png',
      '/images/projects/secondchance/assistant-chatbot.png',
      '/images/projects/secondchance/job-opportunities.png',
      '/images/projects/secondchance/training-resources.png',
      '/images/projects/secondchance/support-network.png',
      '/images/projects/secondchance/community-chat.png',
    ],
    category: 'web',
    links: {},
  },
  {
    id: 'zenithhouse',
    title: 'ZenithHouse',
    tagline: 'Smart Home Automation System',
    description:
      'A connected-home prototype for room-level climate, lighting, and access control using ESP32 devices, a mobile interface, and Firebase realtime synchronization.',
    longDescription:
      'I designed ZenithHouse as a distributed home-automation system with ESP32 controllers assigned to room-level devices. A mobile application and Firebase coordinate user access, realtime state synchronization, and remote control for climate, lighting, and door-access functions.',
    year: '2024',
    role: 'Embedded & mobile developer',
    context: 'Embedded systems project',
    scope: 'IoT prototype',
    techStack: ['C++', 'Firebase', 'ESP32', 'IoT', 'Mobile App'],
    logo: '/images/projects/zenithhouse/zenithlogo.png',
    screenshots: ['/images/projects/zenithhouse/connected-home-concept.webp'],
    visualFit: 'cover',
    category: 'embedded',
    tags: ['mobile'],
    links: {},
  },
  {
    id: 'smartunlock',
    title: 'Smart Unlock',
    tagline: 'Keyless BLE Employee Access',
    description:
      'A BLE beacon access-control proof of concept using ESP32 scanning, Eddystone identifier checks, an LED relay simulation, and MQTT status messaging.',
    longDescription:
      'I built Smart Unlock during my internship at Scheidt & Bachmann. A phone beacon simulator and an ESP32 WROOM-32 scanner test a keyless access decision; a matched Eddystone identifier triggers the door-relay proof and publishes status through Mosquitto MQTT.',
    year: '2023',
    role: 'Hardware & software developer',
    context: 'Embedded systems internship',
    scope: 'Connected access prototype',
    techStack: ['C++', 'ESP32', 'Eddystone BLE', 'MQTT', 'Mosquitto'],
    logo: '/images/projects/smartunlock/smartunlocklogo.png',
    screenshots: [
      '/images/projects/smartunlock/prototype-access-granted.jpg',
      '/images/projects/smartunlock/prototype-hardware-enclosure.jpg',
      '/images/projects/smartunlock/prototype-hardware-open.jpg',
    ],
    category: 'embedded',
    links: {},
  },
  {
    id: 'sps',
    title: 'SPS',
    tagline: 'Smart Parking Mobile Application',
    description:
      'A native Android prototype for account access, parking-space presentation, and vehicle, plate, and owner records using Java, XML, and Firebase.',
    longDescription:
      'I built Smart Parking Solution as a native Android project with Java, XML, and Firebase. The application covers login, account creation, parking-space presentation, logout, and vehicle, plate, and owner records in one focused mobile flow.',
    year: '2023',
    role: 'Android & IoT developer',
    context: 'Mobile systems project',
    scope: 'Android prototype',
    techStack: ['Java', 'Android', 'XML', 'Firebase'],
    logo: '/images/projects/sps/spslogo.png',
    screenshots: ['/images/projects/sps/android-parking-concept.webp'],
    visualFit: 'cover',
    category: 'mobile',
    tags: ['embedded'],
    links: {},
  },
  {
    id: 'smartagri',
    title: 'Smart Agri',
    tagline: 'Connected Crop Monitoring',
    description:
      'An ESP32 agriculture-monitoring system that reads temperature, humidity, and soil moisture, sends telemetry to Blynk, and drives local status indicators.',
    longDescription:
      'I built Smart Agri as a connected sensing prototype around an ESP32, DHT11 climate sensor, analog soil-moisture probe, Wi-Fi, and Blynk. The firmware publishes field readings to remote widgets and drives local LED indicators for temperature, humidity, and moisture conditions, creating a compact device-to-cloud monitoring loop.',
    year: '2023',
    role: 'IoT & embedded developer',
    context: 'Connected agriculture project',
    scope: 'ESP32 sensing · Blynk telemetry',
    techStack: ['C++ / Arduino', 'ESP32', 'DHT11', 'Soil Moisture Sensor', 'Blynk', 'Wi-Fi'],
    logo: '/images/projects/smartagri/smartagrilogo.png',
    screenshots: ['/images/projects/smartagri/system-cover.webp'],
    visualFit: 'cover',
    category: 'embedded',
    tags: ['mobile'],
    links: {},
  },
]

export const projects = projectCatalog.sort(
  (left, right) =>
    (portfolioRank.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
    (portfolioRank.get(right.id) ?? Number.MAX_SAFE_INTEGER),
)
