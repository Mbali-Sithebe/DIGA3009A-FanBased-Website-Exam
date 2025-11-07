// 1. Navigation Menu Array
const menuItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "about/about.html" },
  { name: "Characters", href: "characters/characters.html" },
  { name: "Episodes", href: "episodes/episodes.html" },
  { name: "Adaptation", href: "adaptation/adaptation.html" },
  { name: "CharactersPhrases", href: "characters-phrases/charactersPhr.html" }, // hidden page
];

// 2. Initialise Menu Function
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container");
  container.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("menu");

  menuItems.forEach((menuItem) => {
    if (menuItem.name === "CharactersPhrases") return;

    const li = document.createElement("li");
    li.classList.add("menu-item");

    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;

      // Adjusting relative path for subfolders
      let relativeHref = menuItem.href;
      const pathFolders = [
        "/about/",
        "/characters/",
        "/episodes/",
        "/adaptation/",
        "/characters-phrases/",
      ];
      if (
        pathFolders.some((folder) => window.location.pathname.includes(folder))
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
  });

  container.appendChild(ul);
}

// 3. Detecting the current page
const path = window.location.pathname.toLowerCase();
if (path.includes("about")) initialiseMenu("About");
else if (path.includes("characters")) initialiseMenu("Characters");
else if (path.includes("episodes")) initialiseMenu("Episodes");
else if (path.includes("adaptation")) initialiseMenu("Adaptation");
else initialiseMenu("Home");

// 4. Responsive Hamburger Toggle Menu
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const menuContainer = document.getElementById("menu-container");

function openMenu() {
  menuContainer.classList.add("dropdown");
  hamburger.style.display = "none";
  closeMenu.style.display = "block";
}

function closeMenuFunc() {
  menuContainer.classList.remove("dropdown");
  closeMenu.style.display = "none";
  hamburger.style.display = "block";
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);

// 5. Ensuring icons appear only on small screens
function handleResize() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    menuContainer.classList.remove("dropdown");
  } else {
    hamburger.style.display = "none";
    closeMenu.style.display = "none";
    menuContainer.classList.remove("dropdown");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
