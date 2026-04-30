export function displayGames(games) {
  const container = document.getElementById("games");

  container.innerHTML = "";

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-3");

    card.innerHTML = `
            <div class="card bg-dark text-white h-100">
                <img src="${game.background_image}" class="card-img-top">

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${game.name}</h5>
                    <p>⭐ ${game.rating}</p>

                    <a href="https://rawg.io/games/${game.slug}" 
                       target="_blank" 
                       class="btn btn-game mt-auto">
                        Voir le jeu
                    </a>
                </div>
            </div>
        `;

    container.appendChild(card);
  });
}
