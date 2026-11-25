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

  const pos = geometry.attributes.position;
  const count = pos.count;
  const restZ = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);

    const normalizedY = (y + height / 2) / height;
    const topTaper = 0.55 + 0.45 * Math.sin((1 - normalizedY) * Math.PI * 0.5);

    const primaryFold = Math.sin((x / width) * Math.PI * 14) * 0.14;
    const secondaryRipple = Math.sin((x / width) * Math.PI * 28 + 0.4) * 0.04;
    const z = (primaryFold + secondaryRipple) * topTaper;

    pos.setZ(i, z);
    restZ[i] = z;
  }

  geometry.userData.restZ = restZ;
  pos.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
}

export function createCurtains(scene, camera) {
  return {};
}
