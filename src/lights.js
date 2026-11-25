import * as THREE from 'three';

export function setupLights(scene) {
  const ambientLight = new THREE.AmbientLight(0x2a1414, 0.45);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffe8c8, 0x1a0606, 0.4);
  scene.add(hemiLight);

  const spotLight = new THREE.SpotLight(0xfff1dc, 45, 25, Math.PI / 4.5, 0.55, 1.5);
  spotLight.position.set(0, 4.8, 5.5);
  spotLight.target.position.set(0, 0, 0);
  scene.add(spotLight);
  scene.add(spotLight.target);

  return { ambientLight, hemiLight, spotLight };
}
