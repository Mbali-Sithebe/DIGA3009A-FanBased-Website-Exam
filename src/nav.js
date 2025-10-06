// 1. Generating Navigation Bar

// Array list of the nav menu
const menuItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "AboutPage/about.html" },
  { name: "Characters", href: "CharactersPage/characters.html" },
  { name: "Episodes", href: "EpisodesPage/episodes.html" },
  { name: "Adaptation", href: "AdaptationPage/adaptation.html" },
];

// Function to generate the nav menu
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container");
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  for (let menuItem of menuItems) {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;

      // Adjust relative path if current page is inside a subfolder
      let relativeHref = menuItem.href;
      if (
        window.location.pathname.includes("/AboutPage/") ||
        window.location.pathname.includes("/CharactersPage/") ||
        window.location.pathname.includes("/EpisodesPage/") ||
        window.location.pathname.includes("/AdaptationPage/")
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
