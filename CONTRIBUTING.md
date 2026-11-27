# Contributing Guidelines

Thank you for your interest in contributing to Three.js Curtain Reveal. Follow these instructions to submit bug fixes, improvements, and documentation updates.

## Development Workflow

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/threejs-curtain-reveal.git
   cd threejs-curtain-reveal
   ```
3. Create a descriptive branch for your changes:
   ```bash
   git checkout -b fix/your-change
   ```
   or
   ```bash
   git checkout -b feat/your-feature
   ```

## Commit Guidelines

- Keep commits small, isolated, and focused on a single change.
- Write clear, lowercase, descriptive commit messages describing what was changed and why.
- Avoid combining unrelated modifications, refactors, or dependency upgrades into a single commit.

## Local Testing and Validation

Before submitting a Pull Request, verify that your changes compile without errors:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Test the development server:
   ```bash
   npm run dev
   ```
   Confirm the application runs at `http://localhost:5173/` without runtime console errors.
3. Validate the production build:
   ```bash
   npm run build
   ```
   Ensure the build passes cleanly with zero errors.

## Submitting a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin fix/your-change
   ```
2. Open a Pull Request against the `main` branch of this repository.
3. Describe the change clearly in the Pull Request description, detailing the motivation and testing performed.

## Licensing of Contributions

By submitting a Pull Request or contributing code, documentation, or assets to this project, you explicitly agree that your contributions are licensed under the terms of the Apache License, Version 2.0, as set forth in the LICENSE file of this repository, with original author attribution preserved according to the NOTICE file.
