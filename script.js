
const lessons = {
  "Leksjon 6: Klær og farger": [
    { norsk: "Klær", serbisk: "Odeća", eksempel: "Jeg liker fargerike klær. → Volim šarenu odeću." },
    { norsk: "Skjorte", serbisk: "Košulja", eksempel: "Han har på seg en hvit skjorte. → On nosi belu košulju." },
    { norsk: "Bukse", serbisk: "Pantalone", eksempel: "Jeg kjøpte nye bukser. → Kupio sam nove pantalone." },
    { norsk: "Kjole", serbisk: "Haljina", eksempel: "Hun har en vakker kjole. → Ona ima lepu haljinu." },
    { norsk: "Jakke", serbisk: "Jakna", eksempel: "Ta på deg jakken, det er kaldt. → Obuci jaknu, hladno je." },
    { norsk: "Sko", serbisk: "Cipele", eksempel: "Hvor er skoene mine? → Gde su moje cipele?" },
    { norsk: "Hatt", serbisk: "Šešir", eksempel: "Han har en svart hatt. → On ima crni šešir." },
    { norsk: "Rød", serbisk: "Crvena", eksempel: "Jeg liker røde blomster. → Volim crveno cveće." },
    { norsk: "Blå", serbisk: "Plava", eksempel: "Himmelen er blå. → Nebo je plavo." },
    { norsk: "Grønn", serbisk: "Zelena", eksempel: "Gresset er grønt. → Trava je zelena." }
  ],
  "Leksjon 7: På butikken": [
    { norsk: "Butikk", serbisk: "Prodavnica", eksempel: "Jeg går til butikken. → Idem u prodavnicu." },
    { norsk: "Pris", serbisk: "Cena", eksempel: "Hva er prisen? → Kolika je cena?" },
    { norsk: "Tilbud", serbisk: "Popust", eksempel: "Det er tilbud på melk. → Ima popust na mleko." },
    { norsk: "Handle", serbisk: "Kupovati", eksempel: "Vi skal handle mat. → Idemo da kupimo hranu." },
    { norsk: "Vogn", serbisk: "Kolica", eksempel: "Ta en handlevogn. → Uzmi kolica." },
    { norsk: "Kasse", serbisk: "Blagajna", eksempel: "Betal ved kassen. → Plati na blagajni." },
    { norsk: "Kvittering", serbisk: "Račun", eksempel: "Her er kvitteringen. → Evo računa." },
    { norsk: "Penger", serbisk: "Novac", eksempel: "Jeg har ikke nok penger. → Nemam dovoljno novca." },
    { norsk: "Kort", serbisk: "Kartica", eksempel: "Jeg betaler med kort. → Plaćam karticom." },
    { norsk: "Kunde", serbisk: "Kupac", eksempel: "Kunden venter. → Kupac čeka." }
  ],
  "Leksjon 8: Transport og reise": [
    { norsk: "Bil", serbisk: "Auto", eksempel: "Vi kjører bil. → Vozimo se autom." },
    { norsk: "Buss", serbisk: "Autobus", eksempel: "Bussen er forsinket. → Autobus kasni." },
    { norsk: "Tog", serbisk: "Voz", eksempel: "Toget går klokken åtte. → Voz polazi u osam." },
    { norsk: "Fly", serbisk: "Avion", eksempel: "Vi reiser med fly. → Putujemo avionom." },
    { norsk: "Sykkel", serbisk: "Bicikl", eksempel: "Han sykler til jobb. → On ide biciklom na posao." },
    { norsk: "Reise", serbisk: "Putovati", eksempel: "Jeg liker å reise. → Volim da putujem." },
    { norsk: "Billett", serbisk: "Karta", eksempel: "Hvor er billetten min? → Gde je moja karta?" },
    { norsk: "Stasjon", serbisk: "Stanica", eksempel: "Vi møtes på stasjonen. → Nalazimo se na stanici." },
    { norsk: "Flyplass", serbisk: "Aerodrom", eksempel: "Flyet lander på flyplassen. → Avion sleće na aerodrom." },
    { norsk: "Kart", serbisk: "Mapa", eksempel: "Jeg trenger et kart. → Treba mi mapa." }
  ],
  "Leksjon 9: Følelser og helse": [
    { norsk: "Glad", serbisk: "Srećan", eksempel: "Jeg er glad i dag. → Danas sam srećan." },
    { norsk: "Trist", serbisk: "Tužan", eksempel: "Han er trist. → On je tužan." },
    { norsk: "Sint", serbisk: "Ljut", eksempel: "Hun er sint på meg. → Ona je ljuta na mene." },
    { norsk: "Sliten", serbisk: "Umoran", eksempel: "Jeg er sliten etter jobb. → Umoran sam posle posla." },
    { norsk: "Syk", serbisk: "Bolesan", eksempel: "Jeg føler meg syk. → Osećam se bolesno." },
    { norsk: "Frisk", serbisk: "Zdrav", eksempel: "Han er frisk igjen. → On je opet zdrav." },
    { norsk: "Hode", serbisk: "Glava", eksempel: "Jeg har vondt i hodet. → Boli me glava." },
    { norsk: "Mage", serbisk: "Stomak", eksempel: "Magen min gjør vondt. → Boli me stomak." },
    { norsk: "Feber", serbisk: "Temperatura", eksempel: "Jeg har feber. → Imam temperaturu." },
    { norsk: "Lege", serbisk: "Doktor", eksempel: "Jeg må til legen. → Moram kod doktora." }
  ]
};

let currentLesson = [];
let currentIndex = 0;
let showingNorsk = true;

const lessonSelect = document.getElementById("lessonSelect");
const card = document.getElementById("flashcard");

Object.keys(lessons).forEach(lesson => {
  const option = document.createElement("option");
  option.value = lesson;
  option.textContent = lesson;
  lessonSelect.appendChild(option);
});

lessonSelect.addEventListener("change", () => {
  currentLesson = lessons[lessonSelect.value];
  currentIndex = 0;
  showingNorsk = true;
  card.textContent = currentLesson[currentIndex].norsk;
});

card.addEventListener("click", () => {
  if (!currentLesson.length) return;
  if (showingNorsk) {
    card.textContent = currentLesson[currentIndex].serbisk + "\n" + currentLesson[currentIndex].eksempel;
  } else {
    card.textContent = currentLesson[currentIndex].norsk;
  }
  showingNorsk = !showingNorsk;
});

card.addEventListener("dblclick", () => {
  if (!currentLesson.length) return;
  currentIndex = (currentIndex + 1) % currentLesson.length;
  showingNorsk = true;
  card.textContent = currentLesson[currentIndex].norsk;
});
