gsap.registerPlugin(ScrollTrigger);

gsap.to(".row1", {
  scrollTrigger: {
    trigger: ".row1",
    start: "top 100%",
    end: "bottom 0%",
    markers: true,
    scrub: true
  },
  y: (i, target) => -ScrollTrigger.maxScroll(window) * 
target.dataset.speed,
  ease: "none"

});