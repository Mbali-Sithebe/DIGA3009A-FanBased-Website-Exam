//API IMPLEMENTATION CODE EXAMPLE:

//1. Calling the APIs
let charactersApiUrl = "https://thesimpsonsapi.com/api/characters";
let episodesApiUrl = "https://thesimpsonsapi.com/api/episodes";

//2.Characters Change Button Functionality
document.addEventListener("DOMContentLoaded", () => {
  let characters = [];
  let currentIndex = 0;

  //Characters Images Sizes
  const customSizes = {
    "All Simpsons Characters": "1000px",
  };

  const imgEl = document.querySelector("#characterImage img");
  const nameEl = document.querySelector("#characterBio h1");
  const bioEl = document.querySelector("#characterBio p");
  const leftBtn = document.querySelector("#leftArrow");
  const rightBtn = document.querySelector("#rightArrow");

  fetch("../src/characters.json")
    .then((res) => res.json())
    .then((data) => {
      characters = data;
      showCharacter(currentIndex);
    })
    .catch((err) => console.error("Error loading characters JSON:", err));


  //Function 
  function showCharacter(index) {
    const character = characters[index];
    if (!character) return;

    imgEl.src = character.img;
    imgEl.alt = character.name;

    imgEl.style.width = customSizes[character.name] || "400px";
    imgEl.style.height = "auto";

    nameEl.textContent = character.name;
    bioEl.textContent = character.bio;

    const characterContent = document.getElementById("characterContent");
    if (character.name === "All Simpsons Characters") {
      characterContent.classList.add("special-layout");
    } else {
      characterContent.classList.remove("special-layout");
    }
  }

  //Buttons
  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    showCharacter(currentIndex);
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    showCharacter(currentIndex);
  });
});
