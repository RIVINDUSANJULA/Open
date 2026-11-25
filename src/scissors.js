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

export function createHandleGroup(goldMat = goldMaterial, isUpper = true) {
  const handleGroup = new THREE.Group();

  const shankGeometry = new THREE.CylinderGeometry(0.022, 0.024, 0.32, 16);
  const shank = new THREE.Mesh(shankGeometry, goldMat);
  shank.castShadow = true;
  shank.receiveShadow = true;
  shank.position.set(0.15, isUpper ? 0.06 : -0.06, 0);
  shank.rotation.z = isUpper ? -Math.PI / 5 : Math.PI / 5;
  handleGroup.add(shank);

  const ringGeometry = new THREE.TorusGeometry(0.12, 0.024, 16, 32);
  const ring = new THREE.Mesh(ringGeometry, goldMat);
  ring.castShadow = true;
  ring.receiveShadow = true;
  ring.position.set(0.38, isUpper ? 0.14 : -0.14, 0);
  ring.scale.set(1.15, 0.9, 1.0);
  handleGroup.add(ring);

  return handleGroup;
}

export function createScissors(scene, camera, onSnip) {
  const topHalf = new THREE.Group();
  const topBlade = new THREE.Mesh(createBladeGeometry(), steelMaterial);
  topBlade.castShadow = true;
  topBlade.receiveShadow = true;
  const topHandle = createHandleGroup(goldMaterial, true);
  topHalf.add(topBlade);
  topHalf.add(topHandle);

  const bottomHalf = new THREE.Group();
  const bottomBlade = new THREE.Mesh(createBladeGeometry(), steelMaterial);
  bottomBlade.castShadow = true;
  bottomBlade.receiveShadow = true;
  bottomBlade.scale.y = -1;
  const bottomHandle = createHandleGroup(goldMaterial, false);
  bottomHalf.add(bottomBlade);
  bottomHalf.add(bottomHandle);
  bottomHalf.position.z = -0.03;

  const screwGeometry = new THREE.CylinderGeometry(0.045, 0.045, 0.065, 24);
  screwGeometry.rotateX(Math.PI / 2);
  const pivotScrew = new THREE.Mesh(screwGeometry, goldMaterial);
  pivotScrew.castShadow = true;
  pivotScrew.receiveShadow = true;
  pivotScrew.position.set(0, 0, -0.015);

  const scissorsGroup = new THREE.Group();
  scissorsGroup.add(topHalf);
  scissorsGroup.add(bottomHalf);
  scissorsGroup.add(pivotScrew);

  const hitTarget = new THREE.Mesh(
    new THREE.SphereGeometry(0.75, 16, 16),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hitTarget.position.set(-0.15, 0, 0);
  scissorsGroup.add(hitTarget);

  scissorsGroup.position.set(0.45, -0.05, 0.95);
  scissorsGroup.rotation.set(0.05, -0.12, -0.06);

  topHalf.rotation.z = 0.28;
  bottomHalf.rotation.z = -0.28;

  scene.add(scissorsGroup);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(-999, -999);
  let isHovered = false;
  let hasSnipped = false;

  window.addEventListener('pointermove', (event) => {
    if (hasSnipped) return;
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(hitTarget, false);
    if (intersects.length > 0) {
      if (!isHovered) {
        isHovered = true;
        document.body.style.cursor = 'pointer';
      }
    } else {
      if (isHovered) {
        isHovered = false;
        document.body.style.cursor = 'default';
      }
    }
  });

  return {
    group: scissorsGroup,
    topHalf,
    bottomHalf,
    pivotScrew,
    hitTarget,
    isHovered: () => isHovered,
  };
}
