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

  const rightGeometry = new THREE.PlaneGeometry(halfWidth, ribbonHeight, 48, 4);
  rightGeometry.translate(halfWidth / 2, 0, 0);

  const geometries = [leftGeometry, rightGeometry];
  for (const geom of geometries) {
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      const u = Math.min(1, Math.abs(x) / halfWidth);
      const sag = -0.04 * (1 - u * u);
      const ripple = Math.sin(x * 6.0) * 0.008;

      pos.setY(i, y + sag);
      pos.setZ(i, z + ripple);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
    geom.userData.basePositions = new Float32Array(pos.array);
  }

  const leftRibbon = new THREE.Mesh(leftGeometry, satinMaterial);
  leftRibbon.castShadow = true;
  leftRibbon.receiveShadow = true;

  const rightRibbon = new THREE.Mesh(rightGeometry, satinMaterial);
  rightRibbon.castShadow = true;
  rightRibbon.receiveShadow = true;

  const ribbonGroup = new THREE.Group();
  ribbonGroup.add(leftRibbon);
  ribbonGroup.add(rightRibbon);
  ribbonGroup.position.set(0, 0, 0.65);
  scene.add(ribbonGroup);

  return { group: ribbonGroup, leftRibbon, rightRibbon, totalWidth, halfWidth, ribbonHeight };
}
