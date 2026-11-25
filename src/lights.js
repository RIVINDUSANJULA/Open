import * as THREE from 'three';

export function setupLights(scene) {
  const ambientLight = new THREE.AmbientLight(0x2a1414, 0.45);
  scene.add(ambientLight);

  return { ambientLight };
}
