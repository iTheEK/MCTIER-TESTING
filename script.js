// Lista de jugadores
// Lista de jugadores
const players = [
     {
    nick: "thiagocpvp",
    points: 0,
    skin: "https://render.crafty.gg/3d/bust/thiagocpvp",
    tiers: { Sword: "LT5", NethPot: "LT5", DiaPot: "LT5", Crystal: "HT5", Mazo: "HT5" }
  },
    {
    nick: "Santinator_120T",
    points: 15,
    skin: "https://render.crafty.gg/3d/bust/Santinator_120T",
    tiers: { Uhc: "LT4", Sword: "LT4", NethPot: "LT5", Axe: "LT4", Smp: "LT4", DiaPot: "LT5", Crystal: "LT5" }
  },
    {
    nick: "Kleveri_Tea",
    points: 28,
    skin: "https://render.crafty.gg/3d/bust/Kleveri_Tea",
    tiers: { Uhc: "LT3", Sword: "LT3", Nethpot: "LT4", Smp: "LT3", Diapot: "LT3", Axe: "LT5" }
  },
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
    tiers: { Sword: "LT3" }
  },
  {
    nick: "Foller_MC",
    points: 22,
    skin: "https://render.crafty.gg/3d/bust/Foller_MC",
    tiers: { Sword: "HT3", Uhc: "LT3", Axe: "HT4", Crystal: "HT5" }
  },
  {
    nick: "ImDzku_",
    points: 13,
    skin: "https://render.crafty.gg/3d/bust/ImDzku_",
    tiers: {
      Uhc: "HT5", Sword: "LT5", Axe: "HT5", NethPot: "LT5",
      SMP: "HT5", DiaPot: "LT5", Crystal: "HT5", Mazo: "HT5"
    }
  },
  {
    nick: "Kanatzz",
    points: 14,
    skin: "https://render.crafty.gg/3d/bust/Kanatzz",
    tiers: { Sword: "HT4", Crystal: "HT3" }
  },
  {
    nick: "PimpoyoEscariote",
    points: 38,
    skin: "https://render.crafty.gg/3d/bust/PimpoyoEscariote",
    tiers: { Sword: "LT3", NethPot: "LT3", DiaPot: "LT3", Crystal: "LT2" }
  },
  {
    nick: "NoSoyHenry",
    points: 15,
    skin: "https://render.crafty.gg/3d/bust/NoSoyHenry",
    tiers: { Uhc: "LT4", Sword: "LT4", SMP: "LT4", Crystal: "LT4", Mazo: "LT4" }
  },
  {
    nick: "Alquix_",
    points: 18,
    skin: "https://render.crafty.gg/3d/bust/Alquix_",
    tiers: { Uhc: "LT3", Sword: "LT3", SMP: "LT3" }
  },
  {
    nick: "Resuelve",
    points: 19,
    skin: "https://render.crafty.gg/3d/bust/Resuelve",
    tiers: { Sword: "LT3", NethPot: "LT4", Crystal: "HT3" }
  },
  {
    nick: "SKAILLGG",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/SKAILLGG",
    tiers: { Sword: "LT3" }
  },
  {
    nick: "naqm",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/naqm",
    tiers: { Sword: "HT4", Crystal: "LT3" }
  },
  {
    nick: "Vaso_ITSstreams",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/Vaso_ITSstreams",
    tiers: { NethPot: "HT5", Crystal: "LT4", Mazo: "HT5" }
  }
];
// Calcular ranking global
const rankedPlayers = players
  .slice()
  .sort((a, b) => b.points - a.points)
  .map((p, i) => ({ ...p, rank: i + 1 }));

function renderPlayers(list) {
  const container = document.getElementById("player-list");
  container.innerHTML = "";

  const byRank = list.slice().sort((a, b) => a.rank - b.rank);

  byRank.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Estilos especiales para top 3
    if (player.rank === 1) card.classList.add("gold");
    else if (player.rank === 2) card.classList.add("silver");
    else if (player.rank === 3) card.classList.add("bronze");

    // Número grande de posición
    const rankSlot = document.createElement("div");
    rankSlot.className = "rank-slot";
    rankSlot.textContent = `#${player.rank}`;

    const img = document.createElement("img");
    img.src = player.skin;

    // Bloque de info (nick + puntos + tiers juntos)
    const info = document.createElement("div");
    info.className = "player-info";
    info.innerHTML = `<strong>${player.nick}</strong><br><span>${player.points} puntos</span>`;

    // Bloque de tiers (separado con margen)
    const tiers = document.createElement("div");
    tiers.className = "tiers";
    for (const [mode, tier] of Object.entries(player.tiers)) {
      const badge = document.createElement("div");
      badge.className = `tier ${tier}`;
      badge.textContent = `${mode.toUpperCase()}: ${tier}`;
      tiers.appendChild(badge);
    }

    // Ensamblar tarjeta horizontal: rank + avatar + info + tiers
    card.appendChild(rankSlot);
    card.appendChild(img);
    card.appendChild(info);
    card.appendChild(tiers);
    container.appendChild(card);
  });
}

// Buscador
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = rankedPlayers.filter(p => p.nick.toLowerCase().includes(query));
  renderPlayers(filtered.length ? filtered : rankedPlayers);
});

// Render inicial
renderPlayers(rankedPlayers);







