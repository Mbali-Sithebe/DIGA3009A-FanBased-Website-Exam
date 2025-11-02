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

//2. Form Validation for Newsletter Subscription

const emailInput = document.querySelector(".newsletter-input-wrapper input");
const subscribeBtn = document.getElementById("subBtn");

// Function to show popup message
function showPopup(message, type) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = `popup-message ${type}`;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 10);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 300);
  }, 2500);
}

// Real-time validation feedback
emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailInput.style.border = "2px solid #ccc";
  } else if (!validEmail.test(emailValue)) {
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "2px solid #0392dd";
  }
});

// Click event for Subscribe button
subscribeBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showPopup("Please enter your email address.", "error");
  } else if (!validEmail.test(emailValue)) {
    showPopup("Invalid email address. Please check and try again.", "error");
  } else {
    showPopup("You have successfully subscribed to our community!", "success");
    emailInput.value = ""; // clear input after success
    emailInput.style.border = "2px solid #ccc";
  }
});

// Watch Episodes Button Functionality
const watchBtn = document.getElementById("watchEpisodesBtn");

watchBtn.addEventListener("click", () => {
  window.location.href = "EpisodesPage/episodes.html";
});

// Explore Characters Phrases Button Functionality
document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("exploreQuotesBtn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "../CharactersPhrases/charactersPhr.html";
    });
  }
});

// Episodes Page - Fetch and Display Episodes Using API
