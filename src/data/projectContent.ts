export interface ProjectContent {
  facts: { label: string; value: string }[]
  techStack: { category: string; items: { name: string; description?: string }[] }[]
  features: { group?: string; icon: string; title: string; desc: string }[]
  architecture: { title: string; image?: string; desc: string; items?: { label: string; desc: string }[] }[]
  gallery: { src: string; caption: string }[]
  challenges?: { title: string; desc: string }[]
  results?: { icon?: string; title: string; content: string; metric?: string }[]
  cta: { primary?: { label: string; url: string }; secondary?: { label: string; url: string }[] }
  status?: string[]
}

const base = '/images/projects'

const content: Record<string, ProjectContent> = {
  machetamache: {
    facts: [
      { label: 'Type', value: 'Local-First Full-Stack Product' },
      { label: 'Client', value: 'Working Chef' },
      { label: 'Storage', value: 'Shared SQLite Cookbook' },
      { label: 'Delivery', value: 'Portable Windows Release' },
    ],
    techStack: [
      {
        category: 'Product Interface',
        items: [
          { name: 'React 19', description: 'Responsive recipe, costing, settings, and print experiences' },
          { name: 'TypeScript', description: 'Shared domain models across browser and server' },
          { name: 'React Router', description: 'Recipe, ingredient, and settings workflows' },
          { name: 'Vite', description: 'Modern and legacy-compatible web bundles' },
        ],
      },
      {
        category: 'Backend & Data',
        items: [
          { name: 'Express 5', description: 'Same-origin JSON API and static production server' },
          { name: 'SQLite', description: 'Portable local persistence with better-sqlite3' },
          { name: 'Helmet', description: 'Security headers and explicit content policy' },
          { name: 'Integer money model', description: 'Milli-euro storage avoids floating-point rounding errors' },
        ],
      },
      {
        category: 'Quality & Distribution',
        items: [
          { name: 'Vitest', description: 'Domain and interface-level verification' },
          { name: 'Supertest', description: 'API and security behavior checks' },
          { name: 'PowerShell + WPF', description: 'Visible local server control panel' },
          { name: 'C# launcher', description: 'Branded one-click Windows startup and shutdown' },
        ],
      },
    ],
    features: [
      { group: 'Culinary Workflow', icon: 'R', title: 'Recipe Library', desc: 'Photos, search, filters, categories, favorites, archive, duplication, ordered steps, and production notes.' },
      { group: 'Culinary Workflow', icon: 'x', title: 'Portion Scaling', desc: 'Non-destructive quantity scaling with the option to preserve the result as a recipe variation.' },
      { group: 'Cost & Profit', icon: 'EUR', title: 'Exact Food Costing', desc: 'Ingredient price normalization, extra expenses, per-portion cost, revenue, profit, and margin calculations.' },
      { group: 'Cost & Profit', icon: 'S', title: 'Sub-Recipes & Versions', desc: 'Reusable preparations and version history support practical kitchen iteration.' },
      { group: 'Kitchen Delivery', icon: 'P', title: 'Print-Ready Sheets', desc: 'Kitchen and price-free print modes produce useful handoff documents instead of browser screenshots.' },
      { group: 'Kitchen Delivery', icon: 'LAN', title: 'Private Wi-Fi Access', desc: 'The same cookbook opens on the Windows host and phones connected to its private network.' },
      { group: 'Reliability', icon: 'B', title: 'Backup & Restore', desc: 'Full JSON export and restore protects the cookbook independently from the application package.' },
      { group: 'Reliability', icon: 'W', title: 'Portable Windows Package', desc: 'A branded launcher, bundled runtime, visible control panel, and external app-data storage make deployment approachable.' },
    ],
    architecture: [
      {
        title: 'One Cookbook, Two Device Classes',
        desc: 'A React client on the Windows PC and private-network phones talks to one Express server. The server owns the SQLite database, static production bundle, security checks, and controlled shutdown behavior.',
        items: [
          { label: 'Browser clients', desc: 'Responsive desktop and touch interfaces share the same culinary workflows.' },
          { label: 'Express server', desc: 'Validates private hosts, same-origin mutations, API input, and lifecycle controls.' },
          { label: 'SQLite file', desc: 'Lives under Windows app data so replacing the portable package does not remove recipes.' },
        ],
      },
      {
        title: 'Practical Local-First Distribution',
        desc: 'The launcher discovers the current private IP, starts the server, opens the local browser, and shows the phone URL. Modern and legacy bundles, UUID fallback behavior, and an early preflight screen cover real private-HTTP phone constraints.',
      },
    ],
    gallery: [
      { src: `${base}/machetamache/recipe-library.png`, caption: 'Desktop recipe library with search, lifecycle filters, featured content, and exact per-portion costs' },
      { src: `${base}/machetamache/product-overview.png`, caption: 'Product overview combining the desktop cookbook and compact mobile workflow' },
      { src: `${base}/machetamache/mobile-recipe.png`, caption: 'Touch-focused recipe detail designed for a phone on the same private Wi-Fi network' },
    ],
    challenges: [
      { title: 'Money Without Rounding Drift', desc: 'Food-cost and margin calculations use integer milli-euros rather than floating-point currency values.' },
      { title: 'Private HTTP on Real Phones', desc: 'Fallback UUID generation, a legacy bundle, compatible content security rules, and early error reporting address browser differences outside localhost.' },
      { title: 'Desktop-Grade Delivery from a Web Stack', desc: 'The product needed one-click Windows startup, visible server control, persistent data, and safe shutdown without asking the chef to use a terminal.' },
    ],
    results: [
      { icon: '1', title: 'One Shared Cookbook', content: 'PC and phone clients work against the same local data without cloud hosting or recurring infrastructure.' },
      { icon: 'QA', title: 'Verified Full Stack', content: 'Type checks, unit tests, API tests, production builds, and release packaging are part of the repository workflow.' },
      { icon: 'UX', title: 'Built Around Kitchen Work', content: 'Scaling, costing, printing, backups, and touch layouts solve daily operational tasks rather than presenting a static recipe catalog.' },
      { icon: 'WIN', title: 'Distributable Product', content: 'A portable Windows release packages the server, runtime, launchers, control panel, and user guidance.' },
    ],
    cta: {
      secondary: [
        { label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/Machetamache' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Full-Stack Product', 'Real User Workflow', 'Automated Tests', 'Windows Release'],
  },

  aurelle: {
    facts: [
      { label: 'Type', value: 'Premium Client Experience' },
      { label: 'Focus', value: 'Conversion + Retention' },
      { label: 'Journeys', value: 'Consultation, Booking, Portal' },
      { label: 'Quality', value: 'Automated Accessibility + Visual QA' },
    ],
    techStack: [
      {
        category: 'Experience',
        items: [
          { name: 'React 19', description: 'Public experience and member portal' },
          { name: 'React Router', description: 'Marketing and member-space routes' },
          { name: 'Motion', description: 'Responsive transitions with reduced-motion support' },
          { name: 'Custom CSS', description: 'Editorial, image-led responsive art direction' },
        ],
      },
      {
        category: 'State & Quality',
        items: [
          { name: 'LocalStorage', description: 'Demo booking persists into the member portal' },
          { name: 'Playwright Core', description: 'Desktop and mobile visual journey checks' },
          { name: 'axe-core', description: 'Automated accessibility audit coverage' },
          { name: 'Vite', description: 'Fast development and deployable production output' },
        ],
      },
    ],
    features: [
      { group: 'Acquisition', icon: 'A', title: 'Editorial Landing Experience', desc: 'A premium visual system communicates trust, restraint, treatment philosophy, and clear next actions.' },
      { group: 'Acquisition', icon: 'Q', title: 'Guided Consultation', desc: 'Goal-based questions lead to contextual recommendations while maintaining clear non-medical boundaries.' },
      { group: 'Conversion', icon: 'B', title: 'Demo Booking Flow', desc: 'Treatment context, date and time selection, confirmation, and persistence create a complete conversion journey.' },
      { group: 'Retention', icon: 'M', title: 'Member Care Portal', desc: 'Upcoming care, credits, routine, timeline, preparation notes, billing, and concierge messaging live in one space.' },
      { group: 'Quality', icon: 'A11Y', title: 'Accessible Interaction', desc: 'Semantic controls, focus states, mobile navigation, reduced motion, and automated checks support inclusive use.' },
      { group: 'Quality', icon: 'QA', title: 'Browser Smoke Journeys', desc: 'Automated desktop and mobile flows cover discovery, consultation, booking, portal navigation, and overflow checks.' },
    ],
    architecture: [
      {
        title: 'Connected Client Journey',
        desc: 'The public experience, guided consultation, booking flow, and member route share one product model. The next release connects the journey to production identity, scheduling, content, and payment services.',
      },
    ],
    gallery: [
      { src: `${base}/aurelle/home-desktop.png`, caption: 'Image-led landing experience with premium editorial direction and clear consultation entry points' },
      { src: `${base}/aurelle/consultation-result.png`, caption: 'Guided consultation result connecting stated goals to a safe, contextual next step' },
      { src: `${base}/aurelle/member-portal.png`, caption: 'Member portal supporting care preparation, credits, routine, timeline, and concierge needs' },
      { src: `${base}/aurelle/home-mobile.png`, caption: 'Responsive mobile composition retaining hierarchy and conversion actions' },
    ],
    challenges: [
      { title: 'Premium Without Friction', desc: 'The visual language needed to feel editorial while keeping navigation, calls to action, and text legible.' },
      { title: 'Safe Medical UX', desc: 'The consultation experience provides useful orientation without presenting a digital product as clinical advice.' },
      { title: 'One Continuous Journey', desc: 'A demo appointment selected on the public site must remain visible and meaningful inside the member portal.' },
    ],
    results: [
      { icon: '3', title: 'Three Connected Journeys', content: 'Discovery, consultation and booking, and ongoing member care form one coherent product narrative.' },
      { icon: 'QA', title: 'Repeatable Browser Verification', content: 'Visual smoke checks exercise the key desktop and mobile journeys instead of relying on static screenshots alone.' },
      { icon: 'A11Y', title: 'Accessibility Included', content: 'Automated axe checks and interaction-level accessibility decisions are built into the product workflow.' },
    ],
    cta: { secondary: [{ label: 'Contact Me', url: '/#contact' }] },
    status: ['Client-Ready Concept', 'Responsive', 'Automated QA'],
  },

  pitchly: {
    facts: [
      { label: 'Type', value: 'Two-Sided Marketplace Product' },
      { label: 'Actors', value: 'Players + Venue Managers' },
      { label: 'Core Flow', value: 'Discover to Approve' },
      { label: 'Data', value: 'Shared Browser State' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React 19', description: 'Player and manager workspaces' },
          { name: 'TypeScript', description: 'Typed venues, bookings, roles, and states' },
          { name: 'Vite', description: 'Development and production build pipeline' },
          { name: 'Lucide', description: 'Consistent interface iconography' },
        ],
      },
      {
        category: 'Connected Product State',
        items: [
          { name: 'LocalStorage', description: 'Shared reservation state across both demo roles' },
          { name: 'URL state', description: 'Direct role and page entry for reviewable flows' },
          { name: 'Responsive CSS', description: 'Desktop, tablet, and mobile navigation patterns' },
        ],
      },
    ],
    features: [
      { group: 'Player', icon: 'P', title: 'Venue Discovery', desc: 'Search, filters, favorites, list and map views, amenities, formats, ratings, distance, and pricing.' },
      { group: 'Player', icon: 'B', title: 'Reservation Workflow', desc: 'Date, time, duration, note, price, confirmation, cancellation, and status-aware booking details.' },
      { group: 'Player', icon: 'T', title: 'Team Space', desc: 'Roster, captain status, join code, invitations, next match, and team performance context.' },
      { group: 'Shared', icon: 'C', title: 'Calendar & Notifications', desc: 'Month and week schedule views connect booking changes to visible player and manager follow-up.' },
      { group: 'Manager', icon: 'A', title: 'Approval Queue', desc: 'Venue staff review the same pending requests and can approve or decline them from focused operational views.' },
      { group: 'Manager', icon: 'KPI', title: 'Venue Operations', desc: 'KPIs, revenue signals, occupancy, schedule, venue settings, hours, and availability support the supply side.' },
    ],
    architecture: [
      {
        title: 'One Product, Two Operational Perspectives',
        desc: 'A shared booking domain powers player and manager journeys. Direct role entry and persistent state let approvals and cancellations carry between both views while production services are integrated.',
        items: [
          { label: 'Player workspace', desc: 'Discovery, booking, calendar, booking history, and team coordination.' },
          { label: 'Shared state', desc: 'Venue and reservation records with explicit lifecycle status.' },
          { label: 'Manager workspace', desc: 'Requests, schedule, operational overview, and venue maintenance.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/pitchly/player-dashboard.png`, caption: 'Player overview combining the next match, booking metrics, venue discovery, and upcoming schedule' },
      { src: `${base}/pitchly/find-a-pitch.png`, caption: 'Search and discovery experience with venue details, availability, favorites, and booking entry points' },
      { src: `${base}/pitchly/manager-dashboard.png`, caption: 'Venue manager overview with operational KPIs, incoming requests, schedule, and revenue context' },
      { src: `${base}/pitchly/manager-requests.png`, caption: 'Manager approval queue showing shared reservation state and decisive actions' },
      { src: `${base}/pitchly/player-mobile.png`, caption: 'Compact player dashboard with mobile navigation and touch-friendly booking actions' },
    ],
    challenges: [
      { title: 'Two Sides of One Booking', desc: 'Player and manager views needed to read as different tools while remaining consistent about status and schedule.' },
      { title: 'Operational Density on Mobile', desc: 'Calendars, status details, teams, and approval actions required responsive information prioritization.' },
      { title: 'Production Integration Path', desc: 'Authentication, payments, concurrency, and server-side slot locking are defined as the next service-integration milestone.' },
    ],
    results: [
      { icon: '2', title: 'Complete Two-Sided Narrative', content: 'Both marketplace demand and supply workflows operate inside the same product system.' },
      { icon: '5', title: 'Five Booking States', content: 'Pending, confirmed, declined, completed, and cancelled states shape the relevant actions and messaging.' },
      { icon: 'RWD', title: 'Responsive Product System', content: 'Desktop, tablet, and mobile layouts support both role families without reducing the demo to a dashboard image.' },
    ],
    cta: {
      secondary: [
        { label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/StadiumSaaS' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Active Development', 'Two-Sided Workflow', 'Responsive Product'],
  },

  interna: {
    facts: [
      { label: 'Type', value: 'Education Operations SaaS' },
      { label: 'Actors', value: 'University Staff + Student' },
      { label: 'Coverage', value: 'Full Internship Lifecycle' },
      { label: 'Scope', value: 'Production Integration Ready' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React 19', description: 'Administration and student workspaces' },
          { name: 'JavaScript', description: 'Interactive modules and realistic demo state' },
          { name: 'Vite', description: 'Build and local preview workflow' },
          { name: 'Lucide', description: 'Accessible product icon system' },
        ],
      },
      {
        category: 'Product Design',
        items: [
          { name: 'Responsive CSS', description: 'Dense desktop administration and compact mobile views' },
          { name: 'Role-based navigation', description: 'Distinct information architecture for administrators and students' },
          { name: 'Local demo data', description: 'Cohorts, placements, documents, journals, attendance, and evaluations' },
        ],
      },
    ],
    features: [
      { group: 'Program Office', icon: 'KPI', title: 'Cohort Overview', desc: 'Lifecycle pipeline, active placements, approval rates, attendance, deadlines, and an action center.' },
      { group: 'Program Office', icon: 'I', title: 'Placement & Application Pipeline', desc: 'Students, companies, supervisors, dates, progress, stages, and attention states in connected views.' },
      { group: 'Follow-Up', icon: 'J', title: 'Journals & Validations', desc: 'Daily entries, review queues, milestones, supervisor feedback, and pending validation work.' },
      { group: 'Follow-Up', icon: 'A', title: 'Attendance Operations', desc: 'Program-level rate, exceptions, late arrivals, absences, and justification follow-up.' },
      { group: 'Assessment', icon: 'D', title: 'Documents & Evaluations', desc: 'Conventions, certificates, signatures, due dates, grading states, and final assessment.' },
      { group: 'Assessment', icon: 'AI', title: 'AI-Assisted Reports', desc: 'Report readiness, draft organization, progress inputs, and a dedicated assisted-writing workspace.' },
      { group: 'Student', icon: 'S', title: 'Personal Internship Workspace', desc: 'Individual progress, next steps, journal, attendance, deadlines, documents, and report readiness.' },
    ],
    architecture: [
      {
        title: 'Dual Information Architecture',
        desc: 'One React application switches between the university program office and the individual student perspective. Navigation, page metadata, dashboards, and task emphasis change by role while sharing a coherent internship domain.',
      },
    ],
    gallery: [
      { src: `${base}/interna/admin-overview.png`, caption: 'University overview with cohort pipeline, attention queue, attendance trend, deadlines, and live placements' },
      { src: `${base}/interna/internships.png`, caption: 'Placement management view connecting students, companies, supervisors, dates, progress, and health' },
      { src: `${base}/interna/ai-reports.png`, caption: 'AI-assisted report workspace and readiness tracking within the broader assessment flow' },
      { src: `${base}/interna/student-portal.png`, caption: 'Student workspace focusing the same domain on individual progress and next actions' },
      { src: `${base}/interna/student-mobile.png`, caption: 'Responsive student experience for internship follow-up away from a desktop' },
    ],
    challenges: [
      { title: 'A Long Lifecycle, One Mental Model', desc: 'Applications, conventions, attendance, journals, validations, documents, and grades needed to feel connected rather than like separate tools.' },
      { title: 'Role-Appropriate Density', desc: 'Program administrators need portfolio-level oversight while students need a calm personal task view.' },
      { title: 'Useful AI Placement', desc: 'Assistance is positioned inside report readiness and validated journal evidence rather than as an isolated chatbot.' },
    ],
    results: [
      { icon: '2', title: 'Two Complete Workspaces', content: 'A program administrator and a student can each demonstrate a role-specific end-to-end experience.' },
      { icon: '8', title: 'Eight Lifecycle Domains', content: 'Placements, applications, journals, attendance, validations, documents, reports, and evaluations share one system.' },
      { icon: 'API', title: 'Production Integration Path', content: 'The product domain and role workflows define a clear contract for authentication, institutional data, documents, and report services.' },
    ],
    cta: {
      secondary: [
        { label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/Interna' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Active Development', 'Dual Role', 'AI-Assisted Workflow'],
  },

  smartproperty: {
    facts: [
      { label: 'Type', value: 'End-to-End AI Real Estate Platform' },
      { label: 'Ownership', value: 'Sole Builder · Product to Deployment' },
      { label: 'Roles', value: 'Agent, Admin, Client, Accountant' },
      { label: 'Delivery', value: 'Multi-Service Product System' },
    ],
    techStack: [
      {
        category: 'Product Experience',
        items: [
          { name: 'React', description: 'Role-specific product journeys and dashboards' },
          { name: 'Tailwind CSS', description: 'Responsive interface and design system' },
          { name: 'Zustand', description: 'Global product and authentication state' },
          { name: 'Pannellum', description: 'Interactive 360-degree property tours' },
        ],
      },
      {
        category: 'Platform Services',
        items: [
          { name: 'NestJS', description: 'API gateway, authentication, and business services' },
          { name: 'FastAPI', description: 'Machine-learning and computer-vision services' },
          { name: 'REST APIs', description: 'Product and service communication' },
          { name: 'Socket.IO', description: 'Realtime events and notifications' },
          { name: 'Stripe', description: 'Payment workflows' },
        ],
      },
      {
        category: 'AI & Intelligence',
        items: [
          { name: 'XGBoost', description: 'Property valuation and rent prediction' },
          { name: 'Groq', description: 'Conversational assistance and decision rationale' },
          { name: 'CLIP + BLIP', description: 'Property-image understanding and descriptions' },
          { name: 'OCR.space', description: 'Applicant-document extraction and solvency analysis' },
          { name: 'Recommendation engine', description: 'Preference, budget, and property matching' },
        ],
      },
      {
        category: 'Data, Maps & Delivery',
        items: [
          { name: 'MongoDB Atlas', description: 'Primary product data and analysis outputs' },
          { name: 'Leaflet + OpenStreetMap', description: 'Location-aware property discovery' },
          { name: 'Cloudinary', description: 'Property media storage and transformation' },
          { name: 'Docker + Kubernetes', description: 'Container and orchestration configuration' },
          { name: 'Jenkins + SonarQube', description: 'Delivery automation and quality gates' },
        ],
      },
    ],
    features: [
      { group: 'Property Operations', icon: '🏠', title: 'Listing Lifecycle', desc: 'Create, publish, discover, compare, visit, apply for, and manage properties across one connected workflow.' },
      { group: 'Property Operations', icon: '◎', title: 'Multi-Role Dashboards', desc: 'Dedicated operational views for real-estate agents, administrators, clients, and accountants.' },
      { group: 'Property Operations', icon: '📅', title: 'Visits & Applications', desc: 'Multi-slot visit scheduling, application tracking, status history, and decisive follow-up actions.' },
      { group: 'AI Discovery', icon: '🎯', title: 'Recommendation Engine', desc: 'Ranks properties using budget, preferences, listing attributes, and location criteria.' },
      { group: 'AI Discovery', icon: '📈', title: 'Predictive Valuation', desc: 'XGBoost estimates sale and rental pricing from property attributes and historical market data.' },
      { group: 'AI Discovery', icon: '🖼', title: 'Image Intelligence', desc: 'CLIP and BLIP interpret property photos and generate room-by-room listing descriptions.' },
      { group: 'Trust & Decisions', icon: '📄', title: 'Document Intelligence', desc: 'OCR extracts identity, income, and supporting evidence for applicant verification.' },
      { group: 'Trust & Decisions', icon: '⚖', title: 'Solvency & Fraud Signals', desc: 'Affordability, mismatches, occupation, document quality, and reuse checks produce explainable review evidence.' },
      { group: 'Trust & Decisions', icon: '✓', title: 'Human-Controlled Decisions', desc: 'Approve, review, or reject recommendations stay visible and require an explicit agent action.' },
      { group: 'Assisted Experience', icon: '🤖', title: 'AI Property Assistant', desc: 'Groq-powered conversation answers property questions, estimates budgets, and guides users through the platform.' },
      { group: 'Assisted Experience', icon: '🎤', title: 'Voice Navigation', desc: 'Natural-language voice input supports hands-free search and navigation.' },
      { group: 'Operations & Delivery', icon: '⚡', title: 'Realtime Analytics', desc: 'Socket.IO updates and branch-level engagement signals connect daily operations to measurable listing activity.' },
    ],
    architecture: [
      {
        title: 'Role-Based Product Platform',
        desc: 'The React application presents focused journeys for agents, administrators, clients, and accountants while NestJS coordinates authentication, business services, media, payments, and realtime events.',
        items: [
          { label: 'React product', desc: 'Search, dashboards, listings, visits, applications, analytics, and assisted experiences.' },
          { label: 'NestJS services', desc: 'Role-aware APIs, authentication, business rules, payments, and orchestration.' },
          { label: 'MongoDB Atlas', desc: 'Users, branches, properties, applications, analytics, and AI outputs.' },
          { label: 'Socket.IO', desc: 'Live notifications and operational refresh across roles.' },
          { label: 'Cloudinary', desc: 'Listing imagery and media transformation.' },
          { label: 'Stripe', desc: 'Payment and transaction workflows.' },
        ],
      },
      {
        title: 'AI, Vision & Document Pipeline',
        desc: 'Specialized services turn property data, user preferences, uploaded documents, and listing imagery into explainable product assistance.',
        items: [
          { label: 'XGBoost', desc: 'Property valuation and predictive pricing.' },
          { label: 'Recommendation layer', desc: 'Budget, preference, property, and location-aware ranking.' },
          { label: 'CLIP + BLIP', desc: 'Image understanding and room-description generation.' },
          { label: 'OCR + solvency engine', desc: 'Document extraction, affordability, anomaly signals, and explainable recommendations.' },
          { label: 'Groq assistant', desc: 'Conversational guidance, budget support, and concise rationale.' },
          { label: 'Voice layer', desc: 'Natural-language navigation and search.' },
        ],
      },
      {
        title: 'Delivery & Quality System',
        desc: 'Container, orchestration, automation, and quality configuration support the multi-service product as one maintainable engineering system.',
        items: [
          { label: 'Docker', desc: 'Repeatable service environments.' },
          { label: 'Kubernetes', desc: 'Workload and service configuration.' },
          { label: 'Jenkins', desc: 'Automated delivery pipelines.' },
          { label: 'SonarQube', desc: 'Static analysis and quality gates.' },
          { label: 'REST contracts', desc: 'Clear boundaries between product, platform, and intelligence services.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/smartproperty/realestatedashboard.png`, caption: 'Real-estate agent command center with portfolio KPIs, applications, visits, and operational priorities' },
      { src: `${base}/smartproperty/propertysearch.png`, caption: 'Map-based property discovery with location, radius, price, and listing filters' },
      { src: `${base}/smartproperty/aianalysis.png`, caption: 'AI solvency analysis combining OCR evidence, affordability, anomaly signals, and an explainable recommendation' },
      { src: `${base}/smartproperty/homepage.png`, caption: 'Personalized property discovery with intelligent search and voice-enabled input' },
      { src: `${base}/smartproperty/admindashboard.png`, caption: 'Administration workspace for platform health, branches, support queues, and rapid actions' },
      { src: `${base}/smartproperty/clientpropertydetails.png`, caption: 'Client property detail with virtual viewing, comparison, application, and visit actions' },
      { src: `${base}/smartproperty/aifeedrecommendation.png`, caption: 'AI-ranked property feed built around the client profile, preferences, budget, and listing signals' },
      { src: `${base}/smartproperty/aipriceestimation.png`, caption: 'Predictive pricing workflow for estimating rent from amenities, type, and location' },
      { src: `${base}/smartproperty/aiimagedesc.png`, caption: 'Computer-vision workflow generating useful room-by-room property descriptions' },
      { src: `${base}/smartproperty/chatbotaiaigent.png`, caption: 'Conversational property assistant for questions, budget guidance, and product navigation' },
      { src: `${base}/smartproperty/aihandsfreenavigationvoiceassistant.png`, caption: 'Voice assistant supporting hands-free navigation and natural-language property search' },
      { src: `${base}/smartproperty/engagements.png`, caption: 'Listing engagement analytics covering views, clicks, saves, and unique visitors' },
    ],
    challenges: [
      { title: 'One Platform, Four Operational Roles', desc: 'Each role needed focused information and permissions without fragmenting the shared property, visit, application, and financial lifecycle.' },
      { title: 'AI That Supports Decisions', desc: 'Valuation, recommendations, image understanding, and solvency analysis had to expose useful evidence instead of presenting opaque model output.' },
      { title: 'Reliable Multi-Service Boundaries', desc: 'Product APIs, realtime events, ML services, media, maps, payments, and document extraction needed clear contracts and resilient failure behavior.' },
      { title: 'Dense Workflows, Accessible Interaction', desc: 'Feature-rich dashboards still needed readable hierarchy, keyboard-aware controls, voice input, and understandable feedback.' },
      { title: 'Human Control in High-Stakes Flows', desc: 'Solvency recommendations remain reviewable and require an explicit agent action before application state changes.' },
    ],
    results: [
      { icon: '4', title: 'Role-Specific Workspaces', metric: '4 roles', content: 'Agents, administrators, clients, and accountants each receive a focused operational journey.' },
      { icon: 'AI', title: 'Connected Intelligence Layer', metric: '5 flows', content: 'Recommendation, valuation, image description, solvency analysis, and conversational assistance work inside the product.' },
      { icon: '◎', title: 'Complete Property Lifecycle', metric: 'End to end', content: 'Discovery, listing, visits, applications, decisions, payments, analytics, and administration connect as one system.' },
      { icon: '⚡', title: 'Realtime Operations', metric: 'Live', content: 'Notifications and dashboard signals keep role-specific work aligned with platform activity.' },
      { icon: '⚖', title: 'Explainable Trust Decisions', metric: 'Human led', content: 'Document evidence, anomaly signals, and explicit recommendations support rather than replace the reviewer.' },
    ],
    cta: {
      primary: { label: 'Watch Demo', url: 'https://youtu.be/z0v_b0Qgeng' },
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Solo-Built', 'End-to-End Ownership', 'Multi-Role SaaS', 'AI + Computer Vision', 'OCR', 'Microservices'],
  },

  prigado: {
    facts: [
      { label: 'Type', value: 'Internship Project' },
      { label: 'Domain', value: 'E-Commerce AI Automation' },
      { label: 'Stack', value: 'AI + Automation' },
      { label: 'Role', value: 'AI Workflow Engineer' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Vue.js', description: 'Admin and seller interfaces' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Laravel', description: 'Core e-commerce platform' },
          { name: 'n8n', description: 'Workflow orchestration engine' },
        ],
      },
      {
        category: 'Database',
        items: [
          { name: 'MySQL', description: 'Relational business data' },
        ],
      },
      {
        category: 'AI & Automation',
        items: [
          { name: 'Google Gemini', description: 'Intent extraction & generation' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'SMTP', description: 'Marketing campaign email delivery' },
          { name: 'REST APIs', description: 'Service-to-service communication' },
        ],
      },
    ],
    features: [
      { group: 'Conversational AI', icon: '📦', title: 'Product Creation Assistant', desc: 'Multi-path workflow handling add product, query product, and general help intents with price enrichment, category suggestion, tag generation, and MySQL insertion.' },
      { group: 'Insights & Operations', icon: '📈', title: 'Boost — Marketing & Sales', desc: 'Automated email campaigns, sales reports by seller, bundle suggestions, and social post generation based on business data.' },
      { group: 'Insights & Operations', icon: '🚚', title: 'Logistics Intelligence', desc: 'Peak activity prediction, trending product ranking, and customer risk classification using order history and delivery patterns.' },
      { group: 'Conversational AI', icon: '🧭', title: 'AI Router & Intent Extraction', desc: 'Strict intent routing with JSON guardrails, sanitized AI outputs, and consistent payload structures across all workflow branches.' },
      { group: 'Conversational AI', icon: '📊', title: 'SQL Aggregation for AI', desc: 'Aggregate nodes consolidate relational SQL rows into structured arrays, ensuring AI agents receive clean, readable inputs for accurate responses.' },
      { group: 'Conversational AI', icon: '✅', title: 'Business-Ready Outputs', desc: 'Reports, recommendations, and campaign content delivered in formats ready for decision-makers without manual processing.' },
    ],
    architecture: [
      {
        title: 'System Architecture',
        image: `${base}/prigado/architecture-globale.png`,
        desc: 'AI assistants sit on top of the Prigado Laravel+Vue.js stack, orchestrating MySQL, Gemini, and external APIs through n8n workflows.',
      },
      {
        title: 'Multi-Path Routing',
        image: `${base}/prigado/flowchart-multi-path.png`,
        desc: 'Intent-driven routing directs user requests to specialized workflow paths based on extracted intent and parameters.',
      },
      {
        title: 'Use Case Coverage',
        image: `${base}/prigado/usecase-general.png`,
        desc: 'Comprehensive coverage across admin, seller, and customer workflows.',
      },
    ],
    gallery: [
      { src: `${base}/prigado/workflow-product-creation.png`, caption: 'Product Creation Workflow' },
      { src: `${base}/prigado/workflow-boost.png`, caption: 'Boost — Campaigns & Sales Reports' },
      { src: `${base}/prigado/workflow-logistics.png`, caption: 'Logistics — Peak Prediction & Risk' },
      { src: `${base}/prigado/M1Add.png`, caption: 'Add Product with Price Enrichment' },
      { src: `${base}/prigado/tags.png`, caption: 'SEO Tag Generation' },
      { src: `${base}/prigado/path-b-list-products.png`, caption: 'Product Query Response' },
      { src: `${base}/prigado/generalHelp.png`, caption: 'General Help — FAQ Assistance' },
      { src: `${base}/prigado/campaign.png`, caption: 'AI-Written Email Campaign' },
      { src: `${base}/prigado/Profit.png`, caption: 'Sales Report by Seller' },
      { src: `${base}/prigado/trend.png`, caption: 'Trending Products — Last 30 Days' },
      { src: `${base}/prigado/risk.png`, caption: 'Customer Risk Classification' },
    ],
    challenges: [
      { title: 'Guard Clauses for Empty Data', desc: 'Explicit fallback responses for missing or empty SQL results to prevent ambiguous AI answers.' },
      { title: 'Consistent Payloads Across Branches', desc: 'Set and Code nodes normalize JSON structures before merges to keep outputs stable across all paths.' },
      { title: 'Sanitized AI Outputs', desc: 'Regex-based cleanup ensures strict JSON compliance for downstream nodes and reduces runtime parsing errors.' },
      { title: 'Relational Joins for Analytics', desc: 'Precise joins between users, orders, order_details, products, and categories to deliver accurate business insights.' },
    ],
    results: [
      { icon: '⚡', title: 'Efficiency', content: 'Automated key business processes across product creation, sales, marketing, and logistics — reducing manual effort significantly.' },
      { icon: '📊', title: 'Data Quality', content: 'Standardized SQL aggregations and sanitized AI outputs ensure consistent, reliable data for decision-making.' },
      { icon: '🚀', title: 'Speed', content: 'Delivered fast, readable outputs ready for operators and executives without additional processing.' },
    ],
    cta: {
      primary: { label: 'Download Internship Report', url: `${base}/prigado/Rapport_de_stage_Prigado.pdf` },
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Internship Project', 'AI Automation', 'n8n + Gemini'],
  },

  innomall: {
    facts: [
      { label: 'Type', value: 'Full-Stack Platform' },
      { label: 'Stack', value: 'Desktop + Web + IoT' },
      { label: 'Hardware', value: 'ESP32 IoT Sensors' },
      { label: 'Architecture', value: 'JavaFX + Symfony 6' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'Symfony 6', description: 'PHP web framework (web portal)' },
          { name: 'JavaFX', description: 'Desktop admin application' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Java', description: 'Desktop application logic' },
          { name: 'PHP', description: 'Web application runtime' },
          { name: 'Doctrine ORM', description: 'Database abstraction' },
        ],
      },
      {
        category: 'Database',
        items: [
          { name: 'MySQL', description: 'Primary relational store' },
        ],
      },
      {
        category: 'IoT',
        items: [
          { name: 'ESP32', description: 'Multi-floor sensor controllers' },
          { name: 'Ultrasonic Sensors', description: 'Parking spot detection' },
          { name: 'MQTT', description: 'Real-time sensor messaging' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'Stripe API', description: 'Payment processing' },
          { name: 'Twilio', description: 'SMS notifications' },
          { name: 'Gemini API', description: 'AI customer-support chatbot' },
        ],
      },
    ],
    features: [
      { group: 'User Experience', icon: '🖥️', title: 'Dual Interface System', desc: 'JavaFX desktop for administrators and Symfony web for customers, providing tailored experiences for different user types.' },
      { group: 'Platform & Payments', icon: '🅿️', title: 'IoT Multi-Floor Parking', desc: 'Real-time parking availability tracking using IoT sensors with multi-floor support, live spot monitoring, and online reservation system.' },
      { group: 'Platform & Payments', icon: '💳', title: 'Integrated Payments', desc: 'Secure payment processing through Stripe API supporting multiple payment methods and automated transaction management.' },
      { group: 'User Experience', icon: '🤖', title: 'AI Customer Support', desc: 'A Gemini-powered chatbot interface supports FAQs and store-information queries in the working prototype.' },
      { group: 'Analytics', icon: '📊', title: 'Analytics Dashboard', desc: 'Comprehensive analytics on customer behavior, sales trends, operational efficiency, and parking usage patterns.' },
      { group: 'User Experience', icon: '📱', title: 'Multi-Channel Notifications', desc: 'Automated Twilio SMS system for promotions, reservation confirmations, and important operational alerts.' },
    ],
    architecture: [
      {
        title: 'Backend Technologies',
        desc: 'Symfony 6 provides the web backend with Doctrine ORM for database management and Twig templating for the web interface.',
        items: [
          { label: 'PHP Symfony 6', desc: 'Web application framework' },
          { label: 'Java with JavaFX', desc: 'Desktop application' },
          { label: 'MySQL', desc: 'Primary database' },
          { label: 'Doctrine ORM', desc: 'Database abstraction' },
          { label: 'RESTful API', desc: 'Service communication' },
          { label: 'Twig', desc: 'Templating engine' },
        ],
      },
      {
        title: 'IoT & Hardware Integration',
        desc: 'ESP32-based sensor network for real-time multi-floor parking management.',
        items: [
          { label: 'ESP32 microcontrollers', desc: 'Sensor management' },
          { label: 'Ultrasonic sensors', desc: 'Parking space detection' },
          { label: 'MQTT protocol', desc: 'Real-time data transmission' },
          { label: 'Wi-Fi connectivity', desc: 'With auto-reconnection' },
          { label: 'Reservation system', desc: 'Online spot booking' },
          { label: 'Live monitoring', desc: 'Real-time occupancy display' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/innomall/admin.png`, caption: 'Desktop Admin Interface' },
      { src: `${base}/innomall/web.png`, caption: 'Web Customer Portal' },
      { src: `${base}/innomall/analytics.png`, caption: 'Analytics Dashboard' },
      { src: `${base}/innomall/parking.png`, caption: 'IoT Parking System' },
      { src: `${base}/innomall/chatbot.png`, caption: 'AI Chatbot Interface' },
      { src: `${base}/innomall/payment.png`, caption: 'Payment Integration' },
    ],
    challenges: [
      { title: 'Real-Time Data Flow', desc: 'Connecting MQTT parking updates to customer and administrator interfaces while keeping occupancy state understandable.' },
      { title: 'Secure Payments', desc: 'Stripe tokenization keeps raw payment-card data outside the application while supporting online checkout.' },
      { title: 'Cross-Platform Compatibility', desc: 'Ensuring consistent behavior between JavaFX desktop and Symfony web interfaces with shared business logic.' },
      { title: 'IoT Integration', desc: 'Coordinating parking sensors, reservation flows, live availability, and application state across the multi-application system.' },
    ],
    results: [
      { icon: '📈', title: 'Operational Flow', content: '• Live parking-state presentation\n• Reservation and notification workflows\n• Payment and analytics interfaces\n• Production load and uptime still require formal benchmarking' },
      { icon: '🧩', title: 'Product Coverage', content: '• Administrator and customer workflows\n• Desktop and web interfaces\n• Connected parking operations\n• Payments, notifications, and analytics' },
    ],
    cta: {
      primary: { label: 'Watch Demo', url: 'https://youtu.be/Zs875HdhmJ8' },
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Full-Stack Platform', 'IoT Integration', 'AI-Powered'],
  },

  macropark: {
    facts: [
      { label: 'Context', value: 'Graduation Project' },
      { label: 'Host', value: 'Scheidt & Bachmann Maghreb' },
      { label: 'Role', value: 'Embedded Systems & Software Engineer' },
      { label: 'Delivery', value: '5 Scrum Sprints' },
    ],
    techStack: [
      {
        category: 'Product Applications',
        items: [
          { name: 'Admin platform', description: 'FastAPI and Jinja interface for parking supervision' },
          { name: 'Flutter', description: 'Android access, profile, guest registration, and history flows' },
          { name: 'REST + Swagger', description: 'Documented APIs shared across product components' },
        ],
      },
      {
        category: 'Services & Data',
        items: [
          { name: 'FastAPI', description: 'Backend, Core, and LPR/Bridge service workflows' },
          { name: 'Mosquitto MQTT', description: 'Camera, decision, controller, and audit messaging' },
          { name: 'MongoDB + SQLite', description: 'Application and local service persistence' },
          { name: 'Docker Compose', description: 'Coordinated deployment of three servers and the MQTT broker' },
        ],
      },
      {
        category: 'Embedded Controller',
        items: [
          { name: 'C++ / Arduino', description: 'WT32-ETH01 barrier-control firmware' },
          { name: 'Ethernet + Wi-Fi', description: 'Wired operation with an access-point configuration path' },
          { name: 'BLE', description: 'Proximity access commands from the mobile application' },
          { name: 'SPIFFS + OTA', description: 'Persistent configuration and remote firmware maintenance' },
        ],
      },
      {
        category: 'Vision & Hardware',
        items: [
          { name: 'Quercus SmartLPR', description: 'Camera-based vehicle plate capture and recognition' },
          { name: 'WT32-ETH01', description: 'Networked edge controller for barrier commands' },
          { name: 'Four relay channels', description: 'Independent open and close outputs for four barriers' },
        ],
      },
    ],
    features: [
      { group: 'Parking Supervision', icon: '▦', title: 'Administration Platform', desc: 'A central dashboard connects user, guest, entry-history, barrier, emergency-control, and barrier-event modules.' },
      { group: 'Parking Supervision', icon: '👥', title: 'Users & Guest Access', desc: 'Administrators manage registered employees, license plates, invited visitors, approvals, and access credentials.' },
      { group: 'Parking Supervision', icon: '◎', title: 'Traceable Entry History', desc: 'Every access record can include user, method, device, time, recognized plate, and captured LPR evidence.' },
      { group: 'Parking Supervision', icon: '🚧', title: 'Barrier Operations', desc: 'Installed barriers, individual command channels, emergency actions, and controller event logs are managed from the web platform.' },
      { group: 'Driver Access', icon: '▣', title: 'Camera-Based Entry', desc: 'A Quercus SmartLPR camera captures plates, passes them through Bridge and Core services, and triggers an approved barrier command.' },
      { group: 'Driver Access', icon: '📱', title: 'Flutter BLE Entry', desc: 'Authenticated drivers can request barrier access from the Android app, then review their profile and camera or phone access history.' },
      { group: 'Edge Controller', icon: '4', title: 'Four-Barrier Firmware', desc: 'The WT32 firmware drives four independent open/close relay pairs and supports timed automatic closing for mobile commands.' },
      { group: 'Edge Controller', icon: '⚙', title: 'Provisioning & Persistence', desc: 'A local configuration portal manages IP and MQTT settings; SPIFFS preserves network and company-ID configuration across restarts.' },
      { group: 'Edge Controller', icon: '↻', title: 'OTA Maintenance', desc: 'Arduino OTA handlers and the controller web portal provide a practical remote firmware-update workflow.' },
      { group: 'Delivery', icon: '◇', title: 'Containerized Service Stack', desc: 'Docker Compose starts the Backend, Core, LPR/Bridge, and Mosquitto services together with explicit ports and topics.' },
    ],
    architecture: [
      {
        title: 'Two Access Paths, One Parking System',
        image: `${base}/macropark/system-architecture.jpeg`,
        desc: 'MacroPark is the complete product. Its architecture map shows how the admin platform, mobile app, Quercus camera, Bridge server, Core server, Backend server, databases, Mosquitto broker, WT32 controller, and physical barrier work together.',
        items: [
          { label: 'Camera path', desc: 'The LPR camera sends a plate event through Bridge and Core services for backend verification before an MQTT barrier command.' },
          { label: 'Mobile path', desc: 'The Flutter app authenticates through the backend and broadcasts a BLE command that the WT32 validates and records through MQTT.' },
          { label: 'Operations path', desc: 'The admin interface manages records and emergency commands while access and controller actions remain traceable.' },
        ],
      },
      {
        title: 'WT32 Edge-Control Boundary',
        image: `${base}/macropark/barrier-controller-hardware.png`,
        desc: 'The WT32-ETH01 connects network communication to physical relay outputs. The supplied 566-line firmware covers Ethernet and Wi-Fi setup, MQTT subscriptions, BLE scanning, four barrier channels, timed closing, SPIFFS configuration, reset behavior, and OTA updates.',
      },
    ],
    gallery: [
      { src: `${base}/macropark/admin-dashboard.png`, caption: 'MacroPark admin home — the real product dashboard for users, guests, entry history, barriers, emergency testing, and events' },
      { src: `${base}/macropark/admin-users.png`, caption: 'User administration — registered drivers, contact details, multiple plates, and account actions' },
      { src: `${base}/macropark/access-history-lpr.png`, caption: 'Access evidence — entry history linked to the recognized license-plate image captured by the LPR system' },
      { src: `${base}/macropark/emergency-barrier-controls.png`, caption: 'Emergency barrier operations — direct open, close, lock, and unlock controls for an installed controller' },
      { src: `${base}/macropark/barrier-events.png`, caption: 'Barrier event history — timestamped controller actions and operating state changes' },
      { src: `${base}/macropark/mobile-barrier-access.png`, caption: 'Flutter driver experience — authenticated BLE connection and a focused barrier-opening action' },
      { src: `${base}/macropark/mobile-access-history.jpeg`, caption: 'Mobile access history — camera and phone events with license, device, date, time, and plate evidence' },
      { src: `${base}/macropark/controller-portal.png`, caption: 'WT32 controller portal — entry point for configuration, device information, reset, and firmware update' },
      { src: `${base}/macropark/controller-network-config.png`, caption: 'Controller provisioning — Wi-Fi, static network, and MQTT broker configuration from the local web portal' },
      { src: `${base}/macropark/controller-device-info.png`, caption: 'WT32 device information — network, system, memory, chip, and runtime details exposed for maintenance' },
      { src: `${base}/macropark/controller-ota-update.png`, caption: 'Firmware maintenance — browser-based OTA upload workflow for the installed controller' },
      { src: `${base}/macropark/access-path-validation.png`, caption: 'Hardware validation — serial evidence of barrier opening from camera/MQTT and mobile/BLE paths' },
      { src: `${base}/macropark/company-id-configuration.png`, caption: 'Dynamic BLE configuration — company ID published over MQTT and confirmed by the WT32 firmware' },
    ],
    challenges: [
      { title: 'Coordinating a Distributed Product', desc: 'The working system required three application servers, an MQTT broker, databases, a camera, a mobile client, and an embedded controller to agree on access decisions and logs.' },
      { title: 'Two Access Paths, Consistent Control', desc: 'Camera/MQTT and phone/BLE entry had to converge on the same physical barrier behavior while preserving the source and evidence for each event.' },
      { title: 'Reliable Edge Configuration', desc: 'The controller needed to remain configurable when infrastructure changed, persist critical network and company settings, and expose a reset path.' },
      { title: 'From Software to Physical Validation', desc: 'Relay wiring, four control channels, timed closing, permissions, BLE payloads, MQTT topics, and actual barrier responses were tested as one system.' },
    ],
    results: [
      { icon: '4', title: 'Four Integrated Product Layers', content: 'Admin web, Flutter mobile, LPR services, and embedded barrier control form one complete parking product.' },
      { icon: '2', title: 'Two Verified Entry Methods', content: 'The presentation and report document successful camera/MQTT and mobile/BLE barrier-opening paths.' },
      { icon: '5', title: 'Five-Sprint Delivery', content: 'Implementation progressed through platform, mobile, controller, LPR, and test-and-validation sprints.' },
      { icon: '✓', title: 'Hardware-Backed Prototype', content: 'Controller configuration, relays, BLE events, MQTT commands, OTA behavior, and access history were validated beyond static interface mockups.' },
    ],
    cta: {
      primary: { label: 'Read Full Project Report', url: `${base}/macropark/Rapport-PFE-MacroPark-2024.pdf` },
      secondary: [
        { label: 'Download Presentation', url: `${base}/macropark/MacroPark%20Presentation%20final.pptx` },
        { label: 'WT32 Firmware', url: 'https://github.com/SofieneZayati/MacroPark' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Full Graduation Project', 'Five-Sprint Delivery', 'End-to-End IoT', 'Hardware Validated'],
  },

  secondchance: {
    facts: [
      { label: 'Type', value: 'Social Impact Prototype' },
      { label: 'Backend', value: 'FastAPI + MongoDB' },
      { label: 'Views', value: 'Jinja2 + Static Prototypes' },
      { label: 'Context', value: 'Academic Social-Impact Project' },
    ],
    techStack: [
      {
        category: 'Backend',
        items: [
          { name: 'FastAPI', description: 'Async web framework' },
          { name: 'Pydantic', description: 'Request / response validation' },
          { name: 'Jinja2', description: 'Server-side templating' },
        ],
      },
      {
        category: 'Database',
        items: [
          { name: 'MongoDB', description: 'Document data store' },
          { name: 'PyMongo', description: 'MongoDB driver' },
          { name: 'Motor', description: 'Async MongoDB access' },
        ],
      },
      {
        category: 'Prototype UI',
        items: [
          { name: 'HTML / CSS', description: 'Support and community screens' },
          { name: 'Static views', description: 'Jobs, training, support, and community concepts' },
        ],
      },
    ],
    features: [
      { group: 'User Support', icon: '💼', title: 'Job Opportunities', desc: 'A prototype directory presents employment opportunities and the product direction for reentry-focused job access.' },
      { group: 'Community Concepts', icon: '💬', title: 'Community Space', desc: 'A static community interface explores how peer-support conversations could fit into the wider platform.' },
      { group: 'User Support', icon: '🩺', title: 'Support Network', desc: 'Prototype screens organize mental-health and legal-support resources in one discoverable directory.' },
      { group: 'User Support', icon: '📚', title: 'Training Resources', desc: 'Learning and skills content gives the prototype a practical path beyond job listings alone.' },
      { group: 'Platform Prototype', icon: '👤', title: 'User Records', desc: 'FastAPI and MongoDB routes cover registration, login lookup, and core user data operations for the demo.' },
      { group: 'Platform Prototype', icon: '🧭', title: 'Guided Dashboard', desc: 'A unified dashboard connects jobs, training, support, community, and assistant interface concepts.' },
    ],
    architecture: [
      {
        title: 'Current Prototype Boundary',
        desc: 'FastAPI, Jinja2, and MongoDB support the user and page flows, while jobs, resources, community, and assistant experiences are currently static interface prototypes. Production authentication, authorization, and realtime messaging remain future work.',
      },
    ],
    gallery: [
      { src: `${base}/secondchance/login.png`, caption: 'Login Page' },
      { src: `${base}/secondchance/homepage.png`, caption: 'Home Page' },
      { src: `${base}/secondchance/homedashboard.png`, caption: 'Dashboard — Activity Feed & Announcements' },
      { src: `${base}/secondchance/community-chat.png`, caption: 'Community interface concept — peer-support layout' },
      { src: `${base}/secondchance/support-network.png`, caption: 'Support Network — Doctors & Legal Professionals' },
      { src: `${base}/secondchance/job-opportunities.png`, caption: 'Job Opportunities — Curated Listings' },
      { src: `${base}/secondchance/training-resources.png`, caption: 'Training Resources — Skill Development' },
      { src: `${base}/secondchance/assistant-chatbot.png`, caption: 'Assistant interface concept — guided support layout' },
    ],
    challenges: [
      { title: 'Sensitive Product Domain', desc: 'Designing support flows that feel respectful, clear, and useful for people navigating reentry.' },
      { title: 'Prototype vs Production Security', desc: 'The current login flow is demonstrative; password hashing, tokens, authorization, moderation, and privacy controls are required before real use.' },
      { title: 'Turning Static Concepts into Services', desc: 'Jobs, training, support, and community screens define the product direction but still need data models and backend workflows.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Social Impact Prototype', 'FastAPI + MongoDB', 'Application Prototype'],
  },

  zenithhouse: {
    facts: [
      { label: 'Type', value: 'Smart Home Project' },
      { label: 'Hardware', value: 'ESP32' },
      { label: 'Cloud', value: 'Firebase' },
      { label: 'Controls', value: 'Climate / Lighting / Access' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'ESP32 firmware' },
          { name: 'ESP32', description: 'Connected device controller' },
        ],
      },
      {
        category: 'Mobile',
        items: [
          { name: 'Mobile App', description: 'Real-time control & monitoring' },
        ],
      },
      {
        category: 'Cloud',
        items: [
          { name: 'Firebase', description: 'Device and application state synchronization' },
        ],
      },
    ],
    features: [
      { group: 'Home Control', icon: '💡', title: 'Lighting Control', desc: 'ESP32-connected lighting controls form one part of the smart-home project scope.' },
      { group: 'Home Control', icon: '🌡️', title: 'Climate Control', desc: 'The project explores room-level climate control through connected devices.' },
      { group: 'Home Control', icon: '🔒', title: 'Access Control', desc: 'Door-access control extends the same device-to-application architecture.' },
      { group: 'Application', icon: '📱', title: 'Mobile Interface', desc: 'A mobile application provides the user-facing control layer with Firebase state synchronization.' },
    ],
    architecture: [
      {
        title: 'Connected Home Architecture',
        desc: 'ESP32 firmware handles room-level controls while Firebase synchronizes device state with the mobile application for remote lighting, climate, and access actions.',
      },
    ],
    gallery: [
      { src: `${base}/zenithhouse/connected-home-concept.png`, caption: 'Concept visualization of the documented ESP32 and Firebase architecture connecting room-level lighting, climate, access, and mobile control' },
    ],
    challenges: [
      { title: 'Hardware–Application Boundary', desc: 'Coordinating device commands, cloud state, and mobile feedback across the connected-home flow.' },
      { title: 'Realtime State Consistency', desc: 'The mobile interface and physical device state need a clear source of truth when connectivity changes.' },
      { title: 'Room-Level Modularity', desc: 'Lighting, climate, and access controls need reusable device patterns without tightly coupling every room.' },
    ],
    results: [
      { icon: '3', title: 'Three Control Domains', content: 'Lighting, climate, and access share one connected-home architecture.' },
      { icon: '↔', title: 'Cloud-Synchronized State', content: 'Firebase links device actions and mobile control in one realtime model.' },
      { icon: 'ESP', title: 'Distributed Controllers', content: 'ESP32 nodes keep room-level control close to the physical devices.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Connected Home', 'ESP32 + Firebase', 'Mobile Control'],
  },

  smartunlock: {
    facts: [
      { label: 'Type', value: 'BLE Access Proof of Concept' },
      { label: 'Signal', value: 'Eddystone BLE Beacon' },
      { label: 'Hardware', value: 'ESP32 WROOM-32' },
      { label: 'Events', value: 'MQTT / Mosquitto' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'ESP32 lock firmware' },
          { name: 'ESP32 WROOM-32', description: 'BLE scanner and access proof hardware' },
        ],
      },
      {
        category: 'IoT',
        items: [
          { name: 'Eddystone BLE', description: 'Beacon UID / URL scanning and filtering' },
          { name: 'MQTT', description: 'Access event and device-status messaging' },
          { name: 'Mosquitto', description: 'MQTT broker used in the prototype' },
        ],
      },
    ],
    features: [
      { group: 'BLE Access Flow', icon: '📡', title: 'Beacon Scanning', desc: 'ESP32 firmware scans nearby Eddystone advertisements and filters the expected beacon identifier.' },
      { group: 'BLE Access Flow', icon: '🔎', title: 'Identifier Check', desc: 'The proof of concept compares detected UID or URL data before allowing the hardware response.' },
      { group: 'Hardware Proof', icon: '💡', title: 'Relay Simulation', desc: 'An LED represents the door-relay action so the access decision can be tested safely on the bench.' },
      { group: 'Hardware Proof', icon: '↗', title: 'MQTT Status', desc: 'Mosquitto messaging publishes access events and prototype device status for remote observation.' },
      { group: 'Testing', icon: '📱', title: 'Beacon Simulator', desc: 'A phone-side beacon simulator provides repeatable BLE advertisements for testing the scanner flow.' },
    ],
    architecture: [
      {
        title: 'System Architecture',
        desc: 'A phone beacon simulator broadcasts an Eddystone identifier. The ESP32 scans and filters the advertisement, triggers an LED as the lock-relay proof, and publishes event or status messages to Mosquitto over MQTT.',
      },
    ],
    gallery: [
      { src: `${base}/smartunlock/prototype-access-granted.jpg`, caption: 'Real prototype enclosure with the green access indicator active after a recognized BLE beacon' },
      { src: `${base}/smartunlock/prototype-hardware-enclosure.jpg`, caption: 'Bench-tested Smart Unlock enclosure with the external status indicator and power connection' },
      { src: `${base}/smartunlock/prototype-hardware-open.jpg`, caption: 'Inside the real prototype enclosure: ESP32 board, status LED, wiring, and USB power connection' },
    ],
    challenges: [
      { title: 'BLE Signal Filtering', desc: 'Nearby advertisements must be scanned and filtered reliably before an access action is allowed.' },
      { title: 'Safe Hardware Validation', desc: 'An LED represents the lock relay so access decisions can be tested without driving a real door mechanism.' },
      { title: 'Remote Observability', desc: 'MQTT messages expose device and access status beyond the physical enclosure.' },
    ],
    results: [
      { icon: 'BLE', title: 'Identifier-Based Access', content: 'The ESP32 recognizes the expected Eddystone advertisement before triggering the hardware proof.' },
      { icon: 'MQTT', title: 'Connected Status Path', content: 'Mosquitto carries device and access events for remote observation.' },
      { icon: 'HW', title: 'Real Hardware Proof', content: 'The complete scanner, enclosure, indicator, and firmware flow was bench tested.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Internship Prototype', 'BLE Beacon', 'ESP32 + MQTT'],
  },

  sps: {
    facts: [
      { label: 'Type', value: 'Android Parking Prototype' },
      { label: 'Platform', value: 'Native Android / Java' },
      { label: 'Data', value: 'Firebase' },
      { label: 'Views', value: 'Parking + Vehicle Records' },
    ],
    techStack: [
      {
        category: 'Mobile',
        items: [
          { name: 'Java', description: 'Android development' },
          { name: 'Android', description: 'Native mobile platform' },
          { name: 'XML', description: 'Native Android layouts' },
        ],
      },
      {
        category: 'Cloud',
        items: [
          { name: 'Firebase', description: 'Application data and account support in the compiled prototype' },
        ],
      },
    ],
    features: [
      { group: 'Account Flow', icon: '👤', title: 'Login & Registration', desc: 'Native Android screens support account entry and creation in the prototype journey.' },
      { group: 'Parking Flow', icon: '🅿️', title: 'Parking-Space View', desc: 'A dedicated mobile view presents the current parking-space information available to the application.' },
      { group: 'Vehicle Records', icon: '🚗', title: 'Cars & Plates', desc: 'Vehicle, plate, and owner records are organized into a mobile-friendly list.' },
      { group: 'Account Flow', icon: '↩', title: 'Session Exit', desc: 'The documented four-page journey includes a clear logout path.' },
    ],
    architecture: [
      {
        title: 'Android + Firebase Prototype',
        desc: 'The native Java application covers account, parking, and vehicle-record views with Firebase included in the compiled prototype. Sensor ingestion, mapping, predictions, and alert services are outside the verified scope.',
      },
    ],
    gallery: [
      { src: `${base}/sps/android-parking-concept.png`, caption: 'Visual summary of the documented Android and Firebase parking flow; the image is a system concept and does not imply a production interface' },
    ],
    challenges: [
      { title: 'Compact Mobile Flow', desc: 'Account access, parking visibility, and vehicle records needed a simple navigation path on small Android screens.' },
      { title: 'Structured Vehicle Data', desc: 'Plate, model, and owner records needed a consistent Firebase-backed representation.' },
      { title: 'IoT Integration Boundary', desc: 'The mobile product defines the parking view while sensor ingestion and live occupancy remain the next connected-system milestone.' },
    ],
    results: [
      { icon: '4', title: 'Core Mobile Views', content: 'Login, registration, parking, and vehicle-record journeys form one native Android application.' },
      { icon: 'F', title: 'Cloud-Backed Records', content: 'Firebase supports account and application data for the documented build.' },
      { icon: '→', title: 'Clear Expansion Path', content: 'The product structure leaves room for live sensors, maps, alerts, and predictive parking services.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Android Prototype', 'Java + Firebase', 'Parking UI'],
  },

  smartagri: {
    facts: [
      { label: 'Type', value: 'Connected Agriculture System' },
      { label: 'Hardware', value: 'ESP32' },
      { label: 'Sensors', value: 'DHT11 + Soil Moisture' },
      { label: 'Telemetry', value: 'Blynk over Wi-Fi' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++ / Arduino', description: 'Sensor sampling, thresholds, and local indicators' },
          { name: 'ESP32', description: 'Connected controller and Wi-Fi runtime' },
          { name: 'DHT11', description: 'Temperature and humidity sensing' },
          { name: 'Soil moisture probe', description: 'Analog soil-condition input' },
        ],
      },
      {
        category: 'Telemetry & Feedback',
        items: [
          { name: 'Blynk', description: 'Remote temperature, humidity, and moisture telemetry' },
          { name: 'Wi-Fi', description: 'Device-to-cloud connectivity' },
          { name: 'Virtual pins', description: 'Structured sensor channels for the mobile dashboard' },
          { name: 'LED indicators', description: 'Local threshold feedback for field conditions' },
        ],
      },
    ],
    features: [
      { group: 'Environmental Sensing', icon: 'T', title: 'Temperature Monitoring', desc: 'The DHT11 feeds temperature readings into the connected monitoring loop.' },
      { group: 'Environmental Sensing', icon: 'H', title: 'Humidity Monitoring', desc: 'Air humidity is sampled alongside temperature for a more useful crop-environment view.' },
      { group: 'Environmental Sensing', icon: 'M', title: 'Soil Moisture Input', desc: 'An analog probe adds soil-condition information to the same device workflow.' },
      { group: 'Connected Feedback', icon: 'B', title: 'Blynk Telemetry', desc: 'Three environmental signals are published over Wi-Fi to remote Blynk widgets.' },
      { group: 'Connected Feedback', icon: 'LED', title: 'Local Status Indicators', desc: 'Dedicated LEDs translate sensor thresholds into immediate device-side feedback.' },
    ],
    architecture: [
      {
        title: 'Device-to-Cloud Sensing Loop',
        desc: 'The ESP32 samples climate and soil inputs, publishes the readings to Blynk, and evaluates thresholds for local LED feedback.',
        items: [
          { label: 'DHT11', desc: 'Provides temperature and humidity readings.' },
          { label: 'Soil probe', desc: 'Provides the analog moisture input.' },
          { label: 'ESP32 firmware', desc: 'Coordinates sampling, connectivity, telemetry, and indicators.' },
          { label: 'Blynk', desc: 'Presents the remote monitoring channels.' },
          { label: 'LED bank', desc: 'Shows local temperature, humidity, and moisture states.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/smartagri/system-cover.png`, caption: 'Concept visualization based on the implemented ESP32 sensing loop for temperature, humidity, soil moisture, Blynk telemetry, and local indicators' },
    ],
    challenges: [
      { title: 'Sensor Calibration', desc: 'Analog moisture readings and environmental thresholds need calibration against the actual soil, enclosure, and crop conditions.' },
      { title: 'Connected and Local Feedback', desc: 'Remote telemetry and on-device indicators must describe the same condition without conflicting states.' },
      { title: 'Configuration Hardening', desc: 'A production revision should externalize network and provider credentials, rotate device tokens, and validate failed-sensor behavior.' },
    ],
    results: [
      { icon: '3', title: 'Environmental Signals', metric: '3 inputs', content: 'Temperature, humidity, and soil moisture share one monitoring workflow.' },
      { icon: '↗', title: 'Remote Telemetry', metric: 'Blynk', content: 'The ESP32 publishes readings over Wi-Fi for remote observation.' },
      { icon: '●', title: 'Immediate Local Feedback', metric: 'LED', content: 'Threshold indicators keep essential status visible at the device.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Embedded IoT', 'ESP32', 'Blynk Telemetry', '3 Sensor Signals'],
  },

  geniuspmo: {
    facts: [
      { label: 'Context', value: 'HR Operations Product' },
      { label: 'Role', value: 'Product Engineering' },
      { label: 'Scope', value: '4 Role-Focused Workspaces' },
      { label: 'Foundation', value: 'FastAPI + PostgreSQL' },
    ],
    techStack: [
      {
        category: 'Application',
        items: [
          { name: 'Next.js 15', description: 'App Router frontend architecture' },
          { name: 'React 19', description: 'Interactive HR workflows and local state' },
          { name: 'TypeScript', description: 'Typed HR domain and component contracts' },
        ],
      },
      {
        category: 'Interface',
        items: [
          { name: 'Tailwind CSS 4', description: 'Responsive application styling' },
          { name: 'Lucide', description: 'Consistent interface iconography' },
          { name: 'EN / FR', description: 'Persisted bilingual interface preference' },
        ],
      },
      {
        category: 'Documents & Data',
        items: [
          { name: 'PDF generation', description: 'Dependency-free draft payslip output' },
          { name: 'CSV export', description: 'UTF-8 workforce and operations exports' },
          { name: 'Product dataset', description: 'Realistic HR records for complete workflow validation' },
        ],
      },
      {
        category: 'Backend Foundation',
        items: [
          { name: 'FastAPI', description: 'Health, readiness, and future API boundary' },
          { name: 'SQLAlchemy', description: 'Backend persistence foundation' },
          { name: 'Alembic', description: 'Database migration workflow' },
          { name: 'PostgreSQL', description: 'Docker-based local database target' },
        ],
      },
    ],
    features: [
      { group: 'Daily Operations', icon: '📊', title: 'HR Overview', desc: 'A compact daily cockpit for workforce presence, payroll readiness, document gaps, leave, requests, and exception queues.' },
      { group: 'Daily Operations', icon: '⏱️', title: 'Attendance Review', desc: 'Schedule variance, late or missing scans, source filters, exceptions, and an HR review workflow.' },
      { group: 'People & Compliance', icon: '👥', title: 'Employee Records', desc: 'Searchable employee directory and detailed records covering assignment, schedule, documents, payroll, skills, and history.' },
      { group: 'People & Compliance', icon: '◫', title: 'Teams & Project Staffing', desc: 'Team structure, capacity, project assignments, role coverage, and skills help connect people records to active delivery work.' },
      { group: 'People & Compliance', icon: '📁', title: 'Document Health', desc: 'Required-document tracking, employee checklists, reminders, and clearly simulated upload or status actions.' },
      { group: 'Payroll & Requests', icon: '🧾', title: 'Draft Payroll', desc: 'Period preparation with attendance adjustments, readiness checks, previews, and individual or batch draft payslips.' },
      { group: 'Payroll & Requests', icon: '✅', title: 'HR Case Center', desc: 'Requests organized by priority, owner, SLA, activity timeline, response draft, status, and resolution.' },
      { group: 'Reporting & Access', icon: '📈', title: 'Reports & Exports', desc: 'Accessible workforce charts with working UTF-8 CSV exports and operational summaries.' },
      { group: 'Reporting & Access', icon: '◎', title: 'Four Demo Workspaces', desc: 'Dedicated HR, manager, employee, and executive entry points demonstrate how the same operations adapt to different responsibilities.' },
      { group: 'Reporting & Access', icon: '🌐', title: 'Bilingual & Responsive', desc: 'Persisted English/French and light/dark preferences across desktop and mobile dashboard layouts.' },
    ],
    architecture: [
      {
        title: 'Product Workspaces + Service Foundation',
        desc: 'Next.js routes and shared dashboard components use a typed HR domain, while FastAPI, SQLAlchemy, Alembic, PostgreSQL, and Docker establish the production-service integration point.',
        items: [
          { label: 'Routes', desc: 'One focused page per HR operations module.' },
          { label: 'Shared state', desc: 'Client provider coordinates employees, leave, payroll, documents, and feedback.' },
          { label: 'Backend foundation', desc: 'FastAPI health checks and PostgreSQL readiness establish the server-side integration point.' },
          { label: 'Outputs', desc: 'PDF and CSV generation makes payroll and reporting workflows immediately usable.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/geniuspmo/dashboard.png`, caption: 'HR overview — workforce status, quick actions, attendance plan, and focus queue' },
      { src: `${base}/geniuspmo/employees.png`, caption: 'Employee directory — searchable records, work status, team context, and profile access' },
      { src: `${base}/geniuspmo/teams.png`, caption: 'Teams workspace — capacity, project staffing, role coverage, and skills visibility' },
      { src: `${base}/geniuspmo/attendance.png`, caption: 'Attendance review — schedules, source filters, exceptions, and HR follow-up actions' },
      { src: `${base}/geniuspmo/biometrics.png`, caption: 'Biometric operations — terminal health, scan activity, exceptions, and integration status' },
      { src: `${base}/geniuspmo/payroll.png`, caption: 'Payroll preparation — period readiness, attendance adjustments, and draft payslip workflow' },
      { src: `${base}/geniuspmo/reports.png`, caption: 'Workforce reports — operational summaries, accessible charts, and export actions' },
      { src: `${base}/geniuspmo/mobile-dashboard.png`, caption: 'Responsive HR workspace — daily priorities and navigation adapted for mobile use' },
    ],
    challenges: [
      { title: 'Dense Workflow Clarity', desc: 'Organizing many HR modules without turning the product into a collection of oversized, disconnected dashboard cards.' },
      { title: 'Integration Clarity', desc: 'Biometric, payroll, upload, and notification workflows needed clear service boundaries for the production integration milestone.' },
      { title: 'Operational Responsiveness', desc: 'Keeping data-heavy tables, drawers, filters, and navigation usable on smaller screens.' },
    ],
    results: [
      { icon: '✓', title: 'Coherent HR Workspace', content: 'A navigable product system connects role-aware journeys across daily workforce operations.' },
      { icon: '↔', title: 'Explicit Integration Boundary', content: 'Typed domain models and a working backend foundation make the next production integration step clear.' },
      { icon: '◎', title: 'Production-Ready Direction', content: 'Working interactions, exports, themes, language preferences, and an explicit service-integration roadmap.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Active Development', '4 Product Roles', 'Backend Foundation', 'Next.js 15'],
  },

  greencoffee: {
    facts: [
      { label: 'Type', value: 'Coffee Operations Product' },
      { label: 'Role', value: 'Product Systems Engineering' },
      { label: 'Personas', value: '5 Operational Roles' },
      { label: 'State', value: 'Connected Product Model' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React 19', description: 'Role-focused application flows and shared UI state' },
          { name: 'Vite 8', description: 'Development and production build tooling' },
          { name: 'JavaScript', description: 'Product logic and interactive workflows' },
        ],
      },
      {
        category: 'Design System',
        items: [
          { name: 'Custom CSS', description: 'Responsive visual system without a UI framework' },
          { name: 'Lucide', description: 'Application iconography' },
          { name: 'Light / Dark', description: 'Persisted theme modes' },
        ],
      },
      {
        category: 'Product State',
        items: [
          { name: 'LocalStorage', description: 'Shared coffee-shop operational data' },
          { name: 'SessionStorage', description: 'Current demo actor and session' },
          { name: 'Role guards', description: 'Owner, manager, barista, floor, and customer routes' },
        ],
      },
    ],
    features: [
      { group: 'Shop Operations', icon: '☕', title: 'Live Order Board', desc: 'QR and staff-entered orders move through new, preparing, ready, and served states with barista and KDS views.' },
      { group: 'Shop Operations', icon: '🪑', title: 'Floor & Reservations', desc: 'Table sessions, occupancy, secure table QR flows, reservations, calendar, waitlist, guest messages, and event bookings.' },
      { group: 'Menu & Customers', icon: '🥐', title: 'Menu Management', desc: 'Categories, stock, modifiers, allergens, availability, featured products, and customer menu preview.' },
      { group: 'Menu & Customers', icon: '💚', title: 'CRM & Loyalty', desc: 'Customer profiles, preferences, receipt history, rewards, VIP tiers, birthdays, and referrals.' },
      { group: 'Growth & Insight', icon: '📣', title: 'Campaign Workflows', desc: 'Segments, coupons, feedback QR, ratings, and integration-ready WhatsApp, email, and push campaign journeys.' },
      { group: 'Growth & Insight', icon: '📈', title: 'Operational Analytics', desc: 'Revenue, order, product, reservation, QR-scan, customer, and peak-hour views for decision support.' },
    ],
    architecture: [
      {
        title: 'Connected Operations Model',
        desc: 'React modules share one shop domain so changing roles feels like operating the same café. Role guards and session state shape each workspace, with identity, payments, messaging, realtime synchronization, and AI services planned as the next integration milestone.',
      },
    ],
    gallery: [
      { src: `${base}/greencoffee/owner-dashboard.png`, caption: 'Owner overview — revenue, service health, live orders, loyalty, and the floor in one operational view' },
      { src: `${base}/greencoffee/barista-orders.png`, caption: 'Barista workspace — a focused, role-restricted board for moving live drinks through preparation' },
      { src: `${base}/greencoffee/customer-menu.png`, caption: 'Customer experience — mobile ordering, menu discovery, basket actions, and loyalty context' },
      { src: `${base}/greencoffee/orders.png`, caption: 'Live order board supporting the New → Preparing → Ready → Served workflow' },
      { src: `${base}/greencoffee/floor-plan.png`, caption: 'Interactive floor operations for table state, service flow, and shared staff context' },
      { src: `${base}/greencoffee/analytics.png`, caption: 'Analytics workspace for revenue, orders, products, reservations, and customer behavior' },
      { src: `${base}/greencoffee/owner-mobile.png`, caption: 'Responsive owner workspace with compact navigation and mobile-priority metrics' },
    ],
    challenges: [
      { title: 'Turning Scope into Product', desc: 'Converting a large capability inventory into coherent navigation and workflows rather than a feature checklist.' },
      { title: 'Shared Multi-Role State', desc: 'Keeping orders, menus, tables, reservations, and customer context consistent as users move between operational roles.' },
      { title: 'Operational Density', desc: 'Balancing fast staff workflows with readable detail across desktop, tablet, and mobile layouts.' },
    ],
    results: [
      { icon: '5', title: 'Role-Focused Journeys', content: 'Five distinct demo experiences demonstrate how one product can serve the whole coffee-shop operation.' },
      { icon: '↻', title: 'Connected Demo State', content: 'Orders, menu availability, tables, reservations, and automations persist across staff role changes.' },
      { icon: '◫', title: 'Production Integration Direction', content: 'A polished, responsive product system with clear contracts for the services planned next.' },
    ],
    cta: {
      secondary: [
        { label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/CoffeeShop-SaaS' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Active Development', 'React 19', '5 Product Roles'],
  },

  tounsiads: {
    facts: [
      { label: 'Type', value: 'Full-Stack AI MVP' },
      { label: 'Role', value: 'Product + Engineering' },
      { label: 'Audio', value: 'Gemini TTS → WAV' },
      { label: 'Data', value: 'Local Campaign Drafts' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React 19', description: 'Editable campaign workspace' },
          { name: 'Vite 6', description: 'Frontend tooling and production build' },
          { name: 'Web Speech API', description: 'Optional browser speech-to-text input' },
          { name: 'LocalStorage', description: 'Campaign history and workspace preferences' },
        ],
      },
      {
        category: 'Server',
        items: [
          { name: 'Node.js', description: 'Runtime for the TTS service' },
          { name: 'Express', description: 'Server-side POST /api/tts route' },
          { name: 'dotenv', description: 'API key kept outside the browser bundle' },
        ],
      },
      {
        category: 'AI & Audio',
        items: [
          { name: 'Gemini TTS', description: 'Prompt-directed voice generation' },
          { name: 'Google GenAI SDK', description: 'Server-side model client' },
          { name: 'PCM → WAV', description: 'Browser-playable and downloadable output' },
        ],
      },
    ],
    features: [
      { group: 'Campaign Creation', icon: '✦', title: 'Dynamic Drafts', desc: 'Business, offer, audience, tone, duration, and call-to-action inputs create an editable campaign structure.' },
      { group: 'Campaign Creation', icon: '✎', title: 'Editable Workspace', desc: 'Concept, audience, tone, individual scenes, and final transcript remain editable after generation.' },
      { group: 'Workspace', icon: '▦', title: 'Templates & Brand Kit', desc: 'Starter prompts, reusable brand details, workspace settings, help, and campaign history in one product.' },
      { group: 'Workspace', icon: '🎙️', title: 'Speech Input', desc: 'Browser speech-to-text can capture a brief in supported browsers, alongside typed prompts and attachments.' },
      { group: 'Voice Generation', icon: '🔊', title: 'Tunisian Voiceover', desc: 'Selectable Gemini voices and delivery directions generate playable audio through a protected server route.' },
      { group: 'Voice Generation', icon: '↓', title: 'WAV Download', desc: 'Raw model audio is converted into a standard WAV file for native playback and export.' },
    ],
    architecture: [
      {
        title: 'Browser Workspace + Server-Side TTS',
        desc: 'React manages campaign editing and local history. Vite proxies audio requests to an Express API, where the Gemini credential remains server-side. The response is converted to WAV and returned for browser playback or download.',
        items: [
          { label: 'Browser', desc: 'Campaign editing, persistence, speech input, playback, and downloads.' },
          { label: 'Express API', desc: 'Validates the request and protects provider credentials.' },
          { label: 'Gemini TTS', desc: 'Generates raw audio from text, voice, and delivery direction.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/tounsiads/campaign-overview.png`, caption: 'Generated campaign overview — concept, audience, tone, duration, and editable creative direction' },
      { src: `${base}/tounsiads/campaign-script.png`, caption: 'Scene-by-scene editor — editable Tunisian copy, visual direction, timing, and final transcript' },
      { src: `${base}/tounsiads/voice-studio.png`, caption: 'Voice studio — speaker selection, delivery direction, playback, and WAV download workflow' },
      { src: `${base}/tounsiads/templates.png`, caption: 'Campaign templates — reusable starting points for offers, launches, events, and local services' },
      { src: `${base}/tounsiads/brand-kits.png`, caption: 'Brand kit workspace — reusable business identity and campaign voice settings' },
      { src: `${base}/tounsiads/studio.png`, caption: 'Campaign creation workspace — local history, prompt controls, attachments, and Tunisian voice direction' },
      { src: `${base}/tounsiads/mobile-studio.png`, caption: 'Responsive campaign studio — the same brief-to-draft workflow adapted for mobile' },
    ],
    challenges: [
      { title: 'Credential Boundary', desc: 'Keeping the model key out of the React bundle while preserving a simple local full-stack development flow.' },
      { title: 'Editable AI Output', desc: 'Treating generated content as a draft that users can inspect and refine, rather than an opaque final result.' },
      { title: 'Dialect Variability', desc: 'Supporting Arabic, Tunisian Latin/Arabizi, and mixed French wording while making pronunciation limitations visible.' },
    ],
    results: [
      { icon: '→', title: 'Brief to Playable Audio', content: 'One connected MVP flow turns a local campaign idea into editable copy and a downloadable voiceover.' },
      { icon: '🔐', title: 'Safer AI Integration', content: 'Provider credentials stay on the Node server rather than being exposed through Vite environment variables.' },
      { icon: '✎', title: 'Human-in-the-Loop Workflow', content: 'Every generated concept, scene, and transcript remains editable before voice generation.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Personal MVP', 'Gemini TTS', 'React + Node'],
  },

  digiservice: {
    facts: [
      { label: 'Context', value: 'Academic Microservices Project' },
      { label: 'Ownership', value: 'Reviews Service' },
      { label: 'Runtime', value: 'Java 17 / Spring Boot' },
      { label: 'Integration', value: 'Eureka + Gateway' },
    ],
    techStack: [
      {
        category: 'Service',
        items: [
          { name: 'Java 17', description: 'Service implementation language' },
          { name: 'Spring Boot', description: 'REST API and application runtime' },
          { name: 'Spring Data JPA', description: 'Review and response persistence layer' },
          { name: 'Bean Validation', description: 'Request and domain validation' },
        ],
      },
      {
        category: 'Integration',
        items: [
          { name: 'OpenFeign', description: 'Linked user and artisan service calls' },
          { name: 'Eureka', description: 'Service discovery registration' },
          { name: 'API Gateway', description: 'Platform routing boundary' },
          { name: 'Actuator', description: 'Health and runtime endpoints' },
        ],
      },
      {
        category: 'API & Data',
        items: [
          { name: 'OpenAPI / Swagger', description: 'Interactive API documentation' },
          { name: 'H2', description: 'Local in-memory service database' },
          { name: 'Angular 18', description: 'Shared marketplace frontend' },
        ],
      },
    ],
    features: [
      { group: 'Reviews API', icon: '★', title: 'Review Lifecycle', desc: 'Create, read, update, delete, and filter reviews by artisan, client, status, or minimum rating.' },
      { group: 'Reviews API', icon: '↩', title: 'Response Lifecycle', desc: 'Separate endpoints manage replies to reviews by review or responding user.' },
      { group: 'Ratings & Quality', icon: '📊', title: 'Rating Statistics', desc: 'Average rating and one-to-five-star distributions provide a reusable artisan reputation summary.' },
      { group: 'Ratings & Quality', icon: '✓', title: 'Input Validation', desc: 'Rating ranges, required identifiers, response content, and request shapes are validated at the API boundary.' },
      { group: 'Platform Integration', icon: '⇄', title: 'Cross-Service Checks', desc: 'Feign clients validate linked users and artisans against adjacent platform services.' },
      { group: 'Platform Integration', icon: '◉', title: 'Discovery & Health', desc: 'Eureka registration, gateway routing, Actuator health, and OpenAPI documentation support service operation.' },
    ],
    architecture: [
      {
        title: 'Reviews Service Architecture',
        desc: 'The Angular marketplace calls a Spring Cloud gateway. Eureka routes requests to domain services, including the reviews service I built. That service owns review and response data while using Feign clients for cross-domain validation.',
        items: [
          { label: 'Gateway', desc: 'Single frontend entry point for platform APIs.' },
          { label: 'Reviews service', desc: 'Independent review, response, and rating-statistics domain.' },
          { label: 'Adjacent services', desc: 'User and artisan records are provided by adjacent domain services.' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/digiservice/marketplace.jpg`, caption: 'DigiService marketplace interface — the reviews service supports reputation workflows within the wider marketplace platform' },
    ],
    challenges: [
      { title: 'Clear Service Ownership', desc: 'Keeping reviews and responses independent while referencing users and artisans owned by other services.' },
      { title: 'Cross-Service Validation', desc: 'Providing useful validation without duplicating user or artisan domain data inside the reviews service.' },
      { title: 'Discoverable API Contract', desc: 'Documenting filters, statistics, response shapes, health, and error behavior for platform integration.' },
    ],
    results: [
      { icon: 'API', title: 'Complete Domain API', content: 'A focused reviews service covers CRUD, responses, filters, and reputation statistics.' },
      { icon: '↔', title: 'Platform Integration', content: 'Discovery, gateway routing, Feign boundaries, and OpenAPI documentation align the service with the wider platform.' },
      { icon: '◎', title: 'End-to-End Service Ownership', content: 'I designed and implemented the reviews domain, API contract, persistence, validation, documentation, and integration boundaries.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Academic Microservices Project', 'Owned Reviews Service', 'Spring Boot'],
  },
}

export default content
