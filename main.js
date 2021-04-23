class Quote {
constructor(a, q) {
    this.author = a;
    this.quote = q;
}
};
const Quotes = [
new Quote("Confucius", "Viata este, de fapt, simpla, dar noi insistam sa o complicam."),
new Quote("Somadeva", "Cel energic dobandeste fericirea, chiar cand e singur si fara sprijin."),
new Quote("Pindar", "Tot ceea ce este frumos este frumos prin necesitate."),
new Quote("Clive Staples Lewis", "Tu nu ai un suflet. Tu esti un suflet. Tu ai un trup."),
new Quote("Walt Disney", "Daca poti visa, poti realiza"),
new Quote("Anonim", "Nu e important cat de mic esti, important e cat de mare vrei sa fi."),
new Quote("Ion Creangă", "Stiu ca sunt prost. Dar cand ma uit in jur prind curaj."),
new Quote("Proverb italian", "Daca tot a luat foc casa, cel putin sa ne incalzim.")
];

function getQuotes() {
let x = Math.floor(Math.random()*Quotes.length);
document.getElementById("author").innerHTML = Quotes[x].author;
document.getElementById("quote").innerHTML = Quotes[x].quote;
};


