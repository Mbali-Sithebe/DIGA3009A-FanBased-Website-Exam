//-------------------------------- Characters Page Animations --------------------------------//

//1. Simpsons Logo Animation

// 2. Creating SVG Animation For The Character Buttons
const characterButtons = document.querySelectorAll(".character-btn");

characterButtons.forEach((btn) => {
  const circle = btn.querySelector(".circle-start");
  const text = btn.querySelector("text");
  const arrow = btn.querySelector(".arrow");

  const tl = gsap.timeline({ paused: true });

  tl.to(circle, {
    duration: 0.5,
    attr: { width: 240, height: 60, rx: 30, ry: 30 },
    ease: "power4.inOut",
  });

  tl.to(text, { duration: 0.4, fill: "#fff" }, 0);

  if (arrow) {
    tl.to(
      arrow,
      {
        duration: 0.3,
        attr: { points: "30 20 38 30 30 40" },
        ease: "power4.inOut",
      },
      0
    );
  }

  btn.addEventListener("mouseenter", () => tl.play());
  btn.addEventListener("mouseleave", () => tl.reverse());
});

/************************** Characters Page GSAP **************************/

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.set("#textHolder h1, #textHolder p", { opacity: 0, y: -20 });

  // 1. Top Box / Text Entrance
  gsap.from("#textHolder", {
    scrollTrigger: {
      trigger: "#textHolder",
      start: "top 90%",
      toggleActions: "play none none none",
      once: true,
    },
    opacity: 0,
    y: 30,
    scale: 0.98,
    duration: 1.0,
    ease: "power3.out",
    onComplete: () => {
      gsap.to("#textHolder h1, #textHolder p", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power2.out",
      });
    },
  });

  // 2. Character PNGs appearance (sequence animation)

  const characterImgs = document.querySelectorAll(
    ".displayCharacters figure img"
  );

  gsap.from(characterImgs, {
    scrollTrigger: {
      trigger: ".displayCharacters",
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    },
    opacity: 0,
    scale: 0.8,
    y: 25,
    duration: 1.0,
    stagger: 0.2,
    ease: "back.out(1.6)",
  });

  if (characterImgs.length === 0) {
  }
});
