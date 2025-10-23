
const flashcards = {
  "Klær og farger": [
    { no: "Skjorte", noEx: "Jeg kjøpte en ny skjorte i går.", rs: "Košulja", rsEx: "Kupio sam novu košulju juče." },
    { no: "Bukse", noEx: "Han har på seg svarte bukser.", rs: "Pantalone", rsEx: "On nosi crne pantalone." },
    { no: "Kjole", noEx: "Hun liker å bruke kjole om sommeren.", rs: "Haljina", rsEx: "Voli da nosi haljinu leti." },
    { no: "Jakke", noEx: "Jeg trenger en varm jakke.", rs: "Jakna", rsEx: "Treba mi topla jakna." },
    { no: "Sko", noEx: "Disse skoene er komfortable.", rs: "Cipele", rsEx: "Ove cipele su udobne." },
    { no: "Hatt", noEx: "Han har en blå hatt.", rs: "Šešir", rsEx: "On ima plavi šešir." },
    { no: "Skjerf", noEx: "Hun bruker skjerf om vinteren.", rs: "Šal", rsEx: "Ona nosi šal zimi." },
    { no: "Hansker", noEx: "Jeg mistet hanskene mine.", rs: "Rukavice", rsEx: "Izgubio sam svoje rukavice." },
    { no: "Genser", noEx: "Genseren er laget av ull.", rs: "Džemper", rsEx: "Džemper je od vune." },
    { no: "T-skjorte", noEx: "Han har på seg en hvit T-skjorte.", rs: "Majica", rsEx: "On nosi belu majicu." },
    { no: "Rød", noEx: "Eplet er rødt.", rs: "Crvena", rsEx: "Jabuka je crvena." },
    { no: "Blå", noEx: "Himmelen er blå.", rs: "Plava", rsEx: "Nebo je plavo." },
    { no: "Grønn", noEx: "Gresset er grønt.", rs: "Zelena", rsEx: "Trava je zelena." },
    { no: "Svart", noEx: "Katten er svart.", rs: "Crna", rsEx: "Mačka je crna." },
    { no: "Hvit", noEx: "Snøen er hvit.", rs: "Bela", rsEx: "Sneg je beo." }
  ],
  "På butikken": [
    { no: "Melk", noEx: "Jeg kjøper melk hver dag.", rs: "Mleko", rsEx: "Kupujem mleko svaki dan." },
    { no: "Brød", noEx: "Brødet er ferskt.", rs: "Hleb", rsEx: "Hleb je svež." },
    { no: "Ost", noEx: "Vi trenger ost til frokost.", rs: "Sir", rsEx: "Treba nam sir za doručak." },
    { no: "Frukt", noEx: "Jeg liker å spise frukt.", rs: "Voće", rsEx: "Volim da jedem voće." },
    { no: "Grønnsaker", noEx: "Grønnsaker er sunt.", rs: "Povrće", rsEx: "Povrće je zdravo." },
    { no: "Kjøtt", noEx: "Kjøttet er dyrt.", rs: "Meso", rsEx: "Meso je skupo." },
    { no: "Fisk", noEx: "Vi spiser fisk på fredag.", rs: "Riba", rsEx: "Jedemo ribu petkom." },
    { no: "Egg", noEx: "Jeg kjøpte seks egg.", rs: "Jaja", rsEx: "Kupio sam šest jaja." },
    { no: "Handlekurv", noEx: "Handlekurven er full.", rs: "Korpa", rsEx: "Korpa je puna." },
    { no: "Kasse", noEx: "Vi betaler i kassen.", rs: "Blagajna", rsEx: "Plaćamo na blagajni." },
    { no: "Pris", noEx: "Hva er prisen?", rs: "Cena", rsEx: "Kolika je cena?" },
    { no: "Tilbud", noEx: "Det er tilbud på kaffe.", rs: "Popust", rsEx: "Kafa je na popustu." },
    { no: "Butikk", noEx: "Butikken åpner klokken ni.", rs: "Prodavnica", rsEx: "Prodavnica se otvara u devet." },
    { no: "Kvittering", noEx: "Her er kvitteringen.", rs: "Račun", rsEx: "Evo računa." },
    { no: "Penger", noEx: "Jeg har ikke nok penger.", rs: "Novac", rsEx: "Nemam dovoljno novca." }
  ],
  "Transport og reise": [
    { no: "Buss", noEx: "Jeg tar bussen til jobb.", rs: "Autobus", rsEx: "Idem autobusom na posao." },
    { no: "Tog", noEx: "Toget er forsinket.", rs: "Voz", rsEx: "Voz kasni." },
    { no: "Fly", noEx: "Vi reiser med fly.", rs: "Avion", rsEx: "Putujemo avionom." },
    { no: "Bil", noEx: "Han kjører bil.", rs: "Auto", rsEx: "On vozi auto." },
    { no: "Sykkel", noEx: "Hun sykler til skolen.", rs: "Bicikl", rsEx: "Ona ide biciklom u školu." },
    { no: "Billett", noEx: "Jeg kjøpte en billett.", rs: "Karta", rsEx: "Kupio sam kartu." },
    { no: "Stasjon", noEx: "Vi møtes på stasjonen.", rs: "Stanica", rsEx: "Srećemo se na stanici." },
    { no: "Reise", noEx: "Jeg liker å reise.", rs: "Putovanje", rsEx: "Volim da putujem." },
    { no: "Pass", noEx: "Passet mitt er gyldig.", rs: "Pasoš", rsEx: "Moj pasoš je važeći." },
    { no: "Veske", noEx: "Vesken er tung.", rs: "Torba", rsEx: "Torba je teška." },
    { no: "Kart", noEx: "Vi bruker et kart.", rs: "Mapa", rsEx: "Koristimo mapu." },
    { no: "Hotell", noEx: "Vi bor på hotell.", rs: "Hotel", rsEx: "Odsedamo u hotelu." },
    { no: "Taxi", noEx: "Vi tar en taxi.", rs: "Taksi", rsEx: "Uzimamo taksi." },
    { no: "Ferje", noEx: "Ferjen går klokken ti.", rs: "Trajekt", rsEx: "Trajekt polazi u deset." },
    { no: "Bagasje", noEx: "Bagasjen er tung.", rs: "Prtljag", rsEx: "Prtljag je težak." }
  ],
  "Følelser og helse": [
    { no: "Glad", noEx: "Jeg er glad i dag.", rs: "Srećan", rsEx: "Danas sam srećan." },
    { no: "Trist", noEx: "Hun er trist.", rs: "Tužna", rsEx: "Ona je tužna." },
    { no: "Sint", noEx: "Han er sint.", rs: "Ljut", rsEx: "On je ljut." },
    { no: "Syk", noEx: "Jeg føler meg syk.", rs: "Bolan", rsEx: "Osećam se bolesno." },
    { no: "Frisk", noEx: "Jeg er frisk igjen.", rs: "Zdrav", rsEx: "Ponovo sam zdrav." },
    { no: "Hodepine", noEx: "Jeg har hodepine.", rs: "Glavobolja", rsEx: "Imam glavobolju." },
    { no: "Feber", noEx: "Han har feber.", rs: "Temperatura", rsEx: "On ima temperaturu." },
    { no: "Lege", noEx: "Jeg besøker legen.", rs: "Doktor", rsEx: "Idem kod doktora." },
    { no: "Apotek", noEx: "Apoteket er åpent.", rs: "Apoteka", rsEx: "Apoteka je otvorena." },
    { no: "Medisin", noEx: "Jeg tar medisin.", rs: "Lek", rsEx: "Uzimam lek." },
    { no: "Trøtt", noEx: "Jeg er trøtt.", rs: "Umoran", rsEx: "Umoran sam." },
    { no: "Stresset", noEx: "Hun er stresset.", rs: "Pod stresom", rsEx: "Ona je pod stresom." },
    { no: "Sulten", noEx: "Jeg er sulten.", rs: "Gladan", rsEx: "Gladan sam." },
    { no: "Tørst", noEx: "Jeg er tørst.", rs: "Žedan", rsEx: "Žedan sam." },
    { no: "Skadet", noEx: "Han skadet foten.", rs: "Povređen", rsEx: "Povredio je nogu." }
  ],
  "Personlig – Om Amina": [
    { no: "Jeg heter Amina.", noEx: "Jeg heter Amina.", rs: "Zovem se Amina.", rsEx: "Zovem se Amina." },
    { no: "Jeg er 23 år gammel.", noEx: "Jeg er 23 år gammel.", rs: "Imam 23 godine.", rsEx: "Imam 23 godine." },
    { no: "Jeg er kunstner.", noEx: "Jeg er kunstner.", rs: "Ja sam umetnica.", rsEx: "Ja sam umetnica." },
    { no: "Jeg studerer arkitektur i Serbia.", noEx: "Jeg studerer arkitektur i Serbia.", rs: "Studiram arhitekturu u Srbiji.", rsEx: "Studiram arhitekturu u Srbiji." },
    { no: "Jeg liker å lage mat.", noEx: "Jeg liker å lage mat.", rs: "Volim da kuvam.", rsEx: "Volim da kuvam." },
    { no: "Jeg er gift.", noEx: "Jeg er gift.", rs: "Udata sam.", rsEx: "Udata sam." },
    { no: "Jeg giftet meg i Kosovo.", noEx: "Jeg giftet meg i Kosovo.", rs: "Udala sam se na Kosovu.", rsEx: "Udala sam se na Kosovu." },
    { no: "Jeg bor i Serbia.", noEx: "Jeg bor i Serbia.", rs: "Živim u Srbiji.", rsEx: "Živim u Srbiji." },
    { no: "Jeg snakker litt norsk.", noEx: "Jeg snakker litt norsk.", rs: "Govorim malo norveški.", rsEx: "Govorim malo norveški." },
    { no: "Jeg liker å tegne.", noEx: "Jeg liker å tegne.", rs: "Volim da crtam.", rsEx: "Volim da crtam." },
    { no: "Jeg har en katt.", noEx: "Jeg har en katt.", rs: "Imam mačku.", rsEx: "Imam mačku." },
    { no: "Jeg liker å lese bøker.", noEx: "Jeg liker å lese bøker.", rs: "Volim da čitam knjige.", rsEx: "Volim da čitam knjige." },
    { no: "Jeg liker å gå tur.", noEx: "Jeg liker å gå tur.", rs: "Volim da šetam.", rsEx: "Volim da šetam." },
    { no: "Jeg lager kunst.", noEx: "Jeg lager kunst.", rs: "Pravim umetnost.", rsEx: "Pravim umetnost." },
    { no: "Jeg elsker familien min.", noEx: "Jeg elsker familien min.", rs: "Volim svoju porodicu.", rsEx: "Volim svoju porodicu." }
  ]
};

function createCard(cardData) {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => card.classList.toggle('flipped');

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const front = document.createElement('div');
  front.className = 'card-front';
  front.innerHTML = `<strong>${cardData.no}</strong><br><em>${cardData.noEx}</em>`;

  const back = document.createElement('div');
  back.className = 'card-back';
  back.innerHTML = `<strong>${cardData.rs}</strong><br><em>${cardData.rsEx}</em>`;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  return card;
}

function renderFlashcards() {
  const app = document.getElementById('app');
  for (const theme in flashcards) {
    const section = document.createElement('div');
    section.className = 'theme';

    const title = document.createElement('h2');
    title.textContent = `Tema: ${theme}`;
    section.appendChild(title);

    const container = document.createElement('div');
    container.className = 'card-container';

    flashcards[theme].forEach(cardData => {
      container.appendChild(createCard(cardData));
    });

    section.appendChild(container);
    app.appendChild(section);
  }
}

renderFlashcards();
