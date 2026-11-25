import * as THREE from 'three';

export function getViewportSizeAtZ(camera, z = 0) {
  const distance = Math.abs(camera.position.z - z);
  const vFov = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(vFov / 2) * distance;
  const width = height * camera.aspect;
  return { width, height };
}

export function createVelvetMaterial() {
  return new THREE.MeshPhysicalMaterial({
    color: 0x7a0914,
    roughness: 0.88,
    metalness: 0.04,
    sheen: 1.0,
    sheenRoughness: 0.55,
    sheenColor: new THREE.Color(0xd93848),
    side: THREE.DoubleSide,
  });
}

export function createCurtainGeometry(width, height) {
  const geometry = new THREE.PlaneGeometry(width, height, 64, 48);
  geometry.userData.basePositions = new Float32Array(geometry.attributes.position.array);
  return geometry;
}

export function createCurtains(scene, camera) {
  return {};
}
