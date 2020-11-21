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
        duration: 2.5,
        delay: i * 0.2,
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
        delay: 3.0,
        duration: 0.5,
        fill: "#FEC9C9",
      }
    );
  }
}

function initHeroAnimate() {

}

initTextAnimate();
