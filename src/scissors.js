import * as THREE from 'three';

export const steelMaterial = new THREE.MeshStandardMaterial({
  color: 0xe6e8ec,
  metalness: 0.92,
  roughness: 0.18,
});

export const goldMaterial = new THREE.MeshStandardMaterial({
  color: 0xd4af37,
  metalness: 0.88,
  roughness: 0.24,
});

export function createScissors(scene, camera, onSnip) {
  return {};
}
