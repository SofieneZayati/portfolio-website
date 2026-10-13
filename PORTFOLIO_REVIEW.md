# Portfolio design and content review — 13 October 2026

## Direction

The portfolio keeps the approved black and deep-purple identity with restrained blue accents. The homepage introduces Sofiene, presents two larger client-product showcases, and offers a searchable archive of 21 projects. The background section presents projects and education; case studies are framed as projects rather than internships.

## Improvements delivered

- Redesigned all 21 project-detail pages with a two-column introduction, readable role and scope, a short problem/contribution/delivery brief, and consistent section navigation.
- Wrote 21 editorial project briefs using the existing descriptions and technical documentation.
- Replaced dense capability cards with accessible disclosure sections. Technical choices and tool descriptions are easier to explore on phones as well as desktop.
- Made the main preview enlargeable and restored every image to the walkthrough. The keyboard-accessible viewer supports Escape, previous/next, focus return, and opening the original image. Native image links remain useful without JavaScript.
- Added 10 responsive, code-native system diagrams. All 21 projects now have a system overview. These explain documented implementation; future integrations are explicitly labeled as planned. Existing detailed LeadX diagrams remain available.
- Preserved real project screenshots and the captions that identify sample data and concept visuals. Generated diagrams illustrate systems; they do not fabricate product screens.
- Kept documented technical delivery notes, without adding testimonials, speculative business results, or new performance claims.
- Updated the two-page CV with LeadX, Sobly, and Ben Mahmoud Stock, and aligned its presentation with project-focused wording.
- Pre-rendered the homepage, all project routes, and the not-found page. Project titles, descriptions, canonical URLs, social metadata, and CreativeWork structured data are now present in the initial HTML. React hydrates those pages for interaction.
- Updated Vercel routing to serve the generated project pages, preserve static assets, and return the generated not-found page for unknown paths.
- Extended build validation to require every project brief, generated page, initial metadata, and deployment route. The MacroPark PowerPoint download remains protected by production asset validation.
- Kept chat attachments, local previews, build output, and intermediate files out of version control.

## What is still missing

These are useful future additions, not placeholders inserted into the website:

| Project or area | Missing material | Why it helps |
| --- | --- | --- |
| SPS | Actual Android screenshots | The current visual is clearly labeled as a system concept. Captures would show the native implementation. |
| ZenithHouse | Real mobile-interface captures and device photos | The concept visualization and system diagram explain the architecture; real captures would document the build directly. |
| Smart Agri | A hardware photo and Blynk dashboard capture | Current artwork explains the sensing loop. Real images would show the physical prototype and telemetry. |
| Projects without a public demo | Optional short walkthrough recordings or shareable builds | These would let visitors explore the work beyond screenshots when a project can be shared. |
| Current education status | Confirmation when the degree status changes | The portfolio currently uses the supplied ESPRIT degree-in-progress information. |

Testimonials, additional outcome measurements, and internship dates are outside this update at the user's request.

## Verification

- All 21 project routes were checked in the production build at 390px and 1440px: 42 checks, with no horizontal overflow or broken loaded images, three brief panels per project, and a system diagram on every page.
- The main-image viewer was checked for modal focus, Escape, focus return, and body-scroll restoration. Desktop and mobile previews were visually inspected.
- Direct HTTP responses for all 21 project pages contain the brief and project structured data before JavaScript runs. No hydration errors appeared during route checks.
- Both regenerated CV pages were rendered and visually checked. The file has two pages and includes the latest projects.
- Build validation checks 21 projects and 144 referenced project assets, including project downloads.

Pre-rendering improves crawler readability. It does not guarantee access from every external browsing service or override hosting firewall settings.
