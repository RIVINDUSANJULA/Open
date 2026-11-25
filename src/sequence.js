import gsap from 'gsap';

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

  tl.call(() => ribbon.setCut(true), null, 0.22);

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

  return tl;
}
