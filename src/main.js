import './style.css';
import { scene, camera, startLoop } from './scene.js';
import { setupLights } from './lights.js';
import { createCurtains } from './curtains.js';
import { createRibbon } from './ribbon.js';

setupLights(scene);
const curtains = createCurtains(scene, camera);
const ribbon = createRibbon(scene, camera);

startLoop((elapsed) => {
  curtains.update(elapsed);
  ribbon.update(elapsed);
});
