param(
  [switch]$CleanInstall
)

$ErrorActionPreference = "Stop"

$PatchRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = (Get-Location).Path
$PatchFiles = Join-Path $PatchRoot "patch-files"

function Write-Step($Message) {
  Write-Host "[portfolio patch] $Message" -ForegroundColor Cyan
}

function Ensure-Path($Path) {
  if (!(Test-Path $Path)) {
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
  }
}

if (!(Test-Path (Join-Path $ProjectRoot "package.json")) -or !(Test-Path (Join-Path $ProjectRoot "src"))) {
  throw "Run this script from the root of your portfolio project, where package.json and src/ exist."
}

if (!(Test-Path $PatchFiles)) {
  throw "Missing patch-files folder. Keep apply-portfolio-enhancements.ps1 next to the patch-files folder."
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupDir = Join-Path $ProjectRoot ".portfolio-patch-backup-$timestamp"
Ensure-Path $backupDir

$files = @(
  "vite.config.ts",
  "index.html",
  "src\App.tsx",
  "src\index.css",
  "src\components\Hero.tsx",
  "src\components\CursorFollower.tsx",
  "src\components\AnimatedBackground.tsx",
  "src\components\Navbar.tsx",
  "src\components\ProjectCard.tsx",
  "src\components\ImageGallery.tsx"
)

Write-Step "Backing up files to $backupDir"
foreach ($relative in $files) {
  $target = Join-Path $ProjectRoot $relative
  if (Test-Path $target) {
    $backupTarget = Join-Path $backupDir $relative
    Ensure-Path (Split-Path $backupTarget -Parent)
    Copy-Item $target $backupTarget -Force
  }
}

Write-Step "Applying portfolio improvements"
foreach ($relative in $files) {
  $source = Join-Path $PatchFiles $relative
  $target = Join-Path $ProjectRoot $relative

  if (!(Test-Path $source)) {
    throw "Patch file missing: $source"
  }

  Ensure-Path (Split-Path $target -Parent)
  Copy-Item $source $target -Force
  Write-Host "  updated $relative"
}

if ($CleanInstall) {
  Write-Step "Removing old generated folders"
  foreach ($folder in @("node_modules", "dist")) {
    $path = Join-Path $ProjectRoot $folder
    if (Test-Path $path) {
      Remove-Item $path -Recurse -Force
      Write-Host "  removed $folder"
    }
  }

  Write-Step "Installing dependencies with npm install"
  npm install
}

Write-Step "Patch applied successfully"
Write-Host ""
Write-Host "Next commands:" -ForegroundColor Yellow
if (!$CleanInstall) {
  Write-Host "  npm install"
}
Write-Host "  npm run build"
Write-Host "  npm run dev"
Write-Host ""
Write-Host "Backup folder: $backupDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "What changed:" -ForegroundColor Yellow
Write-Host "  - Enabled the official Tailwind Vite plugin and Tailwind import"
Write-Host "  - Removed the forced loading screen from App.tsx"
Write-Host "  - Lazy-loaded the animated background"
Write-Host "  - Disabled heavy Three.js background on mobile/reduced-motion devices"
Write-Host "  - Fixed the cursor animation cleanup"
Write-Host "  - Added hero CV/GitHub/LinkedIn quick links"
Write-Host "  - Fixed the hero scroll arrow to go to Projects"
Write-Host "  - Fixed nested-link HTML in project cards"
Write-Host "  - Added gallery/mobile-menu accessibility labels"
Write-Host "  - Added social preview/SEO meta tags"
