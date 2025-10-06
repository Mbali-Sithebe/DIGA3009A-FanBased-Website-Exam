// 1. Generating Navigation Bar
const root = "DIGA3009A-FanBased-Website-Exam";

// Array list of the nav menu
const menuItems = [
  { name: "Home", href: `${root}/index.html` },
  { name: "About", href: `${root}/about.html` },
  { name: "Characters", href: `${root}/characters.html` },
  { name: "Episodes", href: `${root}/episodes.html` },
  { name: "Adaptation", href: `${root}/fan-art.html` },
];

// Function to generate the nav menu
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container");
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  // Loop through menu items
  for (let menuItem of menuItems) {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    // Highlight current page, others are links
    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;
      a.setAttribute("href", menuItem.href);
      li.appendChild(a);
    } else {
      li.innerText = menuItem.name;
      li.classList.add("active");
    }

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

initialiseMenu("Home");
