/***************************Adaptation Page GSAP ***************************/

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined") {
    gsap.set("#textInfo h2, #textInfo p, #movieTrailer", { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to("#textInfo h2, #textInfo p", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      ease: "power2.out",
    });

    tl.to(
      "#movieTrailer",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }
});
