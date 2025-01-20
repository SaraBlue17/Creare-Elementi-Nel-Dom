// Cerca tutti gli elementi con classe "paragrafo".
const $paragrafo = document.getElementsByClassName("paragrafo");
console.log("Cerca tutti gli elementi con classe 'paragrafo'", $paragrafo);

// Cerca l' elemento con id "elemento-3".
const $elemento3 = document.getElementById("elemento-3");
console.log("Cerca l'elemento con id 'elemento-3'", $elemento3);

// Cerca tutti gli elementi h2 della pagina.
const $elementiH2 = document.querySelectorAll("h2");
console.log("Cerca tutti gli elementi h2 della pagina", $elementiH2);

// Video soluzione

const paragraphs = document.getElementsByClassName("paragrafo");
console.log(paragraphs);
// Cerca l'elemento con id "elemento-3"
const elementId3 = document.getElementById("elemento-3");
console.log(elementId3);
// Cerca tutti gli elementi h2 della pagina
const allTitlesH2 = document.querySelectorAll("h2");
console.log(allTitlesH2);
