//-------------------------------- About Page Animations --------------------------------//
//1. Simpsons Logo Animation

//2 Box Information Animation
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".publishing-achie");
  const counters = document.querySelectorAll(".counter");

  boxes.forEach(box => {
    gsap.set(box, { opacity: 0, scale: 0, y: 50 });
  });

  // 3. Animation Box Pop-in Effect 
  gsap.timeline()
    .to(boxes[0], {
      duration: 0.8,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "back.out(1.7)",
    })
    .to(boxes[1], {
      duration: 0.8,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "elastic.out(1, 0.4)", 
    }, "+=0.2")
    .to(boxes[2], {
      duration: 0.8,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "back.out(1.5)",
    }, "+=0.2")
    .add(() => {
      // After all boxes are displayed, animate counters
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        counter.innerText = "0 +";

        gsap.to(counter, {
          innerText: target,
          duration: 3,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            const current = Math.floor(this.targets()[0].innerText);
            this.targets()[0].innerText = current.toLocaleString() + " +";
          },
        });
      });
    });
});


//4. Text Animation
gsap.from("#textHolder h1", {
  duration: 1.8, 
  opacity: 0, 
  y: -30, 
  ease: "power2.out",
});

gsap.from("#textHolder p", {
  duration: 1.8,
  opacity: 0,
  y: 20, 
  delay: 0.8, 
  ease: "power2.out",
});




