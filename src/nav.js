// 1. Generating Navigation Bar

// Array list of the nav menu
const menuItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "about/about.html" },
  { name: "Characters", href: "characters/characters.html" },
  { name: "Episodes", href: "episodes/episodes.html" },
  { name: "Adaptation", href: "adaptation/adaptation.html" },
  { name: "CharactersPhrases", href: "characters-phrases/charactersPhr.html" }, // hidden page
];

// Function to generate the nav menu
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container");
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  for (let menuItem of menuItems) {
    // Skip CharactersPhrases — keep it hidden from the nav
    if (menuItem.name === "CharactersPhrases") continue;

    const li = document.createElement("li");
    li.classList.add("menu-item");

    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;

      // Adjust relative path for subfolders
      let relativeHref = menuItem.href;
      if (
        window.location.pathname.includes("/about/") ||
        window.location.pathname.includes("/characters/") ||
        window.location.pathname.includes("/episodes/") ||
        window.location.pathname.includes("/adaptation/") ||
        window.location.pathname.includes("/characters-phrases/")
      ) {
        relativeHref = "../" + menuItem.href;
      }

      a.setAttribute("href", relativeHref);
      li.appendChild(a);
    } else {
      li.innerText = menuItem.name;
      li.classList.add("active");
    }

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

// Detect current page
const path = window.location.pathname.toLowerCase();
if (path.includes("about")) initialiseMenu("About");
else if (path.includes("characters")) initialiseMenu("Characters");
else if (path.includes("episodes")) initialiseMenu("Episodes");
else if (path.includes("adaptation")) initialiseMenu("Adaptation");
else initialiseMenu("Home");
