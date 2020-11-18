gsap.registerPlugin(ScrollTrigger);

function initParallax() {
  gsap.utils.toArray(".col--2").forEach((section, i) => {
    section.bg = section.querySelector(".bg");

    // Give the backgrounds some random images

    // Do the parallax effect on each section
    if (i) {
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
        },
      });
    }

    // the first image should be positioned against the top. Use px on the animating part to work with GSAP.
    else {
      section.bg.style.backgroundPosition = "50% 0px";

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
}

function initAnimation() {
  let tl = gsap.timeline();
  // gsap.from("#intro--title", {
  //   x: -100,
  //   opacity: 0,
  //   ease: "power4",
  //   duration: 3,
  // });
  gsap.to("#intro--title", {
    duration: 2,
    x: -300,
    duration: 2,
    scrollTrigger: {
      trigger: "#intro",
      start: "bottom 90%",
      end: "bottom top",
      markers: true,
      scrub: true,
    },
  });
}

// function initSnap() {
//   gsap.to(".col"),
//     {
//       snap: {
//         snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
//         duration: 1,
//         ease: "power4.inOut",
//       },
//     };
// }

initParallax();
initAnimation();
