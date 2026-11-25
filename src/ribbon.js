import * as THREE from 'three';

export function getVisibleWidthAtZ(camera, z) {
  const distance = Math.abs(camera.position.z - z);
  const vFov = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  return height * camera.aspect;
}

export function createSatinMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    roughness: 0.32,
    metalness: 0.25,
    clearcoat: 0.35,
    clearcoatRoughness: 0.25,
    sheen: 0.9,
    sheenRoughness: 0.35,
    sheenColor: new THREE.Color(0xfff4cc),
    side: THREE.DoubleSide,
  });
}

export function createRibbon(scene, camera) {
  return {};
}
