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
function initTextAnime() {
  const logo = document.querySelectorAll('#logo path');
  let max = 80;
  let min = -80;
  for (let i = 0; i<logo.length; i++) {
    let logoLength = logo[i].getTotalLength();

    gsap.fromTo(logo[i], {
      strokeDasharray: logoLength,
      strokeDashoffset: logoLength,
      scale: 1.5,
      y: Math.floor(Math.random() * (max - min + 1) + min),
    },
    // TO
    {
      y: 0,
      scale: 1,
      strokeDashoffset: 0,
      fill: "#FEC9C9",
      ease: "power1",
      scrollTrigger: {          
        trigger: "#intro",
        scrub: 1,
        start: "bottom bottom",
        end: "200% top",          
        markers: true,
        pin: true,
      }
    });
  }
}

initTextAnime();
initParallax();
