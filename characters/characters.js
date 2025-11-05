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
