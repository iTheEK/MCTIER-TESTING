// Lista de jugadores
const players = [
          {
    nick: "yiimii",
    points: 48,
    skin: "https://render.crafty.gg/3d/bust/yiimi",
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
    points: 8,
    skin: "https://render.crafty.gg/3d/bust/MJC_",
    tiers: { Uhc: "HT5", Crystal: "LT3" }
  },
         {
    nick: "Zkwre",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/Zkwre",
    tiers: { Uhc: "LT3" }
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
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/ItzManux_x",
    tiers: { Crystal: "LT3" }
  },
       {
    nick: "WhsMqthh",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/WhsMqthh",
    tiers: { Crystal: "LT4" }
  },
       {
    nick: "Foxted",
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/Foxted",
    tiers: { Uhc: "LT4" }
  },
       {
    nick: "O2K4R_",
    points: 2,
    skin: "https://render.crafty.gg/3d/bust/O2K4R_",
    tiers: { Crystal: "HT5" }
  },
       {
    nick: "qaw_",
    points: 6,
    skin: "https://render.crafty.gg/3d/bust/qaw_",
    tiers: { Crystal: "LT3" }
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
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Bry_10",
    tiers: { Crystal: "LT5" }
  },
      {
    nick: "Nyzx9",
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/Nyzx9",
    tiers: { Crystal: "HT4" }
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
    points: 4,
    skin: "https://render.crafty.gg/3d/bust/Aaronbkcmb",
    tiers: { NethPot: "HT4" }
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
    points: 1,
    skin: "https://render.crafty.gg/3d/bust/Leolgve",
    tiers: { Uhc: "LT5", NethPot: "LT4" }
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
    points: 3,
    skin: "https://render.crafty.gg/3d/bust/samuu_MC",
    tiers: { Mazo: "LT4"  }
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
    points: 0,
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
    nick: "PXOJA",
    points: 20,
    skin: "https://render.crafty.gg/3d/bust/PXOJA",
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
    tiers: { Mazo: "LT5"  }
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
    points: 9,
    skin: "https://render.crafty.gg/3d/bust/Kevlali",
    tiers: { Uhc: "HT5", NethPot: "LT5", Crystal: "LT3" }
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
    tiers: { Uhc: "LT3", }
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
    nick: "OmniJoe",
    points: 10,
    skin: "https://render.crafty.gg/3d/bust/OmniJoe",
    tiers: { Sword: "LT3", Nethpot: "HT5", DiaPot: "LT4", Crystal: "LT5" }
  },
            {
    nick: "1vxrzide",
    points: 7,
    skin: "https://render.crafty.gg/3d/bust/1vxrzide",
    tiers: { Uhc: "HT5", Sword: "LT4", NethPot: "HT5" }
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
    points: 11,
    skin: "https://render.crafty.gg/3d/bust/imevin",
    tiers: { Uhc: "LT4", Sword: "HT4", Axe: "HT4" }
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
    nick: "Reinsertada",
    points: 20,
    skin: "https://render.crafty.gg/3d/bust/Reinsertada",
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
    points: 37,
    skin: "https://render.crafty.gg/3d/bust/Kleveri_Tea",
    tiers: { Uhc: "LT3", Sword: "LT3", Nethpot: "LT3", Smp: "LT3", Diapot: "LT3", Axe: "HT5", Crystal: "LT4", Mazo: "HT5" }
  },
  {
    nick: "Neziepls",
    points: 25,
    skin: "https://render.crafty.gg/3d/bust/Neziepls",
    tiers: { Uhc: "HT4", Sword: "HT4", NethPot: "HT4", Axe: " LT4", Smp: "LT4", DiaPot: "LT4", Crystal: "LT4", Mazo: "LT5" }
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
    nick: "sNeoo",
    points: 48,
    skin: "https://render.crafty.gg/3d/bust/PimpoyoEscariote",
    tiers: { Uhc: "LT4", Sword: "LT4", NethPot: "LT3", DiaPot: "LT3", Crystal: "RHT2" }
  },
  {
    nick: "NoSoyHenry",
    points: 15,
    skin: "https://render.crafty.gg/3d/bust/NoSoyHenry",
    tiers: { Uhc: "LT4", Sword: "LT4", SMP: "LT4", Crystal: "LT4", Mazo: "LT4" }
  },
  {
    nick: "alquixss",
    points: 24,
    skin: "https://render.crafty.gg/3d/bust/alquixss",
    tiers: { Uhc: "LT3", Sword: "LT3", NethPot: "HT4", SMP: "LT3", Crystal: "HT5" }
  },
  {
    nick: "Resuelve",
    points: 42,
    skin: "https://render.crafty.gg/3d/bust/Resuelve",
    tiers: { Uhc: "LT4", Sword: "LT3", NethPot: "HT3",Smp: "LT3", Diapot: "LT3", Crystal: "HT3" }
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





