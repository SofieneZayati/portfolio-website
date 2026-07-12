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
  smartproperty: {
    facts: [
      { label: 'Type', value: 'AI-Powered SaaS' },
      { label: 'Roles', value: '4 (Agent / Admin / Client / Accountant)' },
      { label: 'Deployment', value: 'Kubernetes Microservices' },
      { label: 'Stack', value: 'Multi-Service Platform' },
    ],
    techStack: [
      {
        category: 'Frontend',
        items: [
          { name: 'React', description: 'Single-page application with role-based routing' },
          { name: 'Tailwind CSS', description: 'Utility-first styling system' },
        ],
      },
      {
        category: 'State Management',
        items: [
          { name: 'Zustand', description: 'Lightweight global state for UI & auth' },
          { name: 'React Query', description: 'Server-state, caching & background sync' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'NestJS', description: 'API gateway with auth & business services' },
          { name: 'FastAPI', description: 'ML & computer-vision microservice' },
          { name: 'REST APIs', description: 'Service-to-service communication' },
          { name: 'JWT Auth', description: 'Stateless role-based authentication' },
          { name: 'Socket.IO', description: 'Real-time events & notifications' },
          { name: 'Stripe', description: 'Payment processing' },
          { name: 'Firebase', description: 'Push notifications & client messaging' },
        ],
      },
      {
        category: 'Database',
        items: [
          { name: 'MongoDB', description: 'Document-based primary store' },
          { name: 'MongoDB Atlas', description: 'Managed cloud database' },
        ],
      },
      {
        category: 'AI & ML',
        items: [
          { name: 'XGBoost', description: 'Property valuation & rent prediction' },
          { name: 'Groq LLM', description: 'Conversational AI agent' },
          { name: 'CLIP', description: 'Image-text understanding for listings' },
          { name: 'BLIP', description: 'Automatic room image descriptions' },
        ],
      },
      {
        category: 'OCR',
        items: [
          { name: 'OCR.space', description: 'Document extraction for solvency analysis' },
        ],
      },
      {
        category: 'Maps',
        items: [
          { name: 'Leaflet', description: 'Interactive map renderer' },
          { name: 'OpenStreetMap', description: 'Open map data' },
          { name: 'CARTO', description: 'Map tile styling' },
        ],
      },
      {
        category: '3D Tours',
        items: [
          { name: 'Pannellum', description: '360° virtual tour viewer' },
        ],
      },
      {
        category: 'DevOps',
        items: [
          { name: 'Docker', description: 'Containerized services' },
          { name: 'Kubernetes', description: 'Cluster orchestration' },
          { name: 'Jenkins', description: 'CI/CD pipelines' },
          { name: 'SonarQube', description: 'Code quality & static analysis' },
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          { name: 'Vercel', description: 'Frontend hosting & edge delivery' },
          { name: 'Cloudflare', description: 'DNS, CDN & security' },
          { name: 'Cloudinary', description: 'Image storage & optimization' },
        ],
      },
    ],
    features: [
      { group: 'Property Platform', icon: '🏠', title: 'Property Listings Management', desc: 'Centralized listings with images, documents, location, and lifecycle status — managed by agents, owners, and admins across multiple branches.' },
      { group: 'AI & Automation', icon: '🎯', title: 'Property Recommendation Engine', desc: 'AI-driven feed that scores properties against user preferences, behavior, and saved criteria to surface the most relevant listings.' },
      { group: 'Trust & Matching', icon: '🤝', title: 'Smart Tenant Matching', desc: 'Compatibility scoring that pairs applicants to properties using income, occupation, and history signals to reduce vacancy.' },
      { group: 'AI & Automation', icon: '💰', title: 'AI Property Valuation', desc: 'XGBoost valuation model trained on historical data to predict optimal property prices and rental rates with market trend context.' },
      { group: 'AI & Automation', icon: '📈', title: 'Predictive Pricing', desc: 'Automatic rent estimation from amenities, location, and property type — filling in the price field on listings with one click.' },
      { group: 'AI & Automation', icon: '🖼️', title: 'AI Image Description Generation', desc: 'CLIP and BLIP analyze uploaded property photos and generate room-by-room listing copy, accelerating marketing content production.' },
      { group: 'AI & Automation', icon: '📄', title: 'OCR Document Analysis', desc: 'OCR.space extracts structured data from income, identity, and supporting documents to feed the solvency pipeline.' },
      { group: 'Trust & Matching', icon: '🛡️', title: 'Fraud Detection', desc: 'Income mismatch detection and cross-field validation flag suspicious applications before they reach the approval queue.' },
      { group: 'Trust & Matching', icon: '⚖️', title: 'Solvency Analysis', desc: 'Prototype risk scoring that combines affordability ratios, occupation validation, and document evidence for review.' },
      { group: 'AI & Automation', icon: '🤖', title: 'AI Chat Assistant', desc: 'Groq-powered conversational agent that estimates budgets, answers property questions, and guides users through the platform.' },
      { group: 'AI & Automation', icon: '🎤', title: 'Voice-Enabled Navigation', desc: 'Hands-free search and navigation that listens to natural-language queries and routes users to the right view or listing.' },
      { group: 'Property Platform', icon: '🧭', title: 'Multi-Role Dashboards', desc: 'Tailored experiences for real-estate agents, admins, clients, and accountants — each with KPIs and quick actions specific to the role.' },
      { group: 'Operations & Analytics', icon: '📊', title: 'Engagement Analytics', desc: 'Per-property views, clicks, saves, and unique users tracked at the branch level to measure listing performance.' },
      { group: 'Property Platform', icon: '📅', title: 'Visit Request Management', desc: 'Multi-slot visit scheduling with date and time pickers, application status, and visit history for clients.' },
      { group: 'Property Platform', icon: '🗂️', title: 'Property Management Workflows', desc: 'Add-property flow with map-based location picking, image uploads, AI price estimation, and publish-to-market steps.' },
      { group: 'Property Platform', icon: '⚡', title: 'Real-Time Updates', desc: 'Socket.IO notifications, dashboard refresh, and event broadcasting across roles for immediate operational feedback.' },
    ],
    architecture: [
      {
        title: 'Microservices Architecture',
        desc: 'Independent services communicating over REST and Socket.IO, enabling horizontal scaling and isolated deployments per capability.',
        items: [
          { label: 'React SPA', desc: 'Role-based UI on Vercel' },
          { label: 'NestJS API Gateway', desc: 'Auth, business services, and orchestration' },
          { label: 'FastAPI ML Service', desc: 'Computer vision and ML inference' },
          { label: 'MongoDB Atlas', desc: 'Managed document store' },
          { label: 'Socket.IO Server', desc: 'Real-time events and notifications' },
          { label: 'Cloudinary', desc: 'Image storage and transformation' },
        ],
      },
      {
        title: 'AI & OCR Pipeline',
        desc: 'Specialized models and OCR services feeding recommendations, valuation, and solvency flows.',
        items: [
          { label: 'XGBoost', desc: 'Pricing and valuation prediction' },
          { label: 'Groq LLM', desc: 'Conversational AI agent' },
          { label: 'CLIP + BLIP', desc: 'Image understanding and description' },
          { label: 'OCR.space', desc: 'Document text extraction' },
          { label: 'Solvency Engine', desc: 'Risk scoring and affordability' },
          { label: 'Match Scorer', desc: 'Tenant-property compatibility' },
        ],
      },
      {
        title: 'DevOps & Quality',
        desc: 'Container-first delivery with automated quality gates and code analysis.',
        items: [
          { label: 'Docker', desc: 'Containerized services' },
          { label: 'Kubernetes', desc: 'Cluster orchestration' },
          { label: 'Jenkins', desc: 'CI/CD pipelines' },
          { label: 'SonarQube', desc: 'Static code analysis' },
          { label: 'Cloudflare', desc: 'CDN, DNS, and security' },
          { label: 'Stripe', desc: 'Payment processing' },
        ],
      },
    ],
    gallery: [
      { src: `${base}/smartproperty/landingpage.png`, caption: 'Public Landing — Marketing site for SmartProperty' },
      { src: `${base}/smartproperty/homepage.png`, caption: 'Authenticated Home — Personalized search with voice-enabled input' },
      { src: `${base}/smartproperty/propertysearch.png`, caption: 'Property Search — Map-based discovery with filters and radius search' },
      { src: `${base}/smartproperty/realestatepropertydetails.png`, caption: 'Agent Listing View — Analytics, 3D Tour, visit scheduling, applications' },
      { src: `${base}/smartproperty/clientpropertydetails.png`, caption: 'Client Listing View — Virtual staging, apply / visit / compare actions' },
      { src: `${base}/smartproperty/realestatedashboard.png`, caption: 'Real Estate Agent Dashboard — Portfolio KPIs, application pipeline, weekly visits' },
      { src: `${base}/smartproperty/admindashboard.png`, caption: 'Admin Dashboard — Platform health, branches, support queue, quick access' },
      { src: `${base}/smartproperty/clientdashboard.png`, caption: 'Client Dashboard — Activity pulse, saved properties, applications, upcoming visits' },
      { src: `${base}/smartproperty/accountantdash.png`, caption: 'Accountant Dashboard — Revenue, collection rate, invoices, financial reports' },
      { src: `${base}/smartproperty/clientpropertyadd.png`, caption: 'Add Property — Multi-step listing creation with map-based location picker' },
      { src: `${base}/smartproperty/clientrequestvisit.png`, caption: 'Visit Request — Multi-slot scheduling form for prospective clients' },
      { src: `${base}/smartproperty/engagements.png`, caption: 'Engagement Analytics — Per-property views, clicks, saves, and unique users' },
      { src: `${base}/smartproperty/aifeedrecommendation.png`, caption: 'AI Recommendations — Match-score-ranked suggestions tailored to user behavior' },
      { src: `${base}/smartproperty/aipriceestimation.png`, caption: 'AI Price Estimation — Automatic rent prediction from amenities and location' },
      { src: `${base}/smartproperty/aianalysis.png`, caption: 'AI Solvency Analysis — OCR extraction, risk score, affordability ratio' },
      { src: `${base}/smartproperty/aiimagedesc.png`, caption: 'AI Image Descriptions — Automatic room-by-room listing copy generation' },
      { src: `${base}/smartproperty/clienttrustscore.png`, caption: 'Client Trust Score — Aggregated from visits, no-shows, and applications' },
      { src: `${base}/smartproperty/chatbotaiaigent.png`, caption: 'Smart AI Agent — Conversational budget estimator and property assistant' },
      { src: `${base}/smartproperty/aihandsfreenavigationvoiceassistant.png`, caption: 'Voice Assistant — Hands-free navigation and natural-language search' },
    ],
    challenges: [
      { title: 'Multi-Role Authorization', desc: 'Four distinct user roles (agent, admin, client, accountant) with overlapping yet isolated permissions, branches, and dashboards.' },
      { title: 'Real-Time Events', desc: 'Socket.IO event broadcasting across roles for dashboard refresh, notifications, and engagement metrics without overwhelming the client.' },
      { title: 'OCR + AI Pipeline Reliability', desc: 'Combining OCR.space extraction, XGBoost scoring, and rule-based validation into a single, auditable solvency analysis.' },
      { title: 'Computer Vision Cost', desc: 'CLIP and BLIP inference for image description generation had to be optimized to keep response time under 5 seconds per listing.' },
      { title: 'Accessibility vs Density', desc: 'Balancing a feature-rich dashboard with keyboard-friendly navigation, voice input, readable structure, and accessible interaction patterns.' },
    ],
    results: [
      { icon: '🎯', title: 'Valuation Model', metric: 'XGBoost', content: 'A prototype pricing model trained on historical Tunisian listings to support—not replace—human valuation.' },
      { icon: '🏠', title: 'Tenant Matching', metric: 'Matching', content: 'Recommendation flows surface relevant properties using preferences, affordability, and listing data.' },
      { icon: '⚙️', title: 'Operations', metric: 'Automation', content: 'OCR extraction and workflow automation reduce repetitive steps across administrative roles.' },
      { icon: '🛡️', title: 'Solvency Review', metric: 'OCR + rules', content: 'Document extraction and rule-based signals create an auditable starting point for manual review.' },
      { icon: '♿', title: 'Accessible Use', metric: 'Voice + text', content: 'Keyboard-aware flows, voice input, and image descriptions broaden how users can navigate the product.' },
    ],
    cta: {
      primary: { label: 'Watch Demo', url: 'https://youtu.be/z0v_b0Qgeng' },
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['AI-Powered', 'Multi-Role SaaS', 'Microservices', 'OCR', 'Accessibility'],
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
          { name: 'LangChain', description: 'Conversation memory & chaining' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'SMTP', description: 'Transactional & campaign email' },
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
      { group: 'User Experience', icon: '🤖', title: 'AI Customer Support', desc: 'Gemini-powered chatbot providing 24/7 assistance with FAQs, store information, and personalized shopping recommendations.' },
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
      { title: 'Real-Time Data Sync', desc: 'Real-time synchronization between IoT devices and web platform using MQTT with Redis caching for high-traffic environments.' },
      { title: 'Secure Payments', desc: 'Stripe tokenization keeps raw payment-card data outside the application while supporting online checkout.' },
      { title: 'Cross-Platform Compatibility', desc: 'Ensuring consistent behavior between JavaFX desktop and Symfony web interfaces with shared business logic.' },
      { title: 'IoT Reliability', desc: 'Offline fallback for parking sensors with automatic sync on reconnection to prevent data loss.' },
    ],
    results: [
      { icon: '📈', title: 'Performance', content: '• Real-time parking allocation\n• Asynchronous notifications\n• Caching and query optimization\n• Production load and uptime still require formal benchmarking' },
      { icon: '🧩', title: 'Product Coverage', content: '• Administrator and customer workflows\n• Desktop and web interfaces\n• Connected parking operations\n• Payments, notifications, and analytics' },
    ],
    cta: {
      primary: { label: 'Watch Demo', url: 'https://youtu.be/Zs875HdhmJ8' },
      secondary: [{ label: 'GitHub Repository', url: 'https://github.com/Eya-ajimi/pi_symfony1' }],
    },
    status: ['Full-Stack Platform', 'IoT Integration', 'AI-Powered'],
  },

  macropark: {
    facts: [
      { label: 'Type', value: 'Embedded System' },
      { label: 'Hardware', value: 'WT32-ETH01 + LPR' },
      { label: 'Mobile', value: 'Flutter (BLE Fallback)' },
      { label: 'Backend', value: 'Python FastAPI' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'Firmware for barrier controllers' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { name: 'Python FastAPI', description: 'REST APIs and event pipeline' },
          { name: 'Docker', description: 'Containerized services' },
        ],
      },
      {
        category: 'Mobile',
        items: [
          { name: 'Flutter', description: 'Cross-platform app with BLE fallback' },
        ],
      },
      {
        category: 'IoT & Hardware',
        items: [
          { name: 'WT32-ETH01', description: 'Barrier gate controller' },
          { name: 'MQTT', description: 'Realtime device messaging' },
          { name: 'BLE', description: 'Bluetooth Low Energy auth' },
          { name: 'LPR', description: 'License Plate Recognition' },
        ],
      },
    ],
    features: [
      { group: 'Access & Authentication', icon: '🔍', title: 'License Plate Recognition', desc: 'Primary authentication via LPR cameras for automatic vehicle identification and barrier control.' },
      { group: 'Access & Authentication', icon: '📱', title: 'Flutter Mobile App', desc: 'Cross-platform mobile app with BLE fallback authentication when LPR is unavailable.' },
      { group: 'Hardware & Operations', icon: '🚧', title: 'WT32 Barrier Control', desc: 'Industry-grade WT32-ETH01 controllers with MQTT communication, real-time status, and emergency override.' },
      { group: 'Access & Authentication', icon: '📡', title: 'Dual Communication', desc: 'MQTT and BLE with automatic Ethernet/Wi-Fi failover designed to preserve access during network interruptions.' },
      { group: 'Hardware & Operations', icon: '🔄', title: 'OTA Firmware Updates', desc: 'Over-the-air updates enabling remote maintenance, security patches, and feature deployments without physical access.' },
      { group: 'Hardware & Operations', icon: '📊', title: 'Real-Time Monitoring', desc: 'FastAPI backend with Dockerized services providing event logging, access history, and live dashboard.' },
    ],
    architecture: [
      {
        title: 'System Components Overview',
        image: `${base}/macropark/macroparkimg.png`,
        desc: 'The system integrates LPR cameras, WT32 barrier controllers, Flutter mobile app, and Dockerized backend services into a resilient parking ecosystem.',
      },
    ],
    gallery: [],
    challenges: [
      { title: 'Multi-Protocol Integration', desc: 'Synthesizing MQTT, BLE, Ethernet, and Wi-Fi into a cohesive system with automatic failover between protocols.' },
      { title: 'Firmware Update Safety', desc: 'Developing a failsafe OTA update mechanism with rollback capability to prevent device bricking.' },
      { title: 'Real-Time Event Processing', desc: 'Handling concurrent barrier events with sub-second response time through the FastAPI event pipeline.' },
      { title: 'LPR Accuracy Optimization', desc: 'Fine-tuning license plate recognition for varied lighting conditions and plate formats.' },
    ],
    cta: {
      primary: { label: 'Download Presentation', url: `${base}/macropark/MacroPark%20Presentation%20final.pptx` },
      secondary: [
        { label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/MacroPark' },
        { label: 'Contact Me', url: '/#contact' },
      ],
    },
    status: ['Embedded System', 'LPR Integration', 'Flutter Mobile'],
  },

  secondchance: {
    facts: [
      { label: 'Type', value: 'Social Impact Platform' },
      { label: 'Backend', value: 'FastAPI + MongoDB' },
      { label: 'Real-time', value: 'WebSockets' },
      { label: 'Auth', value: 'JWT (Role-Based)' },
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
        ],
      },
      {
        category: 'Real-time',
        items: [
          { name: 'WebSockets', description: 'Community chat & live updates' },
        ],
      },
      {
        category: 'Security',
        items: [
          { name: 'JWT Auth', description: 'Role-based access control' },
        ],
      },
    ],
    features: [
      { group: 'User Support', icon: '💼', title: 'Job Matching', desc: 'Curated job listings with application tracking and status updates tailored for reintegration.' },
      { group: 'Community & Admin', icon: '💬', title: 'Secure Community Chat', desc: 'Real-time encrypted messaging with topic-based rooms and direct messaging for private conversations.' },
      { group: 'User Support', icon: '🩺', title: 'Mental Health Support', desc: 'Directory of mental health professionals specializing in reintegration and trauma recovery.' },
      { group: 'User Support', icon: '⚖️', title: 'Legal Assistance', desc: 'Access to legal professionals specializing in expungement, parole, and reintegration needs.' },
      { group: 'User Support', icon: '📚', title: 'Training Resources', desc: 'Skill-building courses and certifications to improve employment opportunities.' },
      { group: 'Community & Admin', icon: '🛡️', title: 'Admin Portal', desc: 'Comprehensive management interface for user approvals, content moderation, and analytics.' },
    ],
    architecture: [
      {
        title: 'Platform Architecture',
        desc: 'FastAPI backend with MongoDB, JWT authentication, WebSocket-powered community chat, and role-based access control for privacy and security.',
      },
    ],
    gallery: [
      { src: `${base}/secondchance/login.png`, caption: 'Login Page' },
      { src: `${base}/secondchance/homepage.png`, caption: 'Home Page' },
      { src: `${base}/secondchance/homedashboard.png`, caption: 'Dashboard — Activity Feed & Announcements' },
      { src: `${base}/secondchance/community-chat.png`, caption: 'Community Chat — Secure Peer Support' },
      { src: `${base}/secondchance/support-network.png`, caption: 'Support Network — Doctors & Legal Professionals' },
      { src: `${base}/secondchance/job-opportunities.png`, caption: 'Job Opportunities — Curated Listings' },
      { src: `${base}/secondchance/training-resources.png`, caption: 'Training Resources — Skill Development' },
      { src: `${base}/secondchance/assistant-chatbot.png`, caption: 'Assistant Chatbot — 24/7 Guidance' },
    ],
    challenges: [
      { title: 'Secure Real-Time Chat', desc: 'WebSocket encryption with message persistence and moderation for safe community interactions.' },
      { title: 'Role-Based Access Control', desc: 'Granular permissions ensuring sensitive user data is only accessible to authorized roles.' },
      { title: 'Job Matching Algorithm', desc: 'Automated matching considering legal restrictions, qualifications, and employer requirements.' },
    ],
    cta: {
      secondary: [{ label: 'GitHub Repository', url: 'https://github.com/SofieneZayati/SecondChance' }],
    },
    status: ['Social Impact', 'FastAPI + MongoDB', 'Community Platform'],
  },

  zenithhouse: {
    facts: [
      { label: 'Type', value: 'IoT Home Automation' },
      { label: 'Hardware', value: 'ESP32 per Room' },
      { label: 'Cloud', value: 'Firebase Realtime' },
      { label: 'Controls', value: 'Climate / Lighting / Access' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'ESP32 firmware' },
          { name: 'ESP32', description: 'Per-room microcontroller' },
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
          { name: 'Firebase', description: 'Realtime database & auth' },
        ],
      },
      {
        category: 'IoT',
        items: [
          { name: 'Wi-Fi', description: 'Connectivity with auto-reconnect' },
          { name: 'Power Management', description: 'Deep-sleep & scheduling' },
        ],
      },
    ],
    features: [
      { group: 'Home Control', icon: '💡', title: 'Smart Lighting Control', desc: 'Per-room lighting with scheduling, motion detection, and adaptive brightness based on natural light levels.' },
      { group: 'Home Control', icon: '🌡️', title: 'Climate Management', desc: 'Room-specific temperature control with learning algorithms that adapt to usage patterns for optimal comfort.' },
      { group: 'Home Control', icon: '🔒', title: 'Access Security', desc: 'Smart locks with remote control, temporary access codes, and real-time entry notifications.' },
      { group: 'Operations', icon: '📱', title: 'Mobile Integration', desc: 'Cross-platform app for real-time control and monitoring from anywhere with secure authentication.' },
      { group: 'Operations', icon: '📊', title: 'Energy Analytics', desc: 'Usage reports with recommendations for optimizing consumption and reducing costs.' },
    ],
    architecture: [
      {
        title: 'Distributed Smart Home Network',
        desc: 'Each room has a dedicated ESP32 controller managing local devices, communicating with Firebase for state synchronization and remote access.',
      },
    ],
    gallery: [],
    challenges: [
      { title: 'Power Optimization', desc: 'Implementing deep sleep modes while maintaining responsiveness to real-time Firebase updates.' },
      { title: 'Network Reliability', desc: 'Local caching and automatic reconnection for seamless operation during network outages.' },
      { title: 'Real-Time Sync', desc: 'Consistent device state across multiple controllers with minimal latency for instantaneous feedback.' },
    ],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['ESP32 Microcontrollers', 'Firebase Sync', 'IoT Home'],
  },

  smartunlock: {
    facts: [
      { label: 'Type', value: 'Keyless Access System' },
      { label: 'Auth', value: 'BLE + AES-256' },
      { label: 'Hardware', value: 'ESP32 Locks' },
      { label: 'Messaging', value: 'MQTT' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'ESP32 lock firmware' },
          { name: 'ESP32', description: 'Lock controller' },
        ],
      },
      {
        category: 'IoT',
        items: [
          { name: 'BLE', description: 'Mobile authentication' },
          { name: 'MQTT', description: 'Backend messaging' },
        ],
      },
      {
        category: 'Security',
        items: [
          { name: 'AES-256', description: 'Encrypted handshake & rotating keys' },
        ],
      },
    ],
    features: [
      { group: 'Security & Access', icon: '📱', title: 'BLE Authentication', desc: 'Secure Bluetooth Low Energy-based authentication using employee smartphones with multi-factor verification.' },
      { group: 'Security & Access', icon: '⚡', title: 'Instant Lock Control', desc: 'MQTT protocol enables sub-second lock/unlock commands from the mobile app to door hardware.' },
      { group: 'Security & Access', icon: '🔒', title: 'AES-256 Security', desc: 'Encrypted communication with rotating keys and a secure handshake protocol for access commands.' },
      { group: 'Operations', icon: '📊', title: 'Access Monitoring', desc: 'Real-time access logs with timestamps, user identification, and door status for security auditing.' },
      { group: 'Operations', icon: '🔋', title: 'Low Power Operation', desc: 'A deep-sleep-oriented BLE design intended to extend battery life while preserving quick wake-up.' },
    ],
    architecture: [
      {
        title: 'System Architecture',
        desc: 'ESP32-driven lock hardware communicates via MQTT with the backend, while the mobile app uses BLE for local authentication. AES-256 encryption secures all channels.',
      },
    ],
    gallery: [],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['BLE & MQTT', 'Enterprise Security', 'ESP32'],
  },

  sps: {
    facts: [
      { label: 'Type', value: 'Android App' },
      { label: 'Backend', value: 'Firebase Realtime' },
      { label: 'Maps', value: 'Google Maps API' },
      { label: 'Sensors', value: 'IoT Parking' },
    ],
    techStack: [
      {
        category: 'Mobile',
        items: [
          { name: 'Java', description: 'Android development' },
          { name: 'Android', description: 'Native mobile platform' },
        ],
      },
      {
        category: 'Cloud',
        items: [
          { name: 'Firebase', description: 'Realtime database & auth' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { name: 'Google Maps API', description: 'Navigation & spot display' },
        ],
      },
      {
        category: 'IoT',
        items: [
          { name: 'IoT Sensors', description: 'Parking space detection' },
        ],
      },
    ],
    features: [
      { group: 'Parking Experience', icon: '📍', title: 'Real-Time Availability', desc: 'Live updates of parking space availability using IoT sensor data displayed on an interactive map.' },
      { group: 'Parking Experience', icon: '🗺️', title: 'Interactive Map', desc: 'Color-coded map showing available, occupied, and restricted parking spaces with navigation.' },
      { group: 'Smart Features', icon: '⏱️', title: 'Time Estimates', desc: 'Predictive insights showing when spaces are likely to become available based on historical patterns.' },
      { group: 'Smart Features', icon: '🔔', title: 'Availability Alerts', desc: "Push notifications when spaces become available in the user's preferred parking areas." },
    ],
    architecture: [
      {
        title: 'System Architecture',
        desc: 'Android app connects to Firebase Realtime Database which aggregates data from IoT parking sensors deployed across monitored parking areas.',
      },
    ],
    gallery: [],
    cta: {
      secondary: [{ label: 'Contact Me', url: '/#contact' }],
    },
    status: ['Android App', 'Firebase Realtime', 'IoT Sensors'],
  },

  smartagri: {
    facts: [
      { label: 'Type', value: 'IoT Field Monitoring' },
      { label: 'Sensors', value: 'DHT22 (Temp + RH)' },
      { label: 'Power', value: 'Solar + Battery' },
      { label: 'Cloud', value: 'Firebase' },
    ],
    techStack: [
      {
        category: 'Embedded',
        items: [
          { name: 'C++', description: 'ESP32 firmware' },
          { name: 'ESP32', description: 'Field microcontroller' },
        ],
      },
      {
        category: 'IoT & Hardware',
        items: [
          { name: 'DHT22', description: 'Temperature & humidity sensor' },
          { name: 'Solar Power', description: 'Off-grid energy' },
        ],
      },
      {
        category: 'Cloud',
        items: [
          { name: 'Firebase', description: 'Realtime data sync' },
        ],
      },
    ],
    features: [
      { group: 'Field Monitoring', icon: '🌡️', title: 'Real-Time Monitoring', desc: 'Continuous DHT22 temperature and humidity readings for timely field monitoring.' },
      { group: 'Field Monitoring', icon: '📊', title: 'Data Visualization', desc: 'Interactive mobile charts showing historical trends and current environmental conditions.' },
      { group: 'Operations', icon: '⚠️', title: 'Alert System', desc: 'Instant push notifications when environmental conditions exceed optimal ranges for specific crops.' },
      { group: 'Operations', icon: '🔋', title: 'Solar-Powered Operation', desc: 'Low-power design with solar charging and battery backup for continuous field operation.' },
    ],
    architecture: [
      {
        title: 'End-to-End IoT Solution',
        desc: 'ESP32 with DHT22 sensors collects environmental data, transmits via Wi-Fi to Firebase, and is visualized in a mobile app for farmer insights.',
      },
    ],
    gallery: [],
    cta: {
      secondary: [
        { label: 'Contact Me', url: '/#contact' },
        { label: 'View on GitHub', url: 'https://github.com/SofieneZayati' },
      ],
    },
    status: ['IoT Sensors', 'Firebase Realtime', 'Solar Powered'],
  },
}

export default content
