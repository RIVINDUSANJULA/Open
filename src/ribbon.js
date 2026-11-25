import * as THREE from 'three';

export function getVisibleWidthAtZ(camera, z) {
  const distance = Math.abs(camera.position.z - z);
  const vFov = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  return height * camera.aspect;
}

export function createRibbon(scene, camera) {
  return {};
}
