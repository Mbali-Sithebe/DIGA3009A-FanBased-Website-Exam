//-------------------------------- Homepage Animations --------------------------------//

//1. Simpsons Logo Animation
window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // D'OH rotation
  tl.fromTo(
    ".top-text",
    { rotationY: 0, opacity: 0, scale: 0.8 },
    { rotationY: 360, opacity: 1, scale: 1.03, duration: 1.4 }
  );

  // SPRINGFIELD rotation
  tl.fromTo(
    ".bottom-text",
    { rotationX: 0, opacity: 0, scale: 0.8 },
    { rotationX: 360, opacity: 1, scale: 1.03, duration: 1.6 },
    "-=0.6"
  );

  tl.to(".logo", { scale: 1.3, duration: 0.2, ease: "power1.inOut" });
  tl.to(".logo", { scale: 1, duration: 0.2, ease: "back.out(2)" });

  //2. Creating SVG Animation For The Buttons
  const buttons = document.querySelectorAll(".svg-btn");

  buttons.forEach((btn) => {
    const circle = btn.querySelector(".circle-start");
    const text = btn.querySelector("text");
    const arrow = btn.querySelector(".arrow");

    const tl = gsap.timeline({ paused: true });

    tl.to(circle, {
      duration: 0.5,
      attr: { width: 240, height: 50, rx: 25, ry: 25 },
      ease: "power4.inOut",
    });

    tl.to(text, { duration: 0.4, fill: "#fff" }, 0);

    tl.to(
      arrow,
      {
        duration: 0.3,
        attr: { points: "28 20 36 25 28 30" },
        ease: "power4.inOut",
      },
      0
    );

    btn.addEventListener("mouseenter", () => tl.play());
    btn.addEventListener("mouseleave", () => tl.reverse());
  });

  //3 Rotation Button Animation
  const circle = document.querySelector(".border-svg circle");

  circle.style.strokeDasharray = 145;
  circle.style.strokeDashoffset = 145;

  gsap.to(circle, {
    strokeDashoffset: 0,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "linear",
  });

  //4. Page Flip to Newsletter Page
  const rotationBtn = document.getElementById("rotationBtn");
  const frontContent = document.querySelector(".flip-card-front");
  const backContent = document.querySelector(".flip-card-back");
  const frontImage = document.getElementById("image");

  let flipped = false;

  backContent.style.display = "none";

  rotationBtn.addEventListener("click", () => {
    if (!flipped) {
      // Hide front content and image
      frontContent.style.display = "none";
      if (frontImage) frontImage.style.display = "none";

      // Show newsletter
      backContent.style.display = "flex";

      flipped = true;
    } else {
      // Hide newsletter
      backContent.style.display = "none";

      // Show front content and image
      frontContent.style.display = "flex";
      if (frontImage) frontImage.style.display = "flex";

      flipped = false;
    }
  });

  //5. Text Animation Paragraph
  gsap.from("#textContent p", {
    x: 150,
    opacity: 0,
    duration: 5,
    ease: "power3.out",
    delay: 0.4,
  });
});
