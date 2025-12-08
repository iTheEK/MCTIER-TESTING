// HOLAAA
const players = [
  {
    nick: "Neziepls",
    points: 18,
    skin: "https://render.crafty.gg/3d/bust/Neziepls",
    tiers: {
      sword: "HT4",
      axe: "LT4",
      UHC: "HT4",
      NethPot: "HT4",
      Crystal: "LT4"
    }
  },
  {
    nick: "_vxzll",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/_vxzll",
    tiers: {
      sword: "HT4"
    }
  },
  {
    nick: "Foller_MC",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/Foller_MC",
    tiers: {
      sword: "HT3"
    }
  }
];

function renderPlayers(list) {
  const container = document.getElementById("player-list");
  container.innerHTML = "";

  // Ordenar por puntos (mayor a menor)
  list.sort((a, b) => b.points - a.points);

  list.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Estilos especiales para #1, #2, #3
    if (index === 0) {
      card.classList.add("gold");
    } else if (index === 1) {
      card.classList.add("silver");
    } else if (index === 2) {
      card.classList.add("bronze");
    }

    // Número grande de posición (opcional, tipo slot)
    const rank = document.createElement("div");
    rank.className = "rank-slot";
    rank.textContent = `#${index + 1}`;

    const img = document.createElement("img");
    img.src = player.skin;

    const info = document.createElement("div");
    info.className = "player-info";
    info.innerHTML = `<strong>${player.nick}</strong><br>${player.points} puntos`;

    const tiers = document.createElement("div");
    tiers.className = "tiers";
    for (const [mode, tier] of Object.entries(player.tiers)) {
      const badge = document.createElement("div");
      badge.className = `tier ${tier}`;
      badge.textContent = `${mode.toUpperCase()}: ${tier}`;
      tiers.appendChild(badge);
    }

    // Ensamblar: [rank] [avatar] [info + tiers]
    card.appendChild(rank);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(tiers);
    container.appendChild(card);
  });
}

// Buscador
document.getElementById("search").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = players.filter(p => p.nick.toLowerCase().includes(query));
  renderPlayers(filtered);
});

renderPlayers(players);
