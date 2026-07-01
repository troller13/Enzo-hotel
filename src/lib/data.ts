export const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/explore", label: "Explorează" },
  { href: "/camere", label: "Camere" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/contact", label: "Contact" },
];

export const hotelInfo = {
  name: "Hotel EZIO",
  address: "Str. Haiducilor 44, 2028 Chișinău, Moldova",
  stars: 3,
  score: 4.1,
  scoreLabel: "Dezamăgitor",
  reviewCount: 40,
  checkIn: "De la 12:30 la 21:30",
  checkOut: "De la 11:00 la 11:30",
  languages: ["Rusă"],
  phone: "+373 22 000 000",
  email: "contact@eziohotel.md",
};

export const scoreCategories = [
  { label: "Personal", score: 5.6 },
  { label: "Facilități", score: 4.4 },
  { label: "Curățenie", score: 4.1 },
  { label: "Confort", score: 4.3 },
  { label: "Raport calitate/preț", score: 4.2 },
  { label: "Locație", score: 5.1 },
];

export const facilities = [
  { name: "Piscină", icon: "pool" },
  { name: "Transfer aeroport", icon: "transfer" },
  { name: "Parcare gratuită", icon: "parking" },
  { name: "Recepție non-stop", icon: "clock" },
  { name: "Camere de familie", icon: "family" },
  { name: "Saună", icon: "sauna" },
  { name: "Bar", icon: "bar" },
  { name: "Aer condiționat", icon: "ac" },
];

export const strengths = [
  "Parcare privată gratuită disponibilă la hotel",
  "Recepție deschisă non-stop, 24 de ore din 24",
  "Transfer de la și spre aeroport, contra cost",
  "Terasă și bar la dispoziția oaspeților",
];

export const rooms = [
  {
    slug: "camera-dubla-deluxe",
    name: "Cameră Dublă Deluxe",
    price: "900 MDL",
    taxes: "+ taxe de 90 MDL",
    size: "20 m²",
    beds: "1 pat dublu extra-large",
    maxGuests: 2,
    available: 2,
    features: ["Balcon", "Vedere", "Cadă", "Aer condiționat", "TV cu ecran plat", "Terasă"],
    description: "O cameră spațioasă, cu balcon și terasă proprie, ideală pentru cupluri.",
    longDescription:
      "Cameră Dublă Deluxe de 20 m², dotată cu un pat dublu extra-large, balcon cu vedere, cadă, aer condiționat, TV cu ecran plat și acces la terasă. Anulare gratuită înainte de check-in, fără plată în avans.",
  },
  {
    slug: "camera-single",
    name: "Cameră Single",
    price: "855 MDL",
    taxes: "+ taxe de 86 MDL",
    size: "20 m²",
    beds: "1 pat dublu extra-large",
    maxGuests: 1,
    available: 3,
    features: ["Balcon", "Vedere", "Cadă", "Aer condiționat", "TV cu ecran plat", "Terasă"],
    description: "Cameră confortabilă, gândită pentru un singur oaspete, cu toate facilitățile incluse.",
    longDescription:
      "Cameră Single de 20 m², perfectă pentru călătorii de afaceri sau sejururi în solitar. Include balcon, cadă, aer condiționat, TV cu ecran plat și acces la terasă. Anulare gratuită, fără card de credit necesar.",
  },
  {
    slug: "camera-dubla-2-paturi",
    name: "Cameră Dublă cu 2 Paturi Duble",
    price: "900 MDL",
    taxes: "+ taxe de 90 MDL",
    size: "18 m²",
    beds: "1 pat de o persoană",
    maxGuests: 1,
    available: 4,
    features: ["Balcon", "Vedere", "Cadă", "Aer condiționat", "TV cu ecran plat", "Terasă"],
    description: "Cameră flexibilă cu două paturi duble, ideală pentru grupuri sau familii.",
    longDescription:
      "Cameră Dublă cu 2 Paturi Duble de 18 m², potrivită pentru grupuri de prieteni sau familii care doresc paturi separate. Balcon, cadă, aer condiționat și TV cu ecran plat incluse. Au mai rămas doar 4 camere disponibile.",
  },
  {
    slug: "camera-familie-gradina",
    name: "Cameră de Familie cu Vedere la Grădină",
    price: "900 MDL",
    taxes: "+ taxe de 90 MDL",
    size: null,
    beds: "1 pat de o persoană",
    maxGuests: 1,
    available: 2,
    features: ["Vedere la grădină", "Cameră de familie", "Aer condiționat", "TV cu ecran plat"],
    description: "Cameră spațioasă cu vedere liniștită la grădină, special amenajată pentru familii.",
    longDescription:
      "Cameră de Familie cu Vedere la Grădină, gândită pentru oaspeții care călătoresc cu cei mici. Atmosferă liniștită, vedere la grădină și toate facilitățile de bază incluse. Au mai rămas doar 2 camere disponibile.",
  },
];

