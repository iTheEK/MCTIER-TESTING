// Lista de jugadores
// Lista de jugadores
const players = [
              {
    nick: "Sharpwa",
    points: 26,
    skin: "https://render.crafty.gg/3d/bust/Sharpwa",
    tiers: { Uhc: "HT4", Sword: "LT3", NethPot: "LT3", Axe: " HT4", Crystal: "LT3" }
  },
            {
    nick: "Artij",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/Artij",
    tiers: { Uhc: "HT4" }
  },
            {
    nick: "AlanEllagarto",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/AlanEllagarto",
    tiers: { Sword: "LT4" }
  },
          {
    nick: "Reishtd",
    points: 14,
    skin: "https://render.crafty.gg/3d/bust/Reishtd",
    tiers: { Uhc: "HT4", Sword: "HT4", Crystal: "LT3" }
  },
        {
    nick: "imevin",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/imevin",
    tiers: { Uhc: "HT4", Sword: "HT4", Axe: "HT4" }
  },
      {
    nick: "1Gear",
    points: 28,
    skin: "https://render.crafty.gg/3d/bust/1Gear",
    tiers: { Uhc: "LT3", Sword: "HT3", NethPot: "LT3", Axe: " LT3" }
  },
    {
    nick: "DevonLarrat",
    points: 14,
    skin: "https://render.crafty.gg/3d/bust/DevonLarrat",
    tiers: { Uhc: "HT4", Smp: "LT3", DiaPot: "HT4" }
  },
    {
    nick: "qrrstr",
    points: 11,
    skin: "https://render.crafty.gg/3d/bust/qrrstr",
    tiers: { Uhc: "LT5", Sword: "LT5", NethPot: "LT5", Axe: " LT5", Smp: "LT5", DiaPot: "LT5", Crystal: "HT4", Mazo: "LT5" }
  },
    {
    nick: "FerrasFornit2009",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/FerrasFornit2009",
    tiers: { Uhc: "HT5", Sword: "LT4", NethPot: "LT5", Axe: " HT5", Crystal: "HT5" }
  },
    {
    nick: "Reinsertada",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/Reinsertada",
    tiers: { Sword: "HT3" }
  },
    {
    nick: "thiagocpvp",
    points: 7,
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
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/_vxzll",
    tiers: { Uhc: "HT5", Sword: "LT4", Crystal: "LT5"  }
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
    points: 35,
    skin: "https://render.crafty.gg/3d/bust/PimpoyoEscariote",
    tiers: { Sword: "LT4", NethPot: "LT3", DiaPot: "LT3", Crystal: "LT2" }
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
    points: 28,
    skin: "https://render.crafty.gg/3d/bust/Resuelve",
    tiers: { Uhc: "LT4", Sword: "LT3", NethPot: "LT4",Diapot: "LT3", Crystal: "HT3" }
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
    points: 7,
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
























