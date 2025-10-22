
const lessons = {
  'Leksjon 6: Klær og farger': [
    { norsk: "Klær", serbisk: "Odeća", eksempel: "Jeg kjøper klær i butikken." },
    { norsk: "Skjorte", serbisk: "Košulja", eksempel: "Han har på seg en hvit skjorte." },
    { norsk: "Bukse", serbisk: "Pantalone", eksempel: "Jeg trenger nye bukser." },
    { norsk: "Kjole", serbisk: "Haljina", eksempel: "Hun liker å bruke kjole." },
    { norsk: "Jakke", serbisk: "Jakna", eksempel: "Ta på deg jakken, det er kaldt." },
    { norsk: "Sko", serbisk: "Cipele", eksempel: "Hvor er skoene mine?" },
    { norsk: "Hatt", serbisk: "Šešir", eksempel: "Han har en stor hatt." },
    { norsk: "Rød", serbisk: "Crvena", eksempel: "Eplet er rødt." },
    { norsk: "Blå", serbisk: "Plava", eksempel: "Himmelen er blå." },
    { norsk: "Grønn", serbisk: "Zelena", eksempel: "Gresset er grønt." }
  ],
  'Leksjon 7: På butikken': [
    { norsk: "Butikk", serbisk: "Prodavnica", eksempel: "Jeg går til butikken." },
    { norsk: "Pris", serbisk: "Cena", eksempel: "Hva er prisen på melk?" },
    { norsk: "Tilbud", serbisk: "Popust", eksempel: "Det er tilbud på kaffe." },
    { norsk: "Handle", serbisk: "Kupovati", eksempel: "Vi skal handle mat." },
    { norsk: "Vogn", serbisk: "Kolica", eksempel: "Ta en vogn ved inngangen." },
    { norsk: "Kasse", serbisk: "Blagajna", eksempel: "Betal ved kassen." },
    { norsk: "Kvittering", serbisk: "Račun", eksempel: "Her er kvitteringen din." },
    { norsk: "Penger", serbisk: "Novac", eksempel: "Jeg har ikke nok penger." },
    { norsk: "Kort", serbisk: "Kartica", eksempel: "Kan jeg betale med kort?" },
    { norsk: "Kunde", serbisk: "Kupac", eksempel: "Kunden venter på hjelp." }
  ],
  'Leksjon 8: Transport og reise': [
    { norsk: "Bil", serbisk: "Auto", eksempel: "Vi kjører bil til Oslo." },
    { norsk: "Buss", serbisk: "Autobus", eksempel: "Bussen går klokken åtte." },
    { norsk: "Tog", serbisk: "Voz", eksempel: "Toget er forsinket." },
    { norsk: "Fly", serbisk: "Avion", eksempel: "Vi reiser med fly." },
    { norsk: "Sykkel", serbisk: "Bicikl", eksempel: "Han sykler til jobb." },
    { norsk: "Reise", serbisk: "Putovati", eksempel: "Vi liker å reise sammen." },
    { norsk: "Billett", serbisk: "Karta", eksempel: "Jeg trenger en billett." },
    { norsk: "Stasjon", serbisk: "Stanica", eksempel: "Vi møtes på stasjonen." },
    { norsk: "Flyplass", serbisk: "Aerodrom", eksempel: "Flyet går fra flyplassen." },
    { norsk: "Kart", serbisk: "Mapa", eksempel: "Jeg ser på kartet." }
  ],
  'Leksjon 9: Følelser og helse': [
    { norsk: "Glad", serbisk: "Srećan", eksempel: "Jeg er glad i dag." },
    { norsk: "Trist", serbisk: "Tužan", eksempel: "Hun er trist." },
    { norsk: "Sint", serbisk: "Ljut", eksempel: "Han er sint på meg." },
    { norsk: "Sliten", serbisk: "Umoran", eksempel: "Jeg er sliten etter jobb." },
    { norsk: "Syk", serbisk: "Bolesan", eksempel: "Jeg føler meg syk." },
    { norsk: "Frisk", serbisk: "Zdrav", eksempel: "Hun er frisk igjen." },
    { norsk: "Hode", serbisk: "Glava", eksempel: "Jeg har vondt i hodet." },
    { norsk: "Mage", serbisk: "Stomak", eksempel: "Han har vondt i magen." },
    { norsk: "Feber", serbisk: "Temperatura", eksempel: "Jeg har feber." },
    { norsk: "Lege", serbisk: "Doktor", eksempel: "Jeg må gå til legen." }
  ]
};

const lessonSelect = document.getElementById("lessonSelect");
const card = document.getElementById("flashcard");

Object.keys(lessons).forEach(lesson => {
  const option = document.createElement("option");
  option.value = lesson;
  option.textContent = lesson;
  lessonSelect.appendChild(option);
});

let currentLesson = lessonSelect.value;
let currentIndex = 0;
let showingFront = true;

function updateCard() {
  const entry = lessons[currentLesson][currentIndex];
  card.textContent = showingFront ? entry.norsk : `${entry.serbisk}\n\n${entry.eksempel}`;
}

lessonSelect.addEventListener("change", () => {
  currentLesson = lessonSelect.value;
  currentIndex = 0;
  showingFront = true;
  updateCard();
});

card.addEventListener("click", () => {
  showingFront = !showingFront;
  updateCard();
});

card.addEventListener("dblclick", () => {
  currentIndex = (currentIndex + 1) % lessons[currentLesson].length;
  showingFront = true;
  updateCard();
});

lessonSelect.value = Object.keys(lessons)[0];
currentLesson = lessonSelect.value;
updateCard();
