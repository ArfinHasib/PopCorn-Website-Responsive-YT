gsap.set('.hero_title', {
   y: '-200%',
});

gsap.to('.hero_title', {
   y: 0,
   duration: 2,
   ease: 'bounce.out',
});

gsap.set('.avatar_circle', {
   x: '-300%',
});

gsap.to('.avatar_circle', {
   x: 0,
   stagger: 0.08,
   duration: 1,
});

gsap.set('.hero_content-left', {
   x: '-300%',
});

gsap.to('.hero_content-left', {
   x: 0,
   duration: 1,
});

gsap.set('.hero_content-right', {
   x: '300%',
});

gsap.to('.hero_content-right', {
   x: 0,
   duration: 1,
});

gsap.set('.hero_img', {
   y: '100%',
});

gsap.to('.hero_img', {
   y: 0,
   ease: 'power2.out',
   duration: 0.8,
});
