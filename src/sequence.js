import gsap from 'gsap';

export function playOpeningSequence({ scissors, ribbon, curtains, onComplete }) {
  const tl = gsap.timeline({ onComplete });
  return tl;
}
