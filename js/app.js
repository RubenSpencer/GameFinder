import { searchGames, getPopularGames } from "./api.js";
import { displayGames } from "./ui.js";

const input = document.querySelector("input");

//  Filtrage des contenus indésirables
function filterGames(games) {
    const bannedWords = ["hentai", "porn", "sex", "adult"];

    return games.filter(game => {
        const name = game.name?.toLowerCase() || "";

        const hasBadWord = bannedWords.some(word =>
            name.includes(word)
        );

        const hasBadTag = game.tags &&
            game.tags.some(tag =>
                tag.name.toLowerCase().includes("adult")
            );

        return !hasBadWord && !hasBadTag;
    });
}

//  Charger les jeux populaires au démarrage
async function loadPopularGames() {
    try {
        const games = await getPopularGames();

        const filteredGames = filterGames(games);

        displayGames(filteredGames);
    } catch (error) {
        console.error("Erreur chargement jeux populaires :", error);
    }
}

//  Lancement initial
loadPopularGames();

//  Recherche en temps réel
input.addEventListener("input", async () => {
    const query = input.value.trim();

    try {
        if (query) {
            const games = await searchGames(query);

            const filteredGames = filterGames(games);

            displayGames(filteredGames);
        } else {
            loadPopularGames();
        }
    } catch (error) {
        console.error("Erreur recherche :", error);
    }
});