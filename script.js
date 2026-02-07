          // Lista de jugadores
const players = [
           {
    nick: "Matias_35x",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Matias_35x",
    tiers: { Crystal: "LT5" }
  },
           {
    nick: "Mayky07",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Mayky07",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "DrackShadoW",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/DrackShadoW",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "benja2616",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/benja2616",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "ItzThixx_",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/ItzThixx_",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "Selpowy",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Selpowy",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "SoftlyLeo",
    points: 5,
    skin: "https://render.crafty.gg/3d/bust/SoftlyLeo",
    tiers: { Uhc: "HT5", Crystal: "LT4" }
  },
           {
    nick: "IsaakEnLaJ",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/IsaakEnLaJ",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "zmain",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/zmain",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "MrJ_",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/User",
    tiers: { Sword: "LT5" }
  },
           {
    nick: "lamRub",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/lamRub",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "Imlegit509",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Imlegit509",
    tiers: { Sword: "HT4" }
  },
           {
    nick: "iAsombrado",
    points: 5,
    skin: "https://render.crafty.gg/3d/bust/iAsombrado",
    tiers: { Uhc: "HT4", Axe: "LT5" }
  },
           {
    nick: "Perulovers",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Perulovers",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "NewwLight",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/NewwLight",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "renox115",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/renox115",
    tiers: { Sword: "HT4" }
  },
           {
    nick: "GoatEzy",
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/GoatEzy",
    tiers: { Crystal: "LT3", Mazo: "HT5" }
  },
           {
    nick: "Rubepro22",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Rubepro22",
    tiers: { Mazo: "LT5" }
  },
           {
    nick: "bt3zzpurmin0te",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/bt3zzpurmin0te",
    tiers: { Crystal: "HT3" }
  },
           {
    nick: "Stalkeado",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Stalkeado",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "Kaziimee",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Kaziimee",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "Sxade_",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Sxade_",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "Cxnquista",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Cxnquista",
    tiers: { Mazo: "LT5" }
  },
           {
    nick: "Gojon7u7",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Gojon7u7",
    tiers: { Mazo: "LT4" }
  },
           {
    nick: "22_lauty",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/22_lauty",
    tiers: { Mazo: "LT5" }
  },
           {
    nick: "Arkana79_",
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/Arkana79_",
    tiers: { Crystal: "LT3", Mazo: "HT5" }
  },
           {
    nick: "inxlvidable_",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/inxlvidable_",
    tiers: { NethPot: "HT4", Crystal: "LT4" }
  },
           {
    nick: "KusaN4gii",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/KusaN4gii",
    tiers: { NethPot: "LT4" }
  },
           {
    nick: "Sxade_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Sxade_",
    tiers: { NethPot: "LT3" }
  },
           {
    nick: "nicoxis",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/nicoxis",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "heatherwauthion",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/heatherwauthion",
    tiers: { Sword: "HT5" }
  },
           {
    nick: "zpipe",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/zpipe",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "berretekis",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/berretekis",
    tiers: { Sword: "HT4" }
  },
           {
    nick: "Yatelaestampo_",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/Yatelaestampo_",
    tiers: { Sword: "LT3", Crystal: "LT3" }
  },
           {
    nick: "GeometryZeroMC",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/GeometryZeroMC",
    tiers: { Uhc: "HT5", Mazo: "HT5" }
  },
           {
    nick: "zenkai",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/zenkai",
    tiers: { Sword: "HT4", Mazo: "HT5" }
  },
           {
    nick: "mito2",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/mito2",
    tiers: { Uhc: "LT3", Sword: "HT4", Mazo: "HT5" }
  },
           {
    nick: "tarolerocondrip",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/tarolerocondrip",
    tiers: { Sword: "LT5" }
  },
           {
    nick: "jxzh76",
    points: 9,
    skin: "https://render.crafty.gg/3d/bust/jxzh76",
    tiers: { Sword: "HT4", Crystal: "LT3" }
  },
           {
    nick: "chuto130114",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/chuto130114",
    tiers: { Sword: "HT5" }
  },
           {
    nick: "alexisfer21",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/alexisfer21",
    tiers: { Sword: "LT4" }
  },
           {
    nick: "10221fps",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/10221fps",
    tiers: { Sword: "LT5" }
  },
           {
    nick: "matz15_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/matz15_",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "janogamer2023",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/janogamer2023",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "Ragj90_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Ragj90_",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "kazzime",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/kazzime",
    tiers: { NethPot: "LT4", Axe: "LT4" }
  },
           {
    nick: "crisismental",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/crisismental",
    tiers: { Axe: "HT5" }
  },
           {
    nick: "zkamado",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/zkamado",
    tiers: { Axe: "HT5" }
  },
           {
    nick: "Nicolasx84",
    points: 15,
    skin: "https://render.crafty.gg/3d/bust/Nicolasx84",
    tiers: { Uhc: "HT5", Sword: "LT4", NethPot: "HT5", Axe: "HT4", Crystal: "LT4" }
  },
           {
    nick: "angeloskill_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/angeloskill_",
    tiers: { Sword: "LT3" }
  },
           {
    nick: "iAsombrado",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/iAsombrado",
    tiers: { Mazo: "LT5" }
  },
           {
    nick: "mito2",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/User",
    tiers: { Sword: "LT5", NethPot: "HT5", Crystal: "HT5", Mazo: "LT5"  }
  },
           {
    nick: "teo07279",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/teo07279",
    tiers: { Sword: "LT5", NethPot: "LT5", Mazo: "LT5" }
  },
           {
    nick: "00NO",
    points: 48,
    skin: "https://render.crafty.gg/3d/bust/00NO",
    tiers: { Uhc: "LT3", Sword: "LT3", NethPot: "LT3", Crystal: "HT2" }
  },
           {
    nick: "DrakePoshon_",
    points: 22,
    skin: "https://render.crafty.gg/3d/bust/DrakePoshon_ ",
    tiers: { Sword: "LT3", NethPot: "HT3", Diapot: "LT3" }
  },
           {
    nick: "ssuii",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/ssuii",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "7zql1k",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/7zql1k",
    tiers: { Crystal: "HT3          " }
  },
           {
    nick: "chorireallybad",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/chorireallybad",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "HitSilent",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/HitSilent",
    tiers: { Sword: "HT3" }
  },
           {
    nick: "kittymalita6967",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/kittymalita6967",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "Cristhoffer",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Cristhoffer",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "hellanumb",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/hellanumb",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "DukoEz",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/DukoEz",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "uwu407152",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/uwu407152",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "DrackShadoW",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/DrackShadoW",
    tiers: { Crystal: "HT4" }
  },
           {
    nick: "Iker34",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Iker34",
    tiers: { Mazo: "LT4" }
  },
           {
    nick: "Xx_SHADOW_xX99",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Xx_SHADOW_xX99",
    tiers: { Sword: "LT5", Mazo: "HT5" }
  },
           {
    nick: "itzSlowwz",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/itzSlowwz",
    tiers: { Mazo: "LT5"  }
  },
           {
    nick: "kalzq",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/kalzq",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "emonjuice8212",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/emonjuice8212",
    tiers: { Crystal: "HT4" }
  },
           {
    nick: "barbiwhen",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/barbiwhen",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "Nicoxis23",
    points: 16,
    skin: "https://render.crafty.gg/3d/bust/Nicoxis23",
    tiers: { Sword: "LT3", Crystal: "LT3", Mazo: "HT4" }
  },
           {
    nick: "zCyrsw_",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/zCyrsw_",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "ThekingXx777",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/ThekingXx777",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "Linhxd",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Linhxd",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "ikissme_",
    points: 16,
    skin: "https://render.crafty.gg/3d/bust/Ikissme_",
    tiers: { Sword: "LT3", Crystal: "LT3", Mazo: "HT4" }
  },
           {
    nick: "rvud",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/rvud",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "elmemes7799932",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/elmemes7799932",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "reymer_mc",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/reymer_mc",
    tiers: { Crystal: "LT5" }
  },
           {
    nick: "Arnau_gl",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/Arnau_gl",
    tiers: { Crystal: "HT4" }
  },
           {
    nick: "kalzq",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/kalzq",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "Forboxcs",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Forboxcs",
    tiers: { Mazo: "LT5" }
  },
           {
    nick: "KingOfShadow895",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/KingOfShadow895",
    tiers: { Crystal: "HT5" }
  },
           {
    nick: "dereeck",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/dereeck",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "ratomgordo",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/ratomgordo",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "Anderqxk",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Anderqxk",
    tiers: { Crystal: "HT5" }
  },
          {
    nick: "Yiimii",
    points: 48,
    skin: "https://render.crafty.gg/3d/bust/Yiimii",
    tiers: { Sword: "LT1", Mazo: "LT4"  }
  },
         {
    nick: "NPdrakcPBNF20",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/NPdrakcPBNF20",
    tiers: { Mazo: "LT5"  }
  },
         {
    nick: "MJC_",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/MJC_",
    tiers: { Uhc: "HT5", Crystal: "LT3", Mazo: "HT5", Axe: "HT5" }
  },
         {
    nick: "Zkwre",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/Zkwre",
    tiers: { Uhc: "HT3" }
  },
        {
    nick: "BruxisConDrip",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/BruxisConDrip",
    tiers: { Smp: "LT3" }
  },
        {
    nick: "YaMeVineMen",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/YaMeVineMen",
    tiers: { NethPot: "HT4" }
  },
        {
    nick: "flaxinhz",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/flaxinhz",
    tiers: { Sword: "HT4" }
  },
       {
    nick: "ItzManux_x",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/ItzManux_x",
    tiers: { Crystal: "LT3", Mazo: "LT5" }
  },
       {
    nick: "WhsMqthh",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/WhsMqthh",
    tiers: { Crystal: "LT4" }
  },
       {
    nick: "Foxted",
    points: 5,
    skin: "https://render.crafty.gg/3d/bust/Foxted",
    tiers: { Uhc: "LT4", Mazo: "HT5" }
  },
       {
    nick: "O2K4R_",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/O2K4R_",
    tiers: { Crystal: "HT5" }
  },
       {
    nick: "qaw_",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/qaw_",
    tiers: { Crystal: "HT3" }
  },
      {
    nick: "seiree_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/seiree_",
    tiers: { NethPot: "LT3" }
  },
      {
    nick: "Kaziimee",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Kaziimee",
    tiers: { Crystal: "LT3" }
  },
      {
    nick: "Bry_10",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Bry_10",
    tiers: { Sword: "HT5", Crystal: "HT5", Mazo: "HT5" }
  },
      {
    nick: "Nyzx9",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Nyzx9",
    tiers: { Crystal: "LT4" }
  },
      {
    nick: "GeteBros",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/GeteBros",
    tiers: { NethPot: "LT4" }
  },
      {
    nick: "HellDis_",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/HellDis_",
    tiers: { NethPot: "HT5" }
  },
     {
    nick: "ReturnRyo_",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/ReturnRyo_",
    tiers: { Uhc: "HT5" }
  },
     {
    nick: "Aaronbkcmb",
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/Aaronbkcmb",
    tiers: { Uhc: "LT5", Sword: "LT4", NethPot: "HT4" }
  },
     {
    nick: "CubaConDrip",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/CubaConDrip",
    tiers: { NethPot: "HT5" }
  },
     {
    nick: "SpinyRug9484",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/SpinyRug9484",
    tiers: { Sword: "HT5", Crystal: "HT5" }
  },
    {
    nick: "Rxvsty",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Rxvsty",
    tiers: { Crystal: "LT3" }
  },
    {
    nick: "soymalisimoxd",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/soymalisimoxd",
    tiers: { Crystal: "HT4"}
  },
    {
    nick: "rvud",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/rvud",
    tiers: { Crystal: "HT4" }
  },
    {
    nick: "evantiipack",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/evantiipack",
    tiers: { Crystal: "HT5" }
  },
    {
    nick: "Mqkinado01",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Mqkinado01",
    tiers: { Crystal: "HT5" }
  },
    {
    nick: "MePicaElBuf0",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/MePicaElBuf0",
    tiers: { Crystal: "HT4" }
  },
    {
    nick: "zOldVenteen",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/zOldVenteen",
    tiers: { Uhc: "LT4", Sword: "LT4" }
  },
    {
    nick: "stormsmp_lat",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/stormsmp_lat",
    tiers: { Sword: "HT5" }
  },
   {
    nick: "death",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/death",
    tiers: { Crystal: "LT3" }
  },
   {
    nick: "Leolgve",
    points: 13,
    skin: "https://render.crafty.gg/3d/bust/Leolgve",
    tiers: { Uhc: "LT5", NethPot: "HT5", Crystal: "HT3" }
  },
   {
    nick: "CelestialDesk",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/CelestialDesk",
    tiers: { Crystal: "LT3" }
  },
              {
    nick: "ElYuyoMC",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/ElYuyoMC",
    tiers: { Uhc: "LT4", Sword: "LT4" }
  },
        {
    nick: "GeteBros",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/GeteBros",
    tiers: { Uhc: "LT4" }
  },
        {
    nick: "samuu_MC",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/samuu_MC",
    tiers: { NethPot: "LT5", Mazo: "LT4"  }
  },
       {
    nick: "isaakpo",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/isaakpo",
    tiers: { Uhc: "LT4" }
  },
       {
    nick: "GatoGanson",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/GatoGanson",
    tiers: { Uhc: "LT3" }
  },
      {
    nick: "MalisimoMC",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/MalisimoMC",
    tiers: { Uhc: "LT5", Sword: "HT4", NethPot: "LT5", Crystal: "LT3" }
  },
     {
    nick: "piggadestroyer",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/piggadestroyer",
    tiers: { Crystal: "LT5" }
  },
     {
    nick: "Reconectado",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Reconectado",
    tiers: { Crystal: "LT4" }
  },
    {
    nick: "YuchiieBro",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/User",
    tiers: { Crystal: "HT4" }
  },
    {
    nick: "luupc",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/luupc",
    tiers: { Sword: "LT5", Crystal: "LT3" }
  },
    {
    nick: "Garitalobo",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Garitalobo",
    tiers: { Uhc: "LT5" }
  },
   {
    nick: "Phonexii_",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/Phonexii_",
    tiers: { Uhc: "HT5", Sword: "LT4", Axe: " LT5",Crystal: "LT3" }
  },
             {
    nick: "iHk_Fairh",
    points: 20,
    skin: "https://render.crafty.gg/3d/bust/iHk_Fairh",
    tiers: { Sword: "LT2" }
  },
            {
    nick: "p1xelreaper",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/p1xelreaper",
    tiers: { Crystal: "LT4" }
  },
            {
    nick: "ian002",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/ian002",
    tiers: { Mazo: "LT5" }
  },
            {
    nick: "eneaslara",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/eneaslara",
    tiers: { Sword: "HT5" }
  },
            {
    nick: "Rubepro22",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Rubepro22",
    tiers: { Sword: "HT5" }
  },
            {
    nick: "IloveLit",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/IloveLit",
    tiers: { Crystal: "LT5" }
  },
            {
    nick: "XxjolcanoxX",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/XxjolcanoxX",
    tiers: { Uhc: "LT3" }
  },
            {
    nick: "DenataXD",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/DenataXD",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "ivnvnvy",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/ivnvnvy",
    tiers: { Crystal: "LT3" }
  },
           {
    nick: "Sasiilver",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Sasiilver",
    tiers: { Crystal: "LT4" }
  },
           {
    nick: "Tarolero",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Tarolero",
    tiers: { Crystal: "LT5" }
  },
           {
    nick: "Erick12eq",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Erick12eq",
    tiers: { Crystal: "LT4" }
  },
          {
    nick: "Spreendmc_23",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Spreendmc_23",
    tiers: { Crystal: "LT5" }
  },
          {
    nick: "Kezoxito",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/Kezoxito",
    tiers: { Crystal: "HT5" }
  },
       {
    nick: "Anderqzx",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Anderqzx",
    tiers: { NethPot: "LT5" }
  },
       {
    nick: "Piero26a",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Piero26a",
    tiers: { Crystal: "LT4" }
  },
       {
    nick: "Gomezito57",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/Gomezito57",
    tiers: { Crystal: "HT4" }
  },
      {
    nick: "NotName2",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/NotName2",
    tiers: { Uhc: "HT4" }
  },
      {
    nick: "Darihnzv",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Darihnzv",
    tiers: { Uhc: "LT5"  }
  },
      {
    nick: "B_axelprogamer",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/B_axelprogamer",
    tiers: { Crystal: "LT5" }
  },
      {
    nick: "Thebestcol",
    points: 4     ,
    skin: "https://render.crafty.gg/3d/bust/Thebestcol",
    tiers: { Crystal: "HT4" }
  },
      {
    nick: "rafaelcrack00MC",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/rafaelcrack00MC",
    tiers: { Crystal: "LT4" }
  },
      {
    nick: "icegirl",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/icegirl",
    tiers: { Crystal: "LT4" }
  },
     {
    nick: "ITZ_ShadowXZ",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/ITZ_ShadowXZ",
    tiers: { Sword: "HT5" }
  },
     {
    nick: "ItzLarryX",
    points: 0,
    skin: "https://render.crafty.gg/3d/bust/ItzLarryX",
    tiers: { Crystal: "LT700" }
  },
    {
    nick: "Kevlali",
    points: 20,
    skin: "https://render.crafty.gg/3d/bust/Kevlali",
    tiers: { Uhc: "HT5", Sword: "LT4", NethPot: "HT5", Axe: "HT4", Crystal: "LT3", Mazo: "LT4" }
  },
   {
    nick: "OnlyIrving",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/OnlyIrving",
    tiers: { Sword: "LT5" }
  },
   {
    nick: "shadyluxz",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/User",
    tiers: { NethPot: "LT5" }
  },
             {
    nick: "lagatitademateo",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/lagatitademateo",
    tiers: {  Crystal: "HT5" }
  },
            {
    nick: "6yyyyyyyyyyyyyyy",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/6yyyyyyyyyyyyyyy",
    tiers: { Sword: "HT5" }
  },
           {
    nick: "MascotaDeAlan",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/MascotaDeAlan",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "ShokiOxzz",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/ShokiOxzz",
    tiers: { Sword: "LT5", Axe: "HT5" }
  },
           {
    nick: "Lsonly_",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/Lsonly_",
    tiers: { Uhc: "LT3", NethPot: "LT3" }
  },
           {
    nick: "cookedfr_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/cookedfr_",
    tiers: { Uhc: "LT3" }
  },
           {
    nick: "Alstardust",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Alstardust",
    tiers: { NethPot: "LT4"  }
  },
          {
    nick: "fqjdjdq",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/fqjdjdq",
    tiers: { Uhc: "LT3" }
  },
      {
    nick: "Tarolero",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Tarolero",
    tiers: { Uhc: "LT5", Sword: "HT5", NethPot: "LT5",Crystal: "HT5" }
  },
    {
    nick: "ItzRealMeBS900",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/ItzRealMeBS900",
    tiers: { Uhc: "HT5", Sword: "HT5", NethPot: "HT5", Crystal: "HT4" }
  },
              {
    nick: "MRZOMBIEGOD",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/MRZOMBIEGOD",
    tiers: { Crystal: "LT5" }
  },
              {
    nick: "iLovelit",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/iLovelit",
    tiers: { Crystal: "LT5" }
  },
              {
    nick: "zzfio",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/zzfio",
    tiers: { Crystal: "LT5" }
  },
              {
    nick: "NovaJoe",
    points: 23,
    skin: "https://render.crafty.gg/3d/bust/NovaJoe",
    tiers: { Uhc: "HT4", Sword: "LT3", NethPot: "HT5", DiaPot: "LT4", Crystal: "HT5", Axe: "HT5", Mazo: "HT4" }
  },
            {
    nick: "1vxrzide",
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/1vxrzide",
    tiers: { Uhc: "LT5", Sword: "LT3", NethPot: "LT5" }
  },
          {
    nick: "Soylt3dementira",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Soylt3dementira",
    tiers: { NethPot: "LT3" }
  },
          {
    nick: "zTheCris_",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/zTheCris_",
    tiers: { Crystal: "LT5" }
  },
        {
    nick: "XxX_Sarx",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/XxX_Sarx",
    tiers: { Crystal: "LT4", Mazo: "LT5" }
  },
        {
    nick: "RickyEdits",
    points: 18,
    skin: "https://render.crafty.gg/3d/bust/RickyEdits",
    tiers: { Uhc: "LT3", Sword: "LT3", NethPot: "LT3" }
  },
      {
    nick: "Kevin__",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Kevin__",
    tiers: { NethPot: "LT5" }
  },
      {
    nick: "Sharpwa",
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Sharpwa",
    tiers: { Mazo: "LT5" }
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
    nick: "imseet",
    points: 19,
    skin: "https://render.crafty.gg/3d/bust/Reishtd",
    tiers: { Uhc: "HT4", Sword: "LT4", NethPot: "LT3",  Crystal: "HT4", Mazo: "HT5" }
  },
        {
    nick: "imevin",
    points: 12,
    skin: "https://render.crafty.gg/3d/bust/imevin",
    tiers: { Uhc: "LT4", Sword: "HT4", Axe: "HT4", Mazo: "LT5" }
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
    points: 16,
    skin: "https://render.crafty.gg/3d/bust/qrrstr",
    tiers: { Uhc: "LT5", Sword: "LT5", NethPot: "HT4", Axe: " LT5", Smp: "LT5", DiaPot: "LT5", Crystal: "LT3", Mazo: "LT5" }
  },
    {
    nick: "FerrasFornit2009",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/FerrasFornit2009",
    tiers: { Uhc: "HT5", Sword: "LT4", NethPot: "LT5", Axe: " HT5", Crystal: "HT5" }
  },
    {
    nick: "DaddyVarlockkTwT",
    points: 20,
    skin: "https://render.crafty.gg/3d/bust/DaddyVarlockkTwT",
    tiers: { Sword: "LT2" }
  },
    {
    nick: "thiagocpvp",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/thiagocpvp",
    tiers: { Sword: "LT5", NethPot: "LT5", DiaPot: "LT5", Crystal: "HT5", Mazo: "HT5" }
  },
    {
    nick: "Santinator_120T",
    points: 18,
    skin: "https://render.crafty.gg/3d/bust/Santinator_120T",
    tiers: { Uhc: "LT4", Sword: "LT4", NethPot: "HT5", Axe: "LT4", Smp: "LT4", DiaPot: "LT5", Crystal: "LT5", Mazo: "HT5" }
  },
    {
    nick: "ChinaConDrip   ",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/ChinaConDrip",
    tiers: { Sword: "HT5", Mazo: "LT5" }
  },
  {
    nick: "Neziepls",
    points: 25,
    skin: "https://render.crafty.gg/3d/bust/Neziepls",
    tiers: { Uhc: "HT4", Sword: "HT4", NethPot: "HT4", Axe: " LT4", Smp: "LT4", DiaPot: "LT4", Crystal: "LT4", Mazo: "LT5" }
  },
           {
    nick: "Mariv_",
    points: 0,
    skin: "https://render.crafty.gg/3d/bust/Mariv",
    tiers: { Uhc: "HT1", Sword: "HT1", NethPot: "HT1", Axe: " HT2", Crystal: "LT10" }
  },
  {
    nick: "_vxzll",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/_vxzll",
    tiers: { Uhc: "HT5", Sword: "LT4", Crystal: "LT5"  }
  },
  {
    nick: "Foller_MC",
    points: 28,
    skin: "https://render.crafty.gg/3d/bust/Foller_MC",
    tiers: { Uhc: "LT3", Sword: "HT3", NethPot: "LT3", Axe: "HT4", Crystal: "HT5" }
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
    nick: "yNeoo",
    points: 51,
    skin: "https://render.crafty.gg/3d/bust/yNeoo",
    tiers: { Uhc: "LT4", Sword: "LT4", NethPot: "LT3", DiaPot: "LT3", Crystal: "RHT2", Mazo: "LT4" }
  },
  {
    nick: "NoSoyHenry",
    points: 15,
    skin: "https://render.crafty.gg/3d/bust/NoSoyHenry",
    tiers: { Uhc: "LT4", Sword: "LT4", SMP: "LT4", Crystal: "LT4", Mazo: "LT4" }
  },
  {
    nick: "alquix_",
    points: 24,
    skin: "https://render.crafty.gg/3d/bust/alquix_",
    tiers: { Uhc: "LT3", Sword: "LT3", NethPot: "HT4", SMP: "LT3", Crystal: "HT5" }
  },
  {
    nick: "Resuelve",
    points: 51,
    skin: "https://render.crafty.gg/3d/bust/Resuelve",
    tiers: { Uhc: "LT4", Sword: "LT3", NethPot: "HT3",Smp: "LT3", Diapot: "LT3", Crystal: "RLT2" }
  },
  {
    nick: "SKAIL_MC",
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/SKAILLGG",
    tiers: { Sword: "LT3", Mazo: "HT5" }
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




