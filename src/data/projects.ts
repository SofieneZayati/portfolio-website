export type ProjectCategory = 'embedded' | 'web' | 'mobile' | 'ai'

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription: string
  techStack: string[]
  logo: string
  screenshots: string[]
  category: ProjectCategory
  tags?: ProjectCategory[]
  links: {
    detail?: string
    github?: string
    live?: string
  }
}

export const TODO_SCREENSHOTS = [
  'zenithhouse',
  'smartunlock',
  'sps',
  'smartagri',
] as const

export const projects: Project[] = [
  {
    id: 'smartproperty',
    title: 'SmartProperty',
    tagline: 'AI-Powered Real Estate SaaS',
    description:
      'AI-powered real estate SaaS for the Tunisian market — centralizing property management with ML-driven valuation, OCR, computer vision, and accessibility features for multiple user roles.',
    longDescription:
      'SmartProperty is an AI-powered real estate platform built for the Tunisian real estate market. It centralizes property management for agencies, property owners, accountants, and tenants — combining machine learning, OCR-based document analysis, computer vision, voice-enabled navigation, and multi-role analytics dashboards. Asset management, smart valuation, smart tenant matching, AI-generated marketing, and solvency analysis are delivered through a microservices architecture deployed on Kubernetes with end-to-end CI/CD.',
    techStack: [
      'React',
      'TailwindCSS',
      'Zustand',
      'React Query',
      'NestJS',
      'FastAPI',
      'REST APIs',
      'JWT Auth',
      'Socket.io',
      'Stripe',
      'Firebase',
      'MongoDB',
      'MongoDB Atlas',
      'XGBoost',
      'Groq LLM',
      'CLIP',
      'BLIP',
      'OCR.space',
      'Leaflet',
      'OpenStreetMap',
      'Pannellum',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'SonarQube',
      'Vercel',
      'Cloudflare',
      'Cloudinary',
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
    links: {
      detail: '/project/smartproperty',
      live: 'https://youtu.be/z0v_b0Qgeng',
    },
  },
  {
    id: 'prigado',
    title: 'Prigado AI',
    tagline: 'Intelligent E-Commerce Automation',
    description:
      'AI-powered workflow automation for e-commerce using n8n, Laravel, Vue.js, MySQL, and Gemini — building conversational AI assistants for product enrichment, sales analytics, and logistics.',
    longDescription:
      'At Inspark Connect, I developed AI-powered workflow automation for the Prigado e-commerce platform using n8n, Laravel, Vue.js, MySQL, and Google Gemini. The system features conversational AI assistants for product enrichment, sales analytics, marketing automation, and logistics prediction. I designed AI Router workflows with intent extraction, JSON sanitization, SQL aggregation for structured agent inputs, and automated email campaigns via SMTP.',
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
    links: {
      detail: '/project/prigado',
    },
  },
  {
    id: 'innomall',
    title: 'InnoMall',
    tagline: 'Integrated Mall Management Ecosystem',
    description:
      'Full-stack mall management platform with JavaFX desktop and Symfony web interfaces, IoT multi-floor parking with real-time sensor tracking, Stripe payments, and AI chatbot.',
    longDescription:
      'InnoMall is a comprehensive mall management platform developed with a JavaFX desktop application for administrators and a Symfony 6 web interface for customers and shop owners. The system features an IoT multi-floor parking system with real-time sensor tracking, live spot monitoring, and online reservations. Integrated Stripe payment processing, a Gemini-powered AI chatbot for customer support, Twilio SMS notifications, and detailed analytics dashboards.',
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
    links: {
      detail: '/project/innomall',
      github: 'https://github.com/Eya-ajimi/pi_symfony1',
      live: 'https://youtu.be/Zs875HdhmJ8',
    },
  },
  {
    id: 'macropark',
    title: 'MacroPark',
    tagline: 'Smart Parking Ecosystem',
    description:
      'Multi-component smart parking system with LPR integration, WT32-based barrier controllers, Flutter mobile app, BLE fallback, and Dockerized backend services.',
    longDescription:
      'MacroPark is a multi-component smart parking ecosystem including an admin platform, Flutter mobile application, IoT barrier controllers, and License Plate Recognition (LPR) integration. WT32-ETH01 microcontrollers manage barrier gates via MQTT with BLE and Ethernet/WiFi failover, OTA firmware updates, and real-time access management. The backend uses Python FastAPI with Dockerized services for REST APIs and real-time event monitoring.',
    techStack: ['C++', 'Python FastAPI', 'MQTT', 'BLE', 'Docker', 'Flutter', 'REST APIs', 'WT32-ETH01', 'LPR'],
    logo: '/images/projects/macropark/macrologo.png',
    screenshots: ['/images/projects/macropark/macroparkimg.png'],
    category: 'embedded',
    links: {
      detail: '/project/macropark',
      github: 'https://github.com/SofieneZayati/MacroPark',
    },
  },
  {
    id: 'zenithhouse',
    title: 'ZenithHouse',
    tagline: 'Smart Home Automation System',
    description:
      'IoT smart home system for climate, lighting, and access control using ESP32 microcontrollers with Firebase real-time sync and mobile app control.',
    longDescription:
      'ZenithHouse is a smart home automation system that controls climate, lighting, and door access across rooms using ESP32 microcontrollers. A mobile app communicates with Firebase for real-time state synchronization and user management, enabling residents to control their environment from anywhere. The system features energy-efficient scheduling, motion-based lighting, and secure remote access.',
    techStack: ['C++', 'Firebase', 'ESP32', 'IoT', 'Mobile App'],
    logo: '/images/projects/zenithhouse/zenithlogo.png',
    // TODO: screenshots — drop 2-4 image paths here (hardware, mobile app, dashboard)
    screenshots: [],
    category: 'embedded',
    links: {
      detail: '/project/zenithhouse',
    },
  },
  {
    id: 'secondchance',
    title: 'SecondChance',
    tagline: 'Reintegration Platform for Reentry',
    description:
      'Reintegration platform for formerly incarcerated individuals. Provides job matching, mental health resources, community chat, and admin oversight — built with FastAPI and MongoDB.',
    longDescription:
      'SecondChance is a reintegration platform designed to reduce recidivism by providing formerly incarcerated individuals with job opportunities, mental health support, training resources, and a community network. The backend is built with FastAPI and MongoDB, featuring role-based access, JWT authentication, WebSocket-powered community chat, and a comprehensive admin dashboard.',
    techStack: ['FastAPI', 'MongoDB', 'PyMongo', 'JWT Auth', 'WebSockets', 'Jinja2', 'Pydantic'],
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
    links: {
      detail: '/project/secondchance',
    },
  },
  {
    id: 'smartunlock',
    title: 'Smart Unlock',
    tagline: 'Keyless BLE Employee Access',
    description:
      'Secure keyless door access system using BLE mobile authentication and MQTT communication to instantly control ESP32-driven door lock hardware.',
    longDescription:
      'Smart Unlock replaces traditional keys with a BLE-enabled mobile app. Employees authenticate through the app, which sends commands via MQTT to ESP32-controlled door locks. The system provides instant, secure, and auditable access control with AES-256 encrypted communication, rotating security keys, and an admin dashboard for user management.',
    techStack: ['C++', 'BLE', 'MQTT', 'ESP32', 'AES-256'],
    logo: '/images/projects/smartunlock/smartunlocklogo.png',
    // TODO: screenshots — drop 2-4 image paths here (hardware, mobile app, admin)
    screenshots: [],
    category: 'embedded',
    links: {
      detail: '/project/smartunlock',
    },
  },
  {
    id: 'sps',
    title: 'SPS',
    tagline: 'Smart Parking Solution Mobile App',
    description:
      'Android application displaying real-time parking availability using IoT sensors and Firebase to minimize search time and reduce traffic congestion.',
    longDescription:
      'Smart Parking Solution (SPS) is an Android application built with Java that connects to IoT parking sensors to show real-time slot availability. Users can quickly locate open spots, receive notifications when spaces open up, and navigate to available parking using Google Maps integration. Firebase provides real-time data synchronization and user authentication.',
    techStack: ['Java', 'Firebase', 'XML', 'Android', 'Google Maps API'],
    logo: '/images/projects/sps/spslogo.png',
    // TODO: screenshots — drop 2-4 image paths here (android screens, map, sensors)
    screenshots: [],
    category: 'mobile',
    links: {
      detail: '/project/sps',
    },
  },
  {
    id: 'smartagri',
    title: 'Smart Agri',
    tagline: 'IoT Agricultural Monitoring',
    description:
      'IoT-based agricultural monitoring system using ESP32 and environmental sensors to track temperature and humidity with real-time mobile data visualization.',
    longDescription:
      'Smart Agri is an IoT-based agricultural monitoring system that uses ESP32 microcontrollers with DHT22 environmental sensors to track temperature and humidity in real-time. Data streams to Firebase and is visualized in a mobile app, enabling farmers to react quickly to changing conditions. The system features solar-powered operation, low-power deep sleep modes, and configurable alert thresholds.',
    techStack: ['C++', 'IoT Sensors', 'Firebase', 'ESP32', 'DHT22', 'Solar Power'],
    logo: '/images/projects/smartagri/smartagrilogo.png',
    // TODO: screenshots — drop 2-4 image paths here (hardware, mobile app, dashboard)
    screenshots: [],
    category: 'embedded',
    links: {
      detail: '/project/smartagri',
    },
  },
]
