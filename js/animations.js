function initTextAnimate() {
  const logo = document.querySelectorAll("#headline path");
  let max = 80;
  let min = -80;
  let tl = gsap.timeline();
  for (let i = 0; i < logo.length; i++) {
    let logoLength = logo[i].getTotalLength();

    gsap.fromTo(
      logo[i],
      {
        strokeDasharray: logoLength,
        strokeDashoffset: logoLength,
        scale: 1.5,
        // y: Math.floor(Math.random() * (max - min + 1) + min),
      },
      // TO
      {
        duration: 1.0,
        delay: i * 0.1,
        y: 0,
        scale: 1,
        strokeDashoffset: 0,
        ease: "power4",
      }
    );
    gsap.fromTo(
      logo,
      {
        fill: "transparent",
      },
      {
        delay: 1.5,
        duration: 0.5,
        fill: "#FEC9C9",
      }
    );
  }
}

function initHeroAnimate() {
  const hero = document.querySelector(".hero");
  const slider = document.querySelector(".slider");

  const tl = gsap.timeline();

  tl.fromTo(
    hero,
    {
      height: "0%",
    },
    // TO
    {
      duration: 1,
      ease: "power2.inOut",
      height: "80%",
    }
  );

  tl.fromTo(
    hero,
    { width: "100%" },
    // TO
    {
      duration: 1.2,
      width: "80%",
      ease: "power2.inOut",
    }
  );

  tl.fromTo(
    slider,
    {
      x: "-100%",
    },
    // TO
    {
      duration: 1.2,
      x: "0%",
      ease: "power2.inOut",
    },
    "-=1.2"
  );
}

function initColAnimate(width) {
  const col = document.querySelectorAll(".col--1");
  for (let i = 0; i < col.length; i++) {
    gsap.fromTo(
      col[i],
      {
        width: "100vw",
      },
      {
        duration: 1,
        ease: "power2.inOut",
        width: width,
        scrollTrigger: {
          trigger: col[i],
          start: "top 40%",
        },
      }
    );
  }
}
initColAnimate("50vw");
ScrollTrigger.matchMedia({
  "(max-width: 768px)": function () {
    initColAnimate("80vw");
  }});

initHeroAnimate();
initTextAnimate();
