import './style.css';
import { scene, camera, startLoop } from './scene.js';
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
      window.location.href = 'http://localhost:3000';
    },
  });
});

startLoop((elapsed) => {
  curtains.update(elapsed);
  ribbon.update(elapsed);
  scissors.update(elapsed);
});
