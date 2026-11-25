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
  const totalWidth = getVisibleWidthAtZ(camera, 0.65) * 1.15;
  const halfWidth = totalWidth / 2;
  const ribbonHeight = 0.24;

  const satinMaterial = createSatinMaterial();

  const leftGeometry = new THREE.PlaneGeometry(halfWidth, ribbonHeight, 48, 4);
  leftGeometry.translate(-halfWidth / 2, 0, 0);
  leftGeometry.userData.basePositions = new Float32Array(leftGeometry.attributes.position.array);

  const leftRibbon = new THREE.Mesh(leftGeometry, satinMaterial);
  leftRibbon.castShadow = true;
  leftRibbon.receiveShadow = true;

  const rightGeometry = new THREE.PlaneGeometry(halfWidth, ribbonHeight, 48, 4);
  rightGeometry.translate(halfWidth / 2, 0, 0);
  rightGeometry.userData.basePositions = new Float32Array(rightGeometry.attributes.position.array);

  const rightRibbon = new THREE.Mesh(rightGeometry, satinMaterial);
  rightRibbon.castShadow = true;
  rightRibbon.receiveShadow = true;

  return { leftRibbon, rightRibbon, totalWidth, halfWidth, ribbonHeight };
}
