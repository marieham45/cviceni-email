/*

E-mail, pozdravy
Vytvořte si repozitář ze šablony cviceni-email se stránkou obsahující šablonu jednoduchého e-mailu.

Každý e-mail je třeba zakončit zdvořilým pozdravem.


*/

/*
1. V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
*/

const closingEl = document.querySelector(".email__closing");

// const goodbye = () => {
//   closingEl.textContent = "Na shledanou";
// };

/*
2. Zavolejte funkci goodbye() na konci souboru index.js. Ověřte, že se na zobrazené stránce správně změnil pozdrav na konci e-mailu.

*/

//goodbye();

/*
3. Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem.
*/

const goodbye = (name) => {
  closingEl.textContent = `S pozdravem ${name}`;
};

//goodbye("Marie");

/*
Pokračujte na stránce z přechozího příkladu.

*/

/*
1. Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru.

*/
const subjectEl = document.querySelector(".email__subject");

const fillSubject = (subject) => {
  subjectEl.textContent = subject;
};

/*
2. Zavolejte funkci na konci souboru index.js a vykoušejte si nastavit předmět e-mailu na nějaký smysluplný text.

*/

fillSubject("Nabídka práce: frontend vývojář*ka");

/*
3. Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.

*/
const bodyEl = document.querySelector(".email__body");

// const fillBody = (body) => {
//   bodyEl.textContent = body;
// };

/*
4. Zavolejte funkci na konci souboru index.js a ověřte, že v zobrazené stránce správně změní tělo e-mailu.

*/

// fillBody("Skvělá práce pro šikovné juniory! ...");

/*
5. Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.
*/

const fillBody = (body, name) => {
  bodyEl.textContent = body;
  goodbye(name);
};

fillBody("Skvělá práce pro šikovné juniory! ...", "Michaela");
