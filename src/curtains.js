import * as THREE from 'three';

export function getViewportSizeAtZ(camera, z = 0) {
  const distance = Math.abs(camera.position.z - z);
  const vFov = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  const width = height * camera.aspect;
  return { width, height };
}

export function createCurtains(scene, camera) {
  return {};
}
