/**
 * Copyright (c) 2026 Rivindu Sanjula (https://github.com/RIVINDUSANJULA)
 * SPDX-License-Identifier: Apache-2.0
 *
 * This file is part of Three.js Curtain Reveal.
 * Removal or alteration of this copyright notice violates the license terms.
 */

import './style.css';
import { scene, camera, renderOnce, startLoop } from './scene.js';
import { setupLights } from './lights.js';
import { createCurtains } from './curtains.js';
import { createRibbon } from './ribbon.js';
import { createScissors } from './scissors.js';
import { playOpeningSequence } from './sequence.js';

setupLights(scene);
const curtains = createCurtains(scene, camera);
const ribbon = createRibbon(scene, camera);

const scissors = createScissors(scene, camera, () => {
  playOpeningSequence({
    scissors,
    ribbon,
    curtains,
    onComplete: () => {
      // Target destination after curtain animation completes
      window.location.href = 'http://localhost:3000';
    },
  });
});

renderOnce();

const canvas = document.querySelector('#webgl-canvas');
requestAnimationFrame(() => {
  canvas?.classList.add('is-ready');
});

startLoop((elapsed) => {
  curtains.update(elapsed);
  ribbon.update(elapsed);
  scissors.update(elapsed);
});
