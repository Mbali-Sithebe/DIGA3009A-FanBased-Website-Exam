// 1. Navigation Menu Array
const menuItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "about/about.html" },
  { name: "Characters", href: "characters/characters.html" },
  { name: "Episodes", href: "episodes/episodes.html" },
  { name: "Adaptation", href: "adaptation/adaptation.html" },
  { name: "CharactersPhrases", href: "characters-phrases/charactersPhr.html" },
];

// 2. Initialise Menu Function
function populateMenu(containerId, currentPage) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (containerId === "dropdown-container" && window.innerWidth > 768) return;

  const ul = document.createElement("ul");
  ul.classList.add("menu");

  menuItems.forEach((menuItem) => {
    if (menuItem.name === "CharactersPhrases") return;

    const li = document.createElement("li");
    li.classList.add("menu-item");

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

    // Adding active class for desktop or dropdown
    if (currentPage === menuItem.name) {
      li.classList.add("active");
    }

    li.appendChild(a);
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

//3.  Detect current page
const path = window.location.pathname.toLowerCase();
let currentPage = "Home";
if (path.includes("about")) currentPage = "About";
else if (path.includes("characters")) currentPage = "Characters";
else if (path.includes("episodes")) currentPage = "Episodes";
else if (path.includes("adaptation")) currentPage = "Adaptation";

//4.  Populate both menus initially
populateMenu("menu-container", currentPage);
populateMenu("dropdown-container", currentPage);

const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close-menu");
const dropdown = document.getElementById("dropdown-container");

function openDropdown() {
  dropdown.classList.add("dropdown");
  hamburger.style.display = "none";
  closeMenu.style.display = "block";
}

function closeDropdown() {
  dropdown.classList.remove("dropdown");
  closeMenu.style.display = "none";
  hamburger.style.display = "block";
}

// 5. Ensuring icons appear only on small screens
hamburger.addEventListener("click", openDropdown);
closeMenu.addEventListener("click", closeDropdown);

function handleResize() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
    closeMenu.style.display = "none";
    populateMenu("dropdown-container", currentPage);
  } else {
    hamburger.style.display = "none";
    closeMenu.style.display = "none";
    dropdown.classList.remove("dropdown");
    dropdown.innerHTML = "";
    populateMenu("menu-container", currentPage);
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
