gsap.registerPlugin(ScrollTrigger);

gsap.to("#row1", {
  scrollTrigger: {
    scrub: true
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * 
target.dataset.speed,
  ease: "none"

});