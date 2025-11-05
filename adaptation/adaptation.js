/*************************** Dom Manipulation Content  ***************************/

//Film, Comic Books, and Video Game
const slides = [
  {
    title: "The Simpson Film",
    text: `The Simpsons Movie, released in 2007, is an American animated comedy that captures the humor, heart, and satire that made the television series so beloved. Directed by David Silverman and written by a talented team including Matt Groening, James L. Brooks, and Al Jean, the film brings the familiar world of Springfield to the big screen with polished animation and sharp writing.<br /><br />It features the voices of the regular cast, including Dan Castellaneta, Julie Kavner, Nancy Cartwright, Yeardley Smith, Hank Azaria, and Harry Shearer, ensuring the characters feel just as lively and memorable as in the series. The movie expands on the show’s themes of family, community, and social commentary while introducing a cinematic scale of adventure and comedy that engages both long-time fans and new audiences alike.`,
    img: "../images/movie.png",
  },
  {
    title: "The Simpson Comic Books",
    text: `The Simpsons comic book series, created by multiple authors, includes titles such as The Simpsons/Futurama Crossover Crisis, Bartman: The Best of the Best!, and Simpsons Comics Royale: A Super-Sized Simpson Soiree, among many others. These comics expand the world of Springfield, offering fans additional stories, adventures, and humor. The series is available in order, as box sets, omnibus editions, and companion titles, providing a rich collection for both new readers and long-time fans.<br /><br />The stories often explore side plots and one-off adventures that complement the television series' larger arcs. They feature the same satirical humor and character-driven comedy that fans love. Collectors and enthusiasts also appreciate the detailed artwork, imaginative scenarios, and clever writing that make each issue memorable, making the series enjoyable for both casual readers and dedicated Simpsons fans alike.`,
    img: "../images/comic_book.jpg",
  },
  {
    title: "The Simpson Video Game",
    text: `The Simpsons Game is a third-person action video game available on platforms such as Wii, Nintendo DS, Xbox 360, PlayStation 3, PlayStation 2, and PlayStation Portable. Each version features exclusive cover art. The game follows an original storyline written by Tim Long, Matt Selman, and Matt Warburton, where the Simpson family discovers they must participate in another Simpsons video game. True to the show’s style, the game humorously references popular culture, other video games, and even its developer, EA. Unlike previous Simpsons games, this one uses cel-shaded graphics, giving it a distinctive visual style.`,
    img: "../images/game.jpg",
  },
];

// DOM references
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const titleEl = document.querySelector("#textInfo h2");
const paragraphEl = document.querySelector("#textInfo p");
const imageEl = document.querySelector("#movieImage img");

let index = 0;

//  function to inject content into HTML
function render(i) {
  const slide = slides[i];
  titleEl.textContent = slide.title;
  paragraphEl.innerHTML = slide.text.replace(/\n\n/g, "<br><br>");
  imageEl.src = slide.img;
  imageEl.alt = slide.title;
}

leftBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  render(index);
});

rightBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  render(index);
});

render(index);

/*************************** Adaptation Page GSAP ***************************/

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined") {
    gsap.set("#textInfo h2, #textInfo p, #movieTrailer", { opacity: 0, y: 20 });

    const tl = gsap.timeline();

    tl.to("#textInfo h2, #textInfo p", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      ease: "power2.out",
    });

    tl.to(
      "#movieTrailer",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );
  }
});
