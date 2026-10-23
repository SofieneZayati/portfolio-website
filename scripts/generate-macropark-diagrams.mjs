import { mkdir, writeFile } from 'node:fs/promises'

const directory = new URL('../public/images/projects/macropark-experience/', import.meta.url)
await mkdir(directory, { recursive: true })
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const text = (x, y, value, size = 18, color = '#b5afc7', weight = 400) =>
  `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}">${escape(value)}</text>`
const lines = (x, y, values, size = 18) => values.map((value, index) => text(x, y + index * 28, value, size)).join('')
const panel = (x, y, width, height, fill = '#171226') =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="${fill}" stroke="#3a2c53"/>`
const route = (path) => `<path d="${path}" fill="none" stroke="#ae8ff0" stroke-width="2" marker-end="url(#arrow)"/>`
const label = (x, y, value) => text(x, y, value, 13, '#c3a6ff', 600)
const heading = (x, y, value, size = 24) => text(x, y, value, size, '#faf7ff', 600)
function document(title, description, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760" role="img" aria-labelledby="title description">
<title id="title">${escape(title)}</title><desc id="description">${escape(description)}</desc>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ae8ff0"/></marker></defs>
<rect width="1200" height="760" rx="22" fill="#0e0b18"/>
<g font-family="Inter, Arial, sans-serif">${content}</g></svg>\n`
}

const architecture = document(
  'MacroPark — one plan, two experiences',
  'The accessible workbench changes a validated Zustand plan. The deferred WebGL runtime visualizes it. Only parking choices are saved on the device; the same plan creates a brief with optional personal details held in memory.',
  `${label(40, 56, 'MACROPARK / EXPERIENCE ARCHITECTURE')}
${heading(40, 104, 'One plan. A clear interface. A responsive world.', 32)}
${text(40, 143, 'Keep visitor decisions separate from how the scene renders them.')}
${label(40, 201, '01 / CHOOSE & PREVIEW')}${label(440, 201, '02 / VALIDATE & RETAIN')}${label(840, 201, '03 / MAKE IT VISIBLE')}
${panel(40, 225, 320, 210)}${panel(440, 225, 320, 210, '#211832')}${panel(840, 225, 320, 210)}
${heading(64, 270, 'Accessible workbench')}
${lines(64, 310, ['Place and need selection', 'Preview / add / remove / replay', 'Keyboard and modal controls', 'Works without the 3D canvas'], 17)}
${heading(464, 270, 'Validated plan')}
${lines(464, 310, ['Zustand + domain rules', 'Independent plan per place', 'Solar depends on charging', 'Preview never silently adds'], 17)}
${heading(864, 270, 'Deferred 3D runtime')}
${lines(864, 310, ['React Three Fiber + Three.js', 'Vehicles and hardware stories', 'Guided camera or orbit mode', 'Adaptive quality and motion'], 17)}
${route('M 370 330 H 425')}${route('M 770 330 H 825')}
${route('M 600 445 V 477 H 305 V 500')}${route('M 600 477 H 895 V 500')}
${panel(40, 515, 530, 135)}${panel(630, 515, 530, 135)}
${label(64, 545, 'DEVICE-LOCAL CHOICES')}${heading(64, 577, 'Return to the same parking plan', 22)}
${text(64, 612, 'Validated options only; no contact details in storage.', 17)}
${label(654, 545, 'CONSISTENT PROJECT BRIEF')}${heading(654, 577, 'Preview, copy, or download', 22)}
${text(654, 612, 'Optional personal fields stay in the current visit.', 17)}
<path d="M 40 684 H 1160" stroke="#352745"/>
${text(40, 719, 'Design rule', 15, '#c3a6ff', 600)}${text(168, 719, 'Exploration changes the preview. Only an explicit Add changes the plan.', 18, '#f1eaff')}`,
)

const pipeline = document(
  'MacroPark — detail with a deliberate asset budget',
  'An attributed Khronos concept car and CC0 texture maps are optimized with Draco and WebP, fitted to the story envelope, and combined with custom architecture. Shared geometry, local reflections, and adaptive quality limit runtime work.',
  `${label(40, 56, 'MACROPARK / 3D ASSET PIPELINE')}
${heading(40, 104, 'Keep the character. Control the cost.', 32)}
${text(40, 143, 'Detailed assets become a reusable part of the product, with clear attribution.')}
${label(40, 201, '01 / SOURCES')}${label(440, 201, '02 / PREPARE')}${label(840, 201, '03 / COMPOSE & ADAPT')}
${panel(40, 225, 320, 172)}${panel(40, 421, 320, 174)}
${heading(64, 269, 'Khronos Car Concept', 23)}
${lines(64, 307, ['Eric Chadwick / DGG', 'CC BY 4.0 · source GLB', 'Body, cabin, four wheel pivots'], 17)}
${heading(64, 465, 'Poly Haven surfaces', 23)}
${lines(64, 503, ['CC0 material maps', 'Color / normal / roughness', 'Concrete, timber, asphalt'], 17)}
${panel(440, 225, 320, 370, '#211832')}
${label(464, 267, 'A / SHRINK TRANSFER')}${heading(464, 301, 'Draco + WebP', 23)}
${text(464, 333, 'Compress mesh and textures.', 17)}
<path d="M 464 356 H 736" stroke="#49345d"/>
${label(464, 388, 'B / FIT THE STORY')}${heading(464, 422, 'Normalize + batch', 23)}
${lines(464, 458, ['Ground and center the model.', 'Match heading and scale.', 'Share static geometry.', 'Keep four rolling wheel pivots.'], 17)}
${panel(840, 225, 320, 370)}
${heading(864, 269, 'Custom architecture', 23)}
${lines(864, 307, ['Villa / residence / retail', 'Glazing, fins, interiors, planting'], 17)}
<path d="M 864 356 H 1136" stroke="#49345d"/>
${label(864, 388, 'RUNTIME')}${heading(864, 422, 'Compose once, adapt', 23)}
${lines(864, 458, ['Local decoder and material maps', 'Generated reflection studio', 'Targeted shadows and adaptive DPR', 'Pause and reduced-motion support'], 16)}
${route('M 370 311 H 425')}${route('M 370 508 H 425')}${route('M 770 410 H 825')}
<path d="M 40 642 H 1160" stroke="#352745"/>
${heading(40, 689, '11.8 MB → 1.01 MB', 25)}${text(40, 724, 'Source GLB → shipped vehicle', 16)}
${heading(475, 689, '512 px', 25)}${text(475, 724, 'Locally served PBR maps', 16)}
${heading(840, 689, 'Shared + reusable', 25)}${text(840, 724, 'Prepared geometry, per-instance finishes', 16)}`,
)

await Promise.all([
  writeFile(new URL('experience-architecture.svg', directory), architecture),
  writeFile(new URL('asset-pipeline.svg', directory), pipeline),
])
console.log('Generated the two MacroPark architecture diagrams.')
