gsap.registerPlugin(ScrollTrigger);

gsap.from("#plane", {
  duration: 3,
  x: "-50vw",
  ease: "linear",
  ScrollTrigger: {
    trigger: "#plane",
    markers: true,
  },
});