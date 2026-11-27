/**
 * Copyright (c) 2026 Rivindu Sanjula (https://github.com/RIVINDUSANJULA)
 * SPDX-License-Identifier: Apache-2.0
 *
 * This file is part of Three.js Curtain Reveal.
 * Removal or alteration of this copyright notice violates the license terms.
 */

import * as THREE from 'three';

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, window.innerWidth < window.innerHeight ? 6.2 : 5);
scene.add(camera);

const canvas = document.querySelector('#webgl-canvas');
export const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.position.z = window.innerWidth < window.innerHeight ? 6.2 : 5;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
let rafId = null;

export function renderOnce() {
  renderer.render(scene, camera);
}

export function startLoop(onTick) {
  function loop() {
    rafId = requestAnimationFrame(loop);
    const elapsed = clock.getElapsedTime();
    const delta = clock.getDelta();
    onTick?.(elapsed, delta);
    renderer.render(scene, camera);
  }
  rafId = requestAnimationFrame(loop);
}

export function stopLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}
