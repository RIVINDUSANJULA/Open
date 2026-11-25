import * as THREE from 'three';

export function setupLights(scene) {
  const ambientLight = new THREE.AmbientLight(0x2a1414, 0.45);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffe8c8, 0x1a0606, 0.4);
  scene.add(hemiLight);

  return { ambientLight, hemiLight };
}
