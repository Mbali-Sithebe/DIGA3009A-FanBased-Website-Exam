const cards = gsap.utils.toArray(".cards li");
let centerIndex = 0;

// Function to show only 3 cards: center + left + right
function updateCards() {
  const total = cards.length;

  cards.forEach((card, i) => {
    card.style.display = "none";
    card.classList.remove("center", "side");
  });

  const prevIndex = (centerIndex - 1 + total) % total;
  const nextIndex = (centerIndex + 1) % total;

  cards[prevIndex].style.display = "block";
  cards[prevIndex].classList.add("side");

  cards[centerIndex].style.display = "block";
  cards[centerIndex].classList.add("center");

  cards[nextIndex].style.display = "block";
  cards[nextIndex].classList.add("side");
}

// Button click functionality
document.getElementById("leftArrow").addEventListener("click", () => {
  centerIndex = (centerIndex - 1 + cards.length) % cards.length;
  updateCards();
});

document.getElementById("rightArrow").addEventListener("click", () => {
  centerIndex = (centerIndex + 1) % cards.length;
  updateCards();
});

// Neon animation on all cards
cards.forEach((card) => {
  gsap.to(card, {
    boxShadow: "0 0 20px #f8db27, 0 0 40px #f8db27, 0 0 60px #f8db27",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
});

// Initialize
updateCards();
