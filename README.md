# Three.js Curtain Reveal

A Three.js and GSAP red velvet curtain and ribbon-cutting launch screen that opens onto a target web application.

## Demo

<!-- Drag and drop your demo .mp4 or .mov file here on GitHub to render the inline video player -->

## Features

- Procedural pleated red velvet curtains using custom vertex displacement with sheen physical materials.
- Satin ribbon with resting catenary sag, ripple deformation, and two-half gravity fall physics.
- Interactive 3D scissors with raycasting hover detection, invisible tap hitbox, idle floating animation, and keyboard support (Enter and Space keys).
- Procedural Web Audio sound effects (synthesized metallic snip click and velvet slide whoosh) requiring zero external media assets.
- Transparent WebGL reveal over a black backdrop that disconnects the render loop and hands over pointer events to the underlying site.

## Tech Stack

- Vite: Build tool and local development server
- Three.js: 3D scene graph, PBR shaders, lighting, and camera management
- GSAP: Animation timelines and choreography
- Web Audio API: Procedural real-time audio synthesis

## Getting Started

### Prerequisites

Node.js 18.0 or higher and npm.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/RIVINDUSANJULA/threejs-curtain-reveal.git
cd threejs-curtain-reveal
npm install
```

### Development Server

Start the local development server at `http://localhost:5173/`:

```bash
npm run dev
```

### Production Build

Compile the production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Changing the Target URL

1. In `index.html`, update the iframe `src` attribute to your preview URL:
   ```html
   <iframe id="site-frame" src="https://your-domain.com" frameborder="0" allowfullscreen></iframe>
   ```
2. In `src/main.js`, update the post-animation redirect destination in the `onComplete` callback:
   ```javascript
   window.location.href = 'https://your-domain.com';
   ```

### Changing Curtain and Ribbon Colors

- Curtain Material: In `src/curtains.js`, adjust `color` and `sheenColor` in `createVelvetMaterial()`:
  ```javascript
  color: 0x7a0914, // Base velvet color
  sheenColor: new THREE.Color(0xd93848), // Sheen highlight
  ```
- Ribbon Material: In `src/ribbon.js`, adjust `color` and `sheenColor` in `createSatinMaterial()`:
  ```javascript
  color: 0xd4af37, // Ribbon base color
  sheenColor: new THREE.Color(0xfff4cc), // Ribbon sheen highlight
  ```

### Swapping the Favicon

Replace or edit `public/favicon.svg` with your preferred SVG icon.

## Project Structure

```text
├── public/
│   └── favicon.svg
├── src/
│   ├── audio.js        # Web Audio API sound synthesis
│   ├── curtains.js     # Mesh geometry, procedural folds, and velvet material
│   ├── lights.js       # Spotlight, hemisphere, ambient, and rim lights
│   ├── main.js         # Application bootstrap and scene setup
│   ├── ribbon.js       # Satin ribbon mesh and tension sag
│   ├── scene.js        # Three.js scene, camera, renderer, and render loop
│   ├── scissors.js     # 3D scissors model, hit detection, and hover physics
│   ├── sequence.js     # GSAP animation timeline for snip and curtain draw
│   └── style.css       # Core styling and viewport resets
├── CLA.md              # Contributor License Agreement
├── CODE_OF_CONDUCT.md  # Contributor Code of Conduct
├── CONTRIBUTING.md      # Development and contribution guide
├── index.html          # Base HTML template and critical dark styles
├── LICENSE             # Apache License 2.0
├── NOTICE              # Mandatory attribution notice
├── package.json        # Dependencies and build scripts
└── vite.config.js      # Vite server configuration
```

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, testing requirements, and submission processes, review [CLA.md](CLA.md) for licensing terms, and refer to [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

## License and Attribution

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for the complete license text.

- Mandatory Attribution: All uses (personal, educational, or commercial), forks, redistributions, and derivative works must retain attribution to **Rivindu Sanjula** as specified in the [NOTICE](NOTICE) file and preserve all per-file copyright and SPDX headers intact.
- Enforcement and Compliance: Removing copyright notices, altering SPDX headers, or using this codebase without explicit attribution to Rivindu Sanjula terminates all rights granted under the Apache License 2.0, voiding the license and subjecting the unauthorized user to statutory damages, copyright infringement claims, and DMCA takedown actions.
- Contributions: All contributions submitted to this project are governed by the terms in [CONTRIBUTING.md](CONTRIBUTING.md) and require agreement to the [CLA.md](CLA.md) Contributor License Agreement.
