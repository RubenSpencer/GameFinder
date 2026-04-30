const API_KEY = "62e056f0802d4a83862338a586ca0359";
const BASE_URL = "https://api.rawg.io/api/games";

export async function searchGames(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&search=${query}`);
  const data = await response.json();
  return data.results;
}

export async function getPopularGames() {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&ordering=-rating&page_size=20`,
  );
  const data = await response.json();
  return data.results;
}
