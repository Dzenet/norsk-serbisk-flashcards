const lessons = {
    "Leksjon 1: Hilsener og høflighetsfraser": [
        { norsk: "Hei!", serbisk: "Zdravo!" },
        { norsk: "God morgen", serbisk: "Dobro jutro" },
        { norsk: "God kveld", serbisk: "Dobro veče" },
        { norsk: "Ha det!", serbisk: "Doviđenja!" },
        { norsk: "Vær så snill", serbisk: "Molim" },
        { norsk: "Takk", serbisk: "Hvala" },
        { norsk: "Unnskyld", serbisk: "Izvini" },
        { norsk: "Hvordan har du det?", serbisk: "Kako si?" },
        { norsk: "Jeg har det bra", serbisk: "Dobro sam" },
        { norsk: "Hyggelig å møte deg", serbisk: "Drago mi je što smo se upoznali" },
    ],
    "Leksjon 2: Familie og relasjoner": [
        { norsk: "Familie", serbisk: "Porodica" },
        { norsk: "Mor", serbisk: "Majka" },
        { norsk: "Far", serbisk: "Otac" },
        { norsk: "Søster", serbisk: "Sestra" },
        { norsk: "Bror", serbisk: "Brat" },
        { norsk: "Barn", serbisk: "Dete" },
        { norsk: "Kone", serbisk: "Supruga" },
        { norsk: "Mann", serbisk: "Suprug" },
        { norsk: "Foreldre", serbisk: "Roditelji" },
        { norsk: "Bestemor", serbisk: "Baka" },
    ],
    "Leksjon 3: Tall og telling": [
        { norsk: "En", serbisk: "Jedan" },
        { norsk: "To", serbisk: "Dva" },
        { norsk: "Tre", serbisk: "Tri" },
        { norsk: "Fire", serbisk: "Četiri" },
        { norsk: "Fem", serbisk: "Pet" },
        { norsk: "Seks", serbisk: "Šest" },
        { norsk: "Sju", serbisk: "Sedam" },
        { norsk: "Åtte", serbisk: "Osam" },
        { norsk: "Ni", serbisk: "Devet" },
        { norsk: "Ti", serbisk: "Deset" },
    ],
    "Leksjon 4: Mat og drikke": [
        { norsk: "Mat", serbisk: "Hrana" },
        { norsk: "Drikke", serbisk: "Piće" },
        { norsk: "Vann", serbisk: "Voda" },
        { norsk: "Brød", serbisk: "Hleb" },
        { norsk: "Ost", serbisk: "Sir" },
        { norsk: "Melk", serbisk: "Mleko" },
        { norsk: "Kaffe", serbisk: "Kafa" },
        { norsk: "Te", serbisk: "Čaj" },
        { norsk: "Frukt", serbisk: "Voće" },
        { norsk: "Grønnsaker", serbisk: "Povrće" },
    ],
    "Leksjon 5: Dager, måneder og tid": [
        { norsk: "Mandag", serbisk: "Ponedeljak" },
        { norsk: "Tirsdag", serbisk: "Utorak" },
        { norsk: "Onsdag", serbisk: "Sreda" },
        { norsk: "Torsdag", serbisk: "Četvrtak" },
        { norsk: "Fredag", serbisk: "Petak" },
        { norsk: "Lørdag", serbisk: "Subota" },
        { norsk: "Søndag", serbisk: "Nedelja" },
        { norsk: "Dag", serbisk: "Dan" },
        { norsk: "Måned", serbisk: "Mesec" },
        { norsk: "År", serbisk: "Godina" },
    ],
};

let currentLesson = Object.keys(lessons)[0];
let currentIndex = 0;
let showingNorsk = true;

const selector = document.getElementById("lessonSelector");
const card = document.getElementById("flashcard");

Object.keys(lessons).forEach(lesson => {
    const option = document.createElement("option");
    option.value = lesson;
    option.textContent = lesson;
    selector.appendChild(option);
});

selector.addEventListener("change", () => {
    currentLesson = selector.value;
    currentIndex = 0;
    showingNorsk = true;
    updateCard();
});

card.addEventListener("click", () => {
    showingNorsk = !showingNorsk;
    updateCard();
});

function updateCard() {
    const cardData = lessons[currentLesson][currentIndex];
    card.textContent = showingNorsk ? cardData.norsk : cardData.serbisk;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % lessons[currentLesson].length;
    showingNorsk = true;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + lessons[currentLesson].length) % lessons[currentLesson].length;
    showingNorsk = true;
    updateCard();
}

updateCard();
