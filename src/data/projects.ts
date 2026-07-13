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
  featured?: boolean
  techStack: string[]
  logo: string
  screenshots: string[]
  category: ProjectCategory
  tags?: ProjectCategory[]
  links: {
    github?: string
    githubLabel?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    id: 'smartproperty',
    title: 'SmartProperty',
    tagline: 'AI-Powered Real Estate SaaS',
    description:
      'A team-built, multi-role real estate platform for the Tunisian market, combining property operations with recommendation, valuation, document analysis, and accessible AI features.',
    longDescription:
      'SmartProperty is a multi-role real estate platform for agencies, owners, accountants, and clients. I contributed to application workflows, interface and notification improvements, solvency-analysis integration, testing, and cross-branch integration within a larger team system spanning web services, machine learning, OCR, and computer vision.',
    year: '2026',
    role: 'Full-stack & AI contributor',
    context: 'Academic team project',
    scope: 'Team-built product prototype',
    featured: true,
    techStack: [
      'React',
      'NestJS',
      'FastAPI',
      'MongoDB',
      'XGBoost',
      'Socket.IO',
      'Docker',
      'Kubernetes',
      'Jenkins',
    ],
    logo: '/images/projects/smartproperty/SmartPropertyLogo.png',
    screenshots: [
      '/images/projects/smartproperty/landingpage.png',
      '/images/projects/smartproperty/homepage.png',
      '/images/projects/smartproperty/propertysearch.png',
      '/images/projects/smartproperty/realestatepropertydetails.png',
      '/images/projects/smartproperty/clientpropertydetails.png',
      '/images/projects/smartproperty/realestatedashboard.png',
      '/images/projects/smartproperty/admindashboard.png',
      '/images/projects/smartproperty/clientdashboard.png',
      '/images/projects/smartproperty/accountantdash.png',
      '/images/projects/smartproperty/clientpropertyadd.png',
      '/images/projects/smartproperty/clientrequestvisit.png',
      '/images/projects/smartproperty/engagements.png',
      '/images/projects/smartproperty/aifeedrecommendation.png',
      '/images/projects/smartproperty/aipriceestimation.png',
      '/images/projects/smartproperty/aianalysis.png',
      '/images/projects/smartproperty/aiimagedesc.png',
      '/images/projects/smartproperty/clienttrustscore.png',
      '/images/projects/smartproperty/chatbotaiaigent.png',
      '/images/projects/smartproperty/aihandsfreenavigationvoiceassistant.png',
    ],
    category: 'web',
    tags: ['ai'],
    links: { live: 'https://youtu.be/z0v_b0Qgeng' },
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
    logo: '/images/projects/prigado/n8nlogo.jpg',
    screenshots: [
      '/images/projects/prigado/architecture-globale.png',
      '/images/projects/prigado/usecase-general.png',
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
      'TounsiAds is a personal full-stack MVP for building local advertising campaigns. Users can draft and edit concepts and scenes, manage brand and template settings, use browser speech input, and generate or download WAV voiceovers. The Gemini key remains on an Express server route, while drafts and workspace preferences are persisted locally for the prototype.',
    year: '2026',
    role: 'Product designer & full-stack developer',
    context: 'Personal AI product MVP',
    scope: 'Working MVP · Local persistence',
    featured: true,
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'Gemini TTS', 'Web Speech API', 'WAV'],
    logo: '',
    screenshots: ['/images/projects/tounsiads/studio.png'],
    category: 'ai',
    tags: ['web'],
    links: {},
  },
  {
    id: 'macropark',
    title: 'MacroPark',
    tagline: 'Smart Parking Ecosystem',
    description:
      'A connected parking system combining license-plate recognition, WT32 barrier controllers, a Flutter mobile app, MQTT communication, BLE fallback, and backend services.',
    longDescription:
      'Built during my graduation internship at Scheidt & Bachmann, MacroPark combines an administration platform, mobile access, barrier hardware, and license-plate recognition. WT32-ETH01 controllers communicate through MQTT, with BLE and network fallback paths, OTA firmware support, and FastAPI services for application and device workflows.',
    year: '2024',
    role: 'Embedded systems & software developer',
    context: 'Graduation internship',
    scope: 'End-to-end connected-system prototype',
    featured: true,
    techStack: ['C++', 'FastAPI', 'MQTT', 'BLE', 'Flutter', 'WT32-ETH01', 'LPR', 'Docker'],
    logo: '/images/projects/macropark/macrologo.png',
    screenshots: ['/images/projects/macropark/macroparkimg.png'],
    category: 'embedded',
    tags: ['mobile', 'web'],
    links: {
      github: 'https://github.com/SofieneZayati/MacroPark',
      githubLabel: 'Firmware',
    },
  },
  {
    id: 'geniuspmo',
    title: 'Genius PMO HRMS',
    tagline: 'HR Operations Dashboard Prototype',
    description:
      'A bilingual Next.js HR workspace covering workforce status, employee records, attendance, leave, draft payroll, documents, requests, reports, and biometric-enrollment simulation.',
    longDescription:
      'Genius PMO HRMS is a high-fidelity HR-manager frontend prototype built around realistic day-to-day operations. It includes responsive workflows, English and French modes, light and dark themes, accessible charts, CSV export, draft payslip generation, and carefully labeled demo interactions. The current version uses mock data and does not claim production authentication or a connected backend.',
    year: '2026',
    role: 'Frontend engineer',
    context: 'Client-facing frontend prototype',
    scope: 'Interactive prototype · Mock data',
    featured: true,
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PDF generation', 'CSV export'],
    logo: '/images/projects/geniuspmo/logo.png',
    screenshots: ['/images/projects/geniuspmo/dashboard.png'],
    category: 'web',
    links: {},
  },
  {
    id: 'greencoffee',
    title: 'Green Coffee OS',
    tagline: 'Coffee Shop Operations SaaS Prototype',
    description:
      'A high-fidelity React product prototype modelling live orders, menus, reservations, table operations, CRM and loyalty, campaigns, analytics, and role-focused workspaces.',
    longDescription:
      'Green Coffee OS translates a broad coffee-shop feature set into a coherent, responsive product experience. The prototype supports owner, manager, barista, floor-staff, and customer demo journeys with shared local data, protected demo routes, light and dark themes, and detailed operational modules. Production authentication, payments, messaging, realtime sync, and AI integrations remain clear next-step backend work.',
    year: '2026',
    role: 'Product designer & frontend engineer',
    context: 'Interactive SaaS prototype',
    scope: 'Frontend prototype · Browser persistence',
    featured: true,
    techStack: ['React 19', 'Vite', 'JavaScript', 'CSS', 'LocalStorage', 'SessionStorage'],
    logo: '',
    screenshots: ['/images/projects/greencoffee/dashboard.png'],
    category: 'web',
    links: { github: 'https://github.com/SofieneZayati/CoffeeShop-SaaS' },
  },
  {
    id: 'innomall',
    title: 'InnoMall',
    tagline: 'Integrated Mall Management Ecosystem',
    description:
      'A team-built mall management platform with JavaFX and Symfony interfaces, IoT parking, reservations, payments, customer support automation, and analytics.',
    longDescription:
      'InnoMall combines a JavaFX administration application and a Symfony web platform for customers and shop owners. I contributed to a team system that connected multi-floor parking sensors, live availability, online reservations, Stripe payment flows, a Gemini assistant, Twilio notifications, and operational analytics.',
    year: '2025',
    role: 'Full-stack & IoT contributor',
    context: 'Academic team project',
    scope: 'Multi-application team prototype',
    techStack: ['Symfony 6', 'Java', 'JavaFX', 'MySQL', 'Stripe API', 'Gemini API', 'Twilio', 'IoT Sensors'],
    logo: '/images/projects/innomall/innologo.png',
    screenshots: [
      '/images/projects/innomall/admin.png',
      '/images/projects/innomall/analytics.png',
      '/images/projects/innomall/payment.png',
      '/images/projects/innomall/parking.png',
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
      'My contribution to a team microservices platform: a Spring Boot reviews service supporting ratings, responses, filters, artisan statistics, OpenAPI documentation, and service discovery.',
    longDescription:
      'DigiService is a team-built marketplace for connecting clients with local service professionals. I owned the reviews and evaluations service: a Java 17 Spring Boot API with review and response lifecycles, validation, filters, rating statistics, OpenAPI documentation, health endpoints, Eureka registration, and gateway-ready integration with other services.',
    year: '2025',
    role: 'Reviews microservice developer',
    context: 'Academic team project',
    scope: 'Owned backend service in a larger platform',
    techStack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'OpenFeign', 'Eureka', 'OpenAPI', 'Angular'],
    logo: '/images/projects/digiservice/logo.png',
    screenshots: ['/images/projects/digiservice/marketplace.jpg'],
    category: 'web',
    links: {},
  },
  {
    id: 'secondchance',
    title: 'SecondChance',
    tagline: 'Reintegration Support Platform',
    description:
      'A team-built social-impact platform connecting formerly incarcerated people with job opportunities, training, support resources, community chat, and administrative tools.',
    longDescription:
      'SecondChance is a reintegration platform prototype designed around access to employment, training, support resources, and peer-community concepts. My work centered on FastAPI, MongoDB, server-rendered application flows, and the prototype user journey within the team project.',
    year: '2025',
    role: 'Backend & application contributor',
    context: 'Academic team project',
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
      'ZenithHouse explores distributed home automation with ESP32 controllers assigned to room-level devices. A mobile application and Firebase provide user access, state synchronization, and remote control for climate, lighting, and door-access functions.',
    year: '2024',
    role: 'Embedded & mobile developer',
    context: 'Embedded systems project',
    scope: 'IoT prototype',
    techStack: ['C++', 'Firebase', 'ESP32', 'IoT', 'Mobile App'],
    logo: '/images/projects/zenithhouse/zenithlogo.png',
    screenshots: [],
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
      'Created during an internship at Scheidt & Bachmann, Smart Unlock uses a phone beacon simulator and an ESP32 WROOM-32 scanner to test a keyless access decision. A matched Eddystone identifier triggers an LED as the door-relay proof and publishes status through Mosquitto MQTT.',
    year: '2023',
    role: 'Hardware & software developer',
    context: 'Embedded systems internship',
    scope: 'Connected access prototype',
    techStack: ['C++', 'ESP32', 'Eddystone BLE', 'MQTT', 'Mosquitto'],
    logo: '/images/projects/smartunlock/smartunlocklogo.png',
    screenshots: [],
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
      'Smart Parking Solution is a native Android project built with Java and XML. The documented prototype covers login, account creation, a parking-space view, logout, and vehicle records, with Firebase included in the application build.',
    year: '2023',
    role: 'Android & IoT developer',
    context: 'Mobile systems project',
    scope: 'Android prototype',
    techStack: ['Java', 'Android', 'XML', 'Firebase'],
    logo: '/images/projects/sps/spslogo.png',
    screenshots: [],
    category: 'mobile',
    tags: ['embedded'],
    links: {},
  },
  {
    id: 'smartagri',
    title: 'Smart Agri',
    tagline: 'Agricultural Monitoring Concept',
    description:
      'An archived agricultural-monitoring concept retained in the portfolio while its source files, implementation notes, and screenshots are being recovered.',
    longDescription:
      'The supplied Smart Agri folder is currently empty, so this archive entry intentionally avoids claiming a specific hardware, cloud, or mobile implementation until the original source and documentation are available.',
    year: 'Archive',
    role: 'Original implementation details pending',
    context: 'Archived project concept',
    scope: 'Source details pending',
    techStack: [],
    logo: '/images/projects/smartagri/smartagrilogo.png',
    screenshots: [],
    category: 'embedded',
    tags: ['mobile'],
    links: {},
  },
]
