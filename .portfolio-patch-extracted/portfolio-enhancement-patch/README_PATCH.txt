Portfolio Enhancement PowerShell Patch
======================================

Apply from Windows PowerShell in your portfolio project root.

1) Extract this zip anywhere, for example:
   C:\Users\sofie\Desktop\portfolio-enhancement-patch

2) Open PowerShell in your portfolio project folder, for example:
   cd C:\Users\sofie\Desktop\Career\portfolios\portfolio-website

3) Run the patch script:
   powershell -ExecutionPolicy Bypass -File "C:\Users\sofie\Desktop\portfolio-enhancement-patch\apply-portfolio-enhancements.ps1"

Recommended clean install version:
   powershell -ExecutionPolicy Bypass -File "C:\Users\sofie\Desktop\portfolio-enhancement-patch\apply-portfolio-enhancements.ps1" -CleanInstall

4) Test it:
   npm run build
   npm run dev

What this patch changes:
- Enables official Tailwind through @tailwindcss/vite and @import "tailwindcss".
- Removes the forced 1.2s loading screen from App.tsx.
- Lazy-loads the animated background.
- Disables heavy Three.js canvas on mobile and reduced-motion devices.
- Fixes custom cursor requestAnimationFrame cleanup.
- Adds Download CV, GitHub, and LinkedIn quick links to the hero.
- Fixes the scroll arrow target from #skills to #projects.
- Fixes invalid nested links in ProjectCard.
- Adds accessibility labels to the gallery and mobile menu.
- Adds Open Graph/Twitter SEO meta tags.

Rollback:
The script creates a backup folder in your project root named:
.portfolio-patch-backup-YYYYMMDD-HHMMSS

To rollback, copy files from that backup folder back into your project.
