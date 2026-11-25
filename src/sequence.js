import gsap from 'gsap';
import { playSnipSound, playCurtainWhoosh } from './audio.js';
import { stopLoop } from './scene.js';

export function playOpeningSequence({ scissors, ribbon, curtains, onComplete }) {
  const tl = gsap.timeline({ onComplete });

  const hint = document.querySelector('#hint');
  if (hint) {
    tl.to(hint, { opacity: 0, duration: 0.35, ease: 'power2.out' }, 0);
  }

  tl.to(
    scissors.topHalf.rotation,
    { z: 0, duration: 0.22, ease: 'power3.in' },
    0
  );
  tl.to(
    scissors.bottomHalf.rotation,
    { z: 0, duration: 0.22, ease: 'power3.in' },
    0
  );

  tl.call(() => {
    ribbon.setCut(true);
    playSnipSound();
  }, null, 0.22);

  tl.to(
    ribbon.leftRibbon.position,
    { y: -4.5, x: -0.6, z: 0.9, duration: 1.1, ease: 'power2.in' },
    0.22
  );
  tl.to(
    ribbon.leftRibbon.rotation,
    { z: 0.45, x: 0.6, duration: 1.1, ease: 'power2.in' },
    0.22
  );

  tl.to(
    ribbon.rightRibbon.position,
    { y: -4.5, x: 0.6, z: 0.9, duration: 1.1, ease: 'power2.in' },
    0.22
  );
  tl.to(
    ribbon.rightRibbon.rotation,
    { z: -0.45, x: -0.6, duration: 1.1, ease: 'power2.in' },
    0.22
  );

  tl.to(
    scissors.group.position,
    {
      x: 2.2,
      y: -2.8,
      z: 1.5,
      duration: 0.65,
      ease: 'power2.in',
      onComplete: () => {
        scissors.group.visible = false;
      },
    },
    0.30
  );
  tl.to(
    scissors.group.rotation,
    {
      z: -0.4,
      x: 0.2,
      duration: 0.65,
      ease: 'power2.in',
    },
    0.30
  );

  const curtainStartTime = 0.67;

  tl.call(() => {
    playCurtainWhoosh();
  }, null, curtainStartTime);

  if (curtains.motionState) {
    tl.to(
      curtains.motionState,
      { pullIntensity: 1.0, duration: 0.8, ease: 'power2.out' },
      curtainStartTime
    );
    tl.to(
      curtains.motionState,
      { pullIntensity: 0, duration: 1.3, ease: 'power2.inOut' },
      curtainStartTime + 0.8
    );
  }

  tl.to(
    curtains.leftCurtain.position,
    {
      x: -curtains.panelWidth * 1.18,
      duration: 2.1,
      ease: 'power3.inOut',
    },
    curtainStartTime
  );
  tl.to(
    curtains.leftCurtain.scale,
    {
      x: 0.28,
      duration: 2.1,
      ease: 'power3.inOut',
    },
    curtainStartTime
  );

  tl.to(
    curtains.rightCurtain.position,
    {
      x: curtains.panelWidth * 1.18,
      duration: 2.1,
      ease: 'power3.inOut',
    },
    curtainStartTime
  );
  tl.to(
    curtains.rightCurtain.scale,
    {
      x: 0.28,
      duration: 2.1,
      ease: 'power3.inOut',
    },
    curtainStartTime
  );

  const canvas = document.querySelector('#webgl-canvas');
  if (canvas) {
    tl.call(() => {
      canvas.style.pointerEvents = 'none';
    }, null, curtainStartTime + 1.8);

    tl.to(
      canvas,
      {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          stopLoop();
          canvas.style.display = 'none';
        },
      },
      curtainStartTime + 2.1
    );
  }

  return tl;
}
