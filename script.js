// HOLAAA
// Datos base
const players = [
  {
    nick: "Neziepls",
    points: 18,
    skin: "https://render.crafty.gg/3d/bust/Neziepls",
    tiers: { Sword: "HT4", Axe: "LT4", Uhc: "HT4", NethPot: "HT4", Crystal: "LT4" }
  },
  {
    nick: "_vxzll",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/_vxzll",
    tiers: { Sword: "HT4" }
  },
  {
    nick: "Foller_MC",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/Foller_MC",
    tiers: { Sword: "HT3" }
  },
  {
    nick: "ImDzku_",
    points: 13,
    skin: "https://render.crafty.gg/3d/bust/ImDzku_",
    tiers: {
      Uhc: "HT5", Sword: "LT5", Axe: "HT5", NethPot: "LT5",
      SMP: "HT5", DiaPot: "LT5", Crystal: "HT5", Mazo: "HT5"
    }
  }
];

// 1) Construir lista con ranking global
const rankedPlayers = players
  .slice() // copia
  .sort((a, b) => b.points - a.points) // ordenar por puntos
  .map((p, i) => ({ ...p, rank: i + 1 })); // asignar rank 1..n

function renderPlayers(list) {
  const container = document.getElementById("player-list");
  container.innerHTML = "";

  // 2) Ordenar por rank para que se muestren en su orden real
  const byRank = list.slice().sort((a, b) => a.rank - b.rank);

  byRank.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Estilos especiales según rank real (no según índice del filtro)
    if (player.rank === 1) card.classList.add("gold");
    else if (player.rank === 2) card.classList.add("silver");
    else if (player.rank === 3) card.classList.add("bronze");

    // Número grande de posición (slot)
    const rankSlot = document.createElement("div");
    rankSlot.className = "rank-slot";
    rankSlot.textContent = `#${player.rank}`;

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

    card.appendChild(rankSlot);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(tiers);
    container.appendChild(card);
  });
}

// 3) Buscador: filtra sin perder el rank
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = rankedPlayers.filter(p => p.nick.toLowerCase().includes(query));
  renderPlayers(filtered.length ? filtered : rankedPlayers);
});

// Render inicial con ranking global
renderPlayers(rankedPlayers);
