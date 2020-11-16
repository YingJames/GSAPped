// gsap.to(("#plane"), {
//   duration: 2, 
//   x: 300, 
//   backgroundColor: "#560563",
//   borderRadius: "20%",
//   border: "5px solid white",
//   ease: "circ",
// });
gsap.set("#plane, #planet", {
  transformOrigin: "50% 50%",
  border: "5px solid black",
});

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({scrollTrigger:{
  trigger: "#planet",
  markers: true,
  start: "top 75%",
  end: "bottom 25%",

  toggleActions: "restart pause reverse reset"
}});


tl.to("#plane", {
  duration: 1,
  ease: "linear",
  rotation: 360,
});

tl.to("#planet", {
  duration: 1,
  ease: "linear",
  rotation: 360,
});
