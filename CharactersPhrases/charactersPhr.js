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
