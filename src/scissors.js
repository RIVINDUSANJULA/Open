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

export function createBladeGeometry() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.035);
  shape.lineTo(-0.15, -0.03);
  shape.lineTo(-0.7, -0.005);
  shape.lineTo(-0.78, 0.0);
  shape.lineTo(-0.65, 0.03);
  shape.lineTo(-0.1, 0.04);
  shape.lineTo(0, 0.035);
  shape.closePath();

  const extrudeSettings = {
    depth: 0.025,
    bevelEnabled: true,
    bevelThickness: 0.008,
    bevelSize: 0.008,
    bevelSegments: 2,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.translate(0, 0, -0.025 / 2);
  return geometry;
}

export function createScissors(scene, camera, onSnip) {
  return {};
}
