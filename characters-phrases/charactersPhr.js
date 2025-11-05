/********************* FETCHING SIMPSONS CHARACTER PHRASES **************************/

const charactersApiUrl = "https://thesimpsonsapi.com/api/characters";

// Mapping HTML card IDs to character names in the API
const characterMap = {
  homer: "Homer Simpson",
  marge: "Marge Simpson",
  bart: "Bart Simpson",
  lisa: "Lisa Simpson",
  maggie: "Maggie Simpson",
};

// Fetch characters
axios
  .get(charactersApiUrl)
  .then((response) => {
    console.log("Characters raw:", response.data);

    const charactersData =
      response.data.characters || response.data.results || [];

    // Create a dictionary for quick lookup
    const characterLookup = {};
    charactersData.forEach((character) => {
      characterLookup[character.name] = character;
    });

    // Add event listeners for buttons
    document.querySelectorAll(".quote-flip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.character;
        const name = characterMap[key];
        const quoteElement = document.getElementById(`${key}Quote`);

        const charData = characterLookup[name];
        if (charData && charData.phrases && charData.phrases.length > 0) {
          const newPhrase =
            charData.phrases[
              Math.floor(Math.random() * charData.phrases.length)
            ];
          quoteElement.textContent = `"${newPhrase}"`;
        } else {
          quoteElement.textContent = `"No phrases found"`;
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching characters data:", error);
  });

//////////////////// GSAP ANIMATIONS ////////////////////

// Section title animation
gsap.from(".section-title", {
  y: -50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Character cards entrance
gsap.from(".character-card", {
  scale: 0.8,
  opacity: 0,
  duration: 1.3,
  stagger: 0.2,
  delay: 0.5,
  ease: "back.out(1.7)",
});

// Profile image pop effect
gsap.from(".profile-pic", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  delay: 1,
  ease: "elastic.out(1, 0.5)",
});

// Animate quote buttons on click
document.querySelectorAll(".quote-flip-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Rotate the button when clicked
    gsap.fromTo(
      btn,
      { rotationY: 0 },
      { rotationY: 360, duration: 0.6, ease: "power1.inOut" }
    );

    // Animate the quote text
    const quote = btn.parentElement.querySelector(".character-quote");
    gsap.fromTo(
      quote,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.3 }
    );
  });
});