export const faqItems = [
  {
    question: "Hotel EZIO are piscină?",
    answer:
      "Da, acest hotel are piscină. Aflați detaliile despre piscină și alte facilități pe această pagină.",
  },
  {
    question: "Ce tip de camere se pot rezerva la Hotel EZIO?",
    answer:
      "Printre tipurile de cameră de la Hotel EZIO se numără:\n* Dublă\n* Twin\n* de familie",
  },
  {
    question: "În ce interval se poate face check-in și check-out la Hotel EZIO?",
    answer:
      "La Hotel EZIO se poate face check-in începând cu ora 12:30, iar check-out, până la ora 11:30.",
  },
  {
    question: "Cât costă sejurul la Hotel EZIO?",
    answer:
      "Tarifele de la Hotel EZIO pot varia în funcție de sejur (de ex., în funcție de intervalul selectat, de politicile hotelului etc.). Aflați tarifele introducând datele dorite.",
  },
  {
    question: "Ce activități se pot desfășura la Hotel EZIO?",
    answer:
      "Hotel EZIO oferă următoarele activități/servicii (este posibil să se perceapă costuri suplimentare):\n* Saună\n* Piscină",
  },
  {
    question: "Cât de departe este Hotel EZIO de centrul din Chișinău?",
    answer: "Hotel EZIO se află la 4,2 km de centrul din Chișinău.",
  },
];

export const policies = [
  { label: "Check-in", value: "12:30 – 21:30" },
  { label: "Check-out", value: "11:00 – 11:30" },
  { label: "Copii", value: "Bine-veniți la orice vârstă" },
  { label: "Paturi suplimentare", value: "Nu sunt disponibile" },
  { label: "Vârstă minimă check-in", value: "Fără restricții" },
  { label: "Animale de companie", value: "Nu sunt acceptate" },
  { label: "Modalitate de plată", value: "Exclusiv numerar" },
  { label: "Limbi vorbite", value: "Rusă" },
];

export const nearbyPlaces = [
  { name: "Tortuga Camping & Fishing", distance: "2,6 km" },
  { name: "Parcul Grenoble-Costiujeni", distance: "3,9 km" },
  { name: "Parcul Orășelului Codru", distance: "3,9 km" },
  { name: "Muzeul Național de Arheologie și Istorie a Moldovei", distance: "4,7 km" },
  { name: "Grădina Botanică Dendrarium", distance: "4,8 km" },
  { name: "Arcul de Triumf din Chișinău", distance: "5 km" },
  { name: "Parcul Orășenesc Ștefan cel Mare", distance: "5 km" },
  { name: "Aeroportul Internațional Chișinău", distance: "14 km" },
];

export const testimonials = [
  {
    date: "2 Mar. 2026",
    name: "Andrei Bursuc",
    text: "Locația e bună, iar parcarea gratuită a fost foarte utilă. Personalul a fost amabil pe tot parcursul sejurului, deși unele facilități ar putea fi îmbunătățite.",
  },
  {
    date: "25 Mar. 2026",
    name: "Regina Gheorghiu",
    text: "Am apreciat recepția non-stop și terasa. Camera a fost curată, iar raportul calitate-preț este unul corect pentru zona Chișinăului.",
  },
  {
    date: "5 Apr. 2026",
    name: "Iurie Aliev",
    text: "Transferul de la aeroport a fost punctual, iar camera de familie cu vedere la grădină a fost liniștită, perfectă pentru un sejur relaxant.",
  },
];

export const exploreItems = [
  {
    title: "Camere confortabile",
    description:
      "Camerele de la Hotel EZIO sunt dotate cu balcon, cadă, aer condiționat și TV cu ecran plat — gândite pentru un sejur relaxant, fie că ești singur sau în familie.",
  },
  {
    title: "Piscină și terasă",
    description:
      "Bucură-te de piscina hotelului și de terasa exterioară, locul perfect pentru a te relaxa după o zi de explorat Chișinăul.",
  },
  {
    title: "Bar și saună",
    description:
      "Hotelul pune la dispoziție un bar primitor și o saună, facilități incluse pentru un confort suplimentar pe durata sejurului.",
  },
];
