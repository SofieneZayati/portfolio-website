#!/usr/bin/env python3
"""
Portfolio patch installer for Windows.

How to use:
  1. Put this file in the root of your portfolio project.
  2. Put portfolio_patch.zip or portfolio-enhancement-patch.zip in the same folder.
  3. Run: py install_patch.py

Optional:
  py install_patch.py --no-clean-install   # do not delete node_modules/dist or npm install
  py install_patch.py --no-build           # apply patch but skip npm run build
  py install_patch.py --dev                # start npm run dev after build
  py install_patch.py --zip my-patch.zip   # use a specific zip file
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path


PATCH_PATTERNS = (
    "portfolio_patch*.zip",
    "portfolio-enhancement-patch*.zip",
    "*portfolio*patch*.zip",
)


def print_step(message: str) -> None:
    print(f"\n[install_patch] {message}")


def print_error(message: str) -> None:
    print(f"\n[install_patch ERROR] {message}", file=sys.stderr)


def project_root() -> Path:
    # Use the folder containing install_patch.py, not the current terminal folder.
    return Path(__file__).resolve().parent


def ensure_project_root(root: Path) -> None:
    missing = []
    if not (root / "package.json").exists():
        missing.append("package.json")
    if not (root / "src").exists():
        missing.append("src/")

    if missing:
        raise RuntimeError(
            "This installer must be placed in your portfolio project root. "
            f"Missing: {', '.join(missing)}\n"
            f"Current installer location: {root}"
        )


def find_patch_zip(root: Path, zip_arg: str | None) -> Path:
    if zip_arg:
        path = Path(zip_arg)
        if not path.is_absolute():
            path = root / path
        if not path.exists():
            raise RuntimeError(f"Patch zip not found: {path}")
        return path.resolve()

    candidates: list[Path] = []
    for pattern in PATCH_PATTERNS:
        candidates.extend(root.glob(pattern))

    # Avoid duplicates and ignore directories.
    unique = sorted(
        {p.resolve() for p in candidates if p.is_file()},
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )

    if not unique:
        raise RuntimeError(
            "No patch zip was found beside install_patch.py.\n"
            "Put the patch zip in the same folder as install_patch.py, then run again.\n"
            "Expected names like: portfolio_patch.zip or portfolio-enhancement-patch.zip"
        )

    return unique[0]


def safe_extract_zip(zip_path: Path, destination: Path) -> None:
    if destination.exists():
        shutil.rmtree(destination)
    destination.mkdir(parents=True, exist_ok=True)

    dest_real = destination.resolve()
    with zipfile.ZipFile(zip_path, "r") as zf:
        for member in zf.infolist():
            member_path = destination / member.filename
            member_real = member_path.resolve()
            if not str(member_real).startswith(str(dest_real)):
                raise RuntimeError(f"Unsafe path inside zip: {member.filename}")
        zf.extractall(destination)


def find_powershell_script(extracted_dir: Path) -> Path:
    scripts = list(extracted_dir.rglob("apply-portfolio-enhancements.ps1"))
    if not scripts:
        found = "\n".join(str(p.relative_to(extracted_dir)) for p in extracted_dir.rglob("*") if p.is_file())
        raise RuntimeError(
            "Could not find apply-portfolio-enhancements.ps1 inside the extracted patch zip.\n"
            f"Files extracted:\n{found or '(none)'}"
        )
    return scripts[0].resolve()


def which_powershell() -> str:
    for command in ("pwsh", "powershell"):
        if shutil.which(command):
            return command
    raise RuntimeError(
        "PowerShell was not found. On Windows, open Windows PowerShell and run this again."
    )


def run_command(command: list[str], cwd: Path) -> None:
    printable = " ".join(f'"{part}"' if " " in part else part for part in command)
    print(f"> {printable}")
    completed = subprocess.run(command, cwd=str(cwd), shell=False)
    if completed.returncode != 0:
        raise RuntimeError(f"Command failed with exit code {completed.returncode}: {printable}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract and apply the portfolio enhancement patch.")
    parser.add_argument("--zip", dest="zip_path", help="Specific patch zip filename/path to use.")
    parser.add_argument(
        "--no-clean-install",
        action="store_true",
        help="Apply patch without deleting node_modules/dist and without npm install.",
    )
    parser.add_argument(
        "--no-build",
        action="store_true",
        help="Skip npm run build after applying the patch.",
    )
    parser.add_argument(
        "--dev",
        action="store_true",
        help="Start npm run dev after patching/building. This keeps the terminal running.",
    )
    args = parser.parse_args()

    root = project_root()

    try:
        print_step(f"Project root: {root}")
        ensure_project_root(root)

        zip_path = find_patch_zip(root, args.zip_path)
        print_step(f"Using patch zip: {zip_path.name}")

        extracted_dir = root / ".portfolio-patch-extracted"
        print_step(f"Extracting patch to: {extracted_dir.name}")
        safe_extract_zip(zip_path, extracted_dir)

        ps_script = find_powershell_script(extracted_dir)
        print_step(f"Found PowerShell patch script: {ps_script.relative_to(root)}")

        ps = which_powershell()
        patch_command = [ps]
        if ps == "powershell":
            patch_command += ["-ExecutionPolicy", "Bypass"]
        patch_command += ["-File", str(ps_script)]

        if not args.no_clean_install:
            patch_command.append("-CleanInstall")

        print_step("Applying patch")
        run_command(patch_command, root)

        if not args.no_build:
            print_step("Building project")
            run_command(["npm", "run", "build"], root)

        if args.dev:
            print_step("Starting dev server")
            print("Press Ctrl+C to stop the dev server.")
            run_command(["npm", "run", "dev"], root)
        else:
            print_step("Done")
            print("Patch installed successfully.")
            print("To preview the site, run:")
            print("  npm run dev")

        return 0

    except Exception as exc:
        print_error(str(exc))
        print("\nCommon fixes:")
        print("  - Make sure install_patch.py is inside your portfolio project root.")
        print("  - Make sure the patch zip is in the same folder as install_patch.py.")
        print("  - Run from PowerShell with: py install_patch.py")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
