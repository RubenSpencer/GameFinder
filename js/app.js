import { searchGames, getPopularGames } from "./api.js";
import { displayGames } from "./ui.js";

const input = document.querySelector("input");

// Load popular games on page load
async function loadPopularGames() {
  const games = await getPopularGames();
  displayGames(games);
}

loadPopularGames();

input.addEventListener("input", async () => {
  const query = input.value.trim();

  if (query) {
    const games = await searchGames(query);
    displayGames(games);
  } else {
    loadPopularGames();
  }
});
