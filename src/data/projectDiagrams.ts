import type {
  ProjectDiagram,
  ProjectDiagramNode,
  ProjectDiagramStage,
} from './projectContent'

const node = (
  label: string,
  detail: string,
  kind: ProjectDiagramNode['kind'] = 'service',
  icon: ProjectDiagramNode['icon'] = 'api',
): ProjectDiagramNode => ({ label, detail, kind, icon })
const stage = (
  label: string,
  nodes: ProjectDiagramNode[],
  connector?: string,
): ProjectDiagramStage => ({ label, nodes, connector })
const flow = (
  title: string,
  description: string,
  stages: ProjectDiagramStage[],
  planned?: string[],
): ProjectDiagram => ({
  layout: 'flow',
  title,
  description,
  lanes: [{ label: 'Documented project flow', stages }],
  ...(planned
    ? {
        shared: {
          label: 'Planned production integrations',
          nodes: planned.map((label) =>
            node(label, 'Next release; outside the current demo'),
          ),
        },
      }
    : {}),
})

// These explain the documented systems. Planned services are explicitly separated.
export const additionalDiagrams: Record<string, ProjectDiagram> = {
  olivetrace: {
    layout: 'ecosystem',
    title: 'My module, its boundaries, and the team around it.',
    description: 'The Producer/Farm domain owns farm operations and reviewed advice. Stable references connect it to the shared traceability platform.',
    lanes: [
      { label: 'My contribution · Producer/Farm operations', stages: [
        stage('People', [node('Producer / admin', 'Owned records or scoped moderation', 'actor', 'user')], 'Authorized requests'),
        stage('Application rules', [node('Laravel + Blade', 'Ownership policies, validated forms, maps, and journals', 'service', 'server')], 'Eloquent relationships'),
        stage('Domain records', [node('MySQL', 'ProducerProfile, Farm, activities, and advice reports', 'data', 'database')], 'Stable farm references'),
        stage('Integration contract', [node('Farm selector + origin', 'Eligible farm IDs and opt-in public information', 'output', 'api')]),
      ] },
      { label: 'My contribution · Advisory AI workflow', stages: [
        stage('Prepare', [node('Fact snapshot', 'Selected farm and activity data; no contact details or exact GPS', 'data', 'document')], 'Explicit request'),
        stage('Generate', [node('Configured AI provider', 'Gemini, OpenAI, or Ollama adapter', 'ai', 'agent')], 'Validate output'),
        stage('Review', [node('Saved report', 'Evidence-linked recommendations for producer review', 'screen', 'quality')], 'Producer adopts a suggestion'),
        stage('Follow through', [node('Farm journal', 'Idempotent activity creation and completion tracking', 'output', 'workflow')]),
      ] },
    ],
    shared: { label: 'Team-owned platform and adjacent modules', nodes: [
      node('Shared foundation', 'Identity, roles, layouts, and delivery infrastructure', 'service', 'server'),
      node('Harvest & milling', 'Harvests, mills, and oil lots', 'service', 'product'),
      node('Certification', 'Laboratory and certification records', 'service', 'quality'),
      node('Distribution', 'Products and distribution', 'service', 'logistics'),
      node('Consumer traceability', 'Origin, feedback, and complaints', 'service', 'user'),
    ] },
  },
  geniuspmo: flow(
    'Two clients. One workforce system.',
    'The web platform and Android attendance companion share backend-owned identity, permissions, work-mode rules, and attendance records.',
    [
      stage(
        'Role-specific clients',
        [
          node(
            'Next.js web',
            'HR, leadership, payroll, admin, and employees',
            'screen',
            'browser',
          ),
          node(
            'Android companion',
            'Employee profile and Check In/Out',
            'screen',
            'mobile',
          ),
        ],
        'Authenticated requests',
      ),
      stage(
        'Backend authority',
        [
          node(
            'FastAPI',
            'Scope, work-mode rules, attendance decisions, and audit history',
            'service',
            'api',
          ),
        ],
        'Validated writes',
      ),
      stage('Shared records', [
        node(
          'PostgreSQL',
          'Workforce data with versioned migrations',
          'data',
          'database',
        ),
        node(
          'Protected uploads',
          'Separate, matched backup and restore',
          'data',
          'backup',
        ),
      ]),
    ],
  ),
  greencoffee: flow(
    'One café, connected role perspectives.',
    'The current product demonstrates a shared shop domain and persistent demo state. Production services below remain the next integration milestone.',
    [
      stage(
        'People at the café',
        [
          node(
            'Staff & customers',
            'Owner, manager, barista, floor staff, and customer journeys',
            'actor',
            'user',
          ),
        ],
        'Role-focused views',
      ),
      stage(
        'Product modules',
        [
          node(
            'React workspaces',
            'Orders, menus, tables, reservations, loyalty, and analytics',
            'screen',
            'browser',
          ),
        ],
        'Shared demo state',
      ),
      stage('Current persistence', [
        node(
          'Local demo data',
          'Connected operational state across role changes',
          'data',
          'persistence',
        ),
      ]),
    ],
    ['Identity', 'Payments & messaging', 'Realtime & AI services'],
  ),
  aurelle: flow(
    'From discovery to ongoing care.',
    'This diagram describes the current clinic concept and demo journey. Clinical services and live booking infrastructure are planned integrations.',
    [
      stage(
        'Discover',
        [
          node(
            'Public experience',
            'Treatment discovery and goal-led consultation',
            'screen',
            'browser',
          ),
        ],
        'Guided consultation',
      ),
      stage(
        'Choose',
        [
          node(
            'Demo booking',
            'Appointment selection in the prototype',
            'screen',
            'workflow',
          ),
        ],
        'Continue the journey',
      ),
      stage('Return', [
        node(
          'Member care',
          'Persistent member-portal experience',
          'screen',
          'user',
        ),
      ]),
    ],
    ['Production identity', 'Live scheduling', 'Content & payments'],
  ),
  pitchly: flow(
    'A reservation seen from both sides.',
    'Player and manager views share persistent product state. Production payments, identity, and concurrency guarantees are outside the current demo boundary.',
    [
      stage(
        'Player',
        [
          node(
            'Discover & request',
            'Choose a venue and slot; manage team and bookings',
            'screen',
            'user',
          ),
        ],
        'Shared reservation',
      ),
      stage(
        'Booking domain',
        [
          node(
            'Lifecycle state',
            'Pending, confirmed, declined, completed, or cancelled',
            'data',
            'workflow',
          ),
        ],
        'Review & update',
      ),
      stage('Venue manager', [
        node(
          'Schedule & approvals',
          'Review requests and maintain venue availability',
          'screen',
          'admin',
        ),
      ]),
    ],
    ['Identity & payments', 'Concurrent booking services'],
  ),
  interna: flow(
    'One placement lifecycle, two workspaces.',
    'The product connects the program-office and student perspectives through a shared domain. Institutional production services are the next integration step.',
    [
      stage(
        'Program office',
        [
          node(
            'Cohort operations',
            'Placements, approvals, deadlines, and exceptions',
            'screen',
            'admin',
          ),
        ],
        'Shared lifecycle',
      ),
      stage(
        'Program domain',
        [
          node(
            'Records & evidence',
            'Attendance, journals, documents, validation, and evaluation',
            'data',
            'document',
          ),
        ],
        'Role-specific tasks',
      ),
      stage('Student', [
        node(
          'Progress workspace',
          'Journal, deadlines, evidence, and report readiness',
          'screen',
          'user',
        ),
      ]),
    ],
    ['Production identity', 'Institutional data', 'Document & report services'],
  ),
  daymark: flow(
    'Small by design. Local by default.',
    'This is a device-local planning experiment: no cloud account or synchronization service is claimed.',
    [
      stage(
        'Capture',
        [
          node(
            'React dashboard',
            'Add tasks, watchlist items, or games',
            'screen',
            'browser',
          ),
        ],
        'Update one list',
      ),
      stage(
        'Derive',
        [
          node(
            'Task model',
            'Category, completion, filters, and progress counts',
            'data',
            'code',
          ),
        ],
        'Persist & restore',
      ),
      stage('Keep', [
        node(
          'Browser storage',
          'The current device restores its own list',
          'data',
          'persistence',
        ),
      ]),
    ],
  ),
  innomall: {
    layout: 'flow',
    title: 'Mall operations meet connected parking.',
    description:
      'The documented prototype connects desktop and web workflows with parking telemetry. Production load and uptime are not benchmarked.',
    lanes: [
      {
        label: 'Application workflows',
        stages: [
          stage(
            'Interfaces',
            [
              node(
                'JavaFX & Symfony',
                'Desktop and web operations',
                'screen',
                'desktop',
              ),
            ],
            'Application services',
          ),
          stage(
            'Operations',
            [
              node(
                'Symfony + integrations',
                'Reservations, payments, support, and notifications',
                'service',
                'api',
              ),
            ],
            'Persistent records',
          ),
          stage('Data', [
            node('MySQL', 'Shared application records', 'data', 'database'),
          ]),
        ],
      },
      {
        label: 'Parking telemetry',
        stages: [
          stage(
            'Sense',
            [
              node(
                'ESP32 & ultrasonic sensors',
                'Multi-floor space detection',
                'device',
                'microchip',
              ),
            ],
            'MQTT over Wi-Fi',
          ),
          stage(
            'Transmit',
            [
              node(
                'Connected telemetry',
                'Occupancy state from the sensor network',
                'service',
                'mqtt',
              ),
            ],
            'Present availability',
          ),
          stage('Observe', [
            node(
              'Parking views',
              'Current availability and reservation workflows',
              'screen',
              'browser',
            ),
          ]),
        ],
      },
    ],
  },
  secondchance: flow(
    'A resource journey with an explicit prototype boundary.',
    'FastAPI, Jinja2, and MongoDB support page and user-data operations. Resource directories, community, and assistant views are interface prototypes; production security and realtime messaging remain future work.',
    [
      stage(
        'Explore',
        [
          node(
            'Jinja2 pages',
            'Jobs, training, support, and community concepts',
            'screen',
            'browser',
          ),
        ],
        'Page & user requests',
      ),
      stage(
        'Application',
        [
          node(
            'FastAPI',
            'Server-rendered flows and core user-data operations',
            'service',
            'api',
          ),
        ],
        'Persist user data',
      ),
      stage('Data', [
        node('MongoDB', 'Document-based prototype records', 'data', 'database'),
      ]),
    ],
  ),
  zenithhouse: flow(
    'Mobile control meets room-level devices.',
    'The documented home-automation prototype synchronizes lighting, climate, and access state through Firebase.',
    [
      stage(
        'Control',
        [
          node(
            'Mobile interface',
            'Remote lighting, climate, and access actions',
            'screen',
            'mobile',
          ),
        ],
        'Synchronize state',
      ),
      stage(
        'Coordinate',
        [
          node(
            'Firebase',
            'Realtime state shared with devices',
            'data',
            'cloud',
          ),
        ],
        'Device actions',
      ),
      stage('Act locally', [
        node(
          'ESP32 controllers',
          'Distributed room-level control',
          'device',
          'microchip',
        ),
      ]),
    ],
  ),
  sps: flow(
    'A focused Android parking prototype.',
    'The verified scope covers account, parking, and vehicle-record views. Live sensors, maps, predictive services, and alerting are outside this build.',
    [
      stage(
        'Enter',
        [
          node(
            'Android account views',
            'Java and XML login, registration, and logout',
            'screen',
            'mobile',
          ),
        ],
        'Application records',
      ),
      stage(
        'Store',
        [
          node(
            'Firebase',
            'Account and parking application data',
            'data',
            'cloud',
          ),
        ],
        'Present records',
      ),
      stage('Use', [
        node(
          'Parking & vehicles',
          'Parking-space, plate, vehicle, and owner views',
          'screen',
          'mobile',
        ),
      ]),
    ],
  ),
}
