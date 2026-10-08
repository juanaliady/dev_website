# Agent Guidelines

This document defines general guidelines for any agent working on this project.

## Project Overview

This repository is a personal portfolio website (static site) containing HTML, CSS,
JS, and PDF assets. There is no build system, framework, or package manager.

## Repository Layout

- `index.html` — landing page
- `inner-page.html` — generic inner page template
- `portfolio-details.html` — portfolio item detail template
- `resume.html` — resume/CV page
- `assets/` — CSS, JS, images, vendor libraries
- `forms/` — form handling scripts (e.g. PHP email handlers)
- `docs/` — project documentation

## Conventions

- Pure static HTML/CSS/JS. Do not introduce build tools, bundlers, or frameworks.
- Keep all pages visually consistent (shared header/footer/styles).
- Edit existing files; do not duplicate page templates.
- Do not modify the PDF or Google verification files.
- Preserve existing vendor libraries under `assets/`.

## Environment

- OS: Windows
- Shell: PowerShell
- No `npm`, `pip`, or compiler toolchain is expected.

## Tasks

1. Understand the request, then inspect the relevant files before editing.
2. Make minimal, targeted edits.
3. Verify changes by opening the affected HTML in a browser or by visual inspection.
4. Never commit unless explicitly asked.

## Testing

There is no automated test suite. Verification is manual: open the page in a
browser and confirm layout and functionality.
