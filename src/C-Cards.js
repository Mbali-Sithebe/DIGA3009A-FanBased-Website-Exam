document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const leftBtn = document.getElementById("leftArrow");
  const rightBtn = document.getElementById("rightArrow");

  let characters = [];
  let currentIndex = 0;

  fetch("../src/characters.json")
    .then(res => res.json())
    .then(data => {
      characters = data.filter(c => c.name !== "All Simpsons Characters"); // optional
      createCards();
      initGSAP(); // your GSAP animation function
    })
    .catch(err => console.error(err));

  function createCards() {
    characters.forEach((character, index) => {
      const li = document.createElement("li");
      li.style.backgroundImage = `url(${character.img})`;
      li.dataset.index = index;
      li.addEventListener("click", () => openCharacterPage(index));
      cardsContainer.appendChild(li);
    });
  }

  function openCharacterPage(index) {
    const character = characters[index];
    // open new page or modal with the character info
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
    window.location.href = "character-details.html";
  }

  // Arrow buttons functionality (GSAP scrub/playhead)
  leftBtn.addEventListener("click", () => scrollToOffset(playhead.offset - spacing));
  rightBtn.addEventListener("click", () => scrollToOffset(playhead.offset + spacing));
});
