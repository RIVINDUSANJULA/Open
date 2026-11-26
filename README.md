# Grand Opening — Rivindu Sanjula

A high-fidelity Three.js realistic red velvet curtain and ribbon-cutting ceremonial launch experience that reveals [localhost:3000](http://localhost:3000).

## Tech Stack

- **Bundler:** Vite (Vanilla JavaScript)
- **3D Graphics & PBR Rendering:** Three.js
- **Choreography & Motion:** GSAP
- **Sound Design:** Web Audio API (Synthesized procedural zero-asset audio)

## Features

- **Realistic Velvet Curtains:** Physical material (`MeshPhysicalMaterial`) with sheen, custom layered procedural pleats, resting folds, and responsive wave billow on opening.
- **Ceremonial Satin Ribbon:** Champagne-gold satin ribbon with natural tension sag, catenary curvature, and split gravity fall physics.
- **Interactive 3D Scissors:** Steel and gold ceremonial scissors with idle hover bob, raycaster detection, custom hit bounds, cursor feedback, and keyboard accessibility (`Enter` / `Space`).
- **Theater Atmosphere:** ACESFilmic tone mapping, soft PCF shadows, overhead theater spotlight, ambient warmth, and dual rim lighting.
- **Synthesized Audio:** Zero-asset Web Audio synthesis producing a metallic snip click and heavy velvet slide whoosh.
- **Seamless Reveal & Redirect:** Dynamic curtain draw revealing the underlying site with pointer-event handover and redirect to live portfolio.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server (served at `http://localhost:3000`):

```bash
npm run dev
```

### Production Build

```bash
npm run build
```
