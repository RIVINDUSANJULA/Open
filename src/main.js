import './style.css';
import { scene, camera, startLoop } from './scene.js';
import { setupLights } from './lights.js';
import { createCurtains } from './curtains.js';

setupLights(scene);
const curtains = createCurtains(scene, camera);

startLoop((elapsed) => {
  curtains.update(elapsed);
});
