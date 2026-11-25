import './style.css';
import { scene, startLoop } from './scene.js';
import { setupLights } from './lights.js';

setupLights(scene);
startLoop();
