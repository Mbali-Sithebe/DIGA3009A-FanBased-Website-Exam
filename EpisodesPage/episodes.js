// ============================
// 0. DOM Elements
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");
  const watchBtn = document.getElementById("watchBtn");
  const heartBtn = document.getElementById("heartIconBtn");
  const heartIcon = heartBtn.querySelector("i");
  const stars = document.querySelectorAll("#rating-stars i");
  const episodeTitle = document.querySelector(".episode-info .title");
  const episodeSynopsis = document.querySelector(".episode-info .synopsis");
  const trailerFrame = document.getElementById("trailerFrame");

  let selectedEpisodeNumber = 1;

  // ============================
  // 1. Fixed YouTube Videos per Episode
  // ============================
  const episodesVideos = {
    1: "https://www.youtube.com/embed/cIfLqO3SSBs",
    2: "https://www.youtube.com/embed/7zPnrLfs78I?si=Nm35RPFXXCgpyiNB",
  };

  // ============================
  // 2. Fetch Live API for Title & Synopsis
  // ============================
  let episodesMap = {}; // to store live API data

  axios
    .get("https://thesimpsonsapi.com/api/episodes")
    .then((res) => {
      const episodesData = res.data.results || []; // API uses 'results'

      // Map episodes by number for easy access
      episodesData.forEach((ep) => {
        episodesMap[ep.episode_number] = ep;
      });

      // Initialize default episode info
      if (episodesMap[selectedEpisodeNumber]) {
        episodeTitle.textContent = episodesMap[selectedEpisodeNumber].name; // API uses 'name'
        episodeSynopsis.textContent =
          episodesMap[selectedEpisodeNumber].synopsis;
      }
    })
    .catch((err) => console.error("Error fetching episodes data:", err));

  // ============================
  // 3. Dropdown click functionality
  // ============================
  dropdownContent.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const epNum = parseInt(link.dataset.episode);
      selectedEpisodeNumber = epNum;

      // Update title & synopsis from live API
      if (episodesMap[epNum]) {
        episodeTitle.textContent = episodesMap[epNum].name; // API uses 'name'
        episodeSynopsis.textContent = episodesMap[epNum].synopsis;
      }

      // Update video from local array
      if (episodesVideos[epNum]) {
        trailerFrame.src = episodesVideos[epNum];
      }

      // Hide dropdown
      dropdownContent.style.display = "none";
    });
  });

  // ============================
  // 4. Toggle dropdown visibility
  // ============================
  dropdownBtn.addEventListener("click", () => {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", (event) => {
    if (
      !dropdownBtn.contains(event.target) &&
      !dropdownContent.contains(event.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });

  // ============================
  // 5. Watch Button Plays Video
  // ============================
  watchBtn.addEventListener("click", () => {
    if (episodesVideos[selectedEpisodeNumber]) {
      trailerFrame.src = episodesVideos[selectedEpisodeNumber] + "?autoplay=1";
    }
  });

  // ============================
  // 6. Heart Button Toggle
  // ============================
  heartBtn.addEventListener("click", () => {
    heartIcon.classList.toggle("fa-solid");
    heartIcon.classList.toggle("fa-regular");
  });

  // ============================
  // 7. Star Rating Toggle
  // ============================
  stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        if (i <= idx) {
          s.classList.remove("fa-regular");
          s.classList.add("fa-solid");
        } else {
          s.classList.remove("fa-solid");
          s.classList.add("fa-regular");
        }
      });
    });
  });
});
