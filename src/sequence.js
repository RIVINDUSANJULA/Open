import gsap from 'gsap';

export function playOpeningSequence({ scissors, ribbon, curtains, onComplete }) {
  const tl = gsap.timeline({ onComplete });

  const hint = document.querySelector('#hint');
  if (hint) {
    tl.to(hint, { opacity: 0, duration: 0.35, ease: 'power2.out' }, 0);
  }

  return tl;
}
