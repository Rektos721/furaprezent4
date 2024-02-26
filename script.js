// Lista dostępnych nazw plików obrazów kotów
const koty = [
    'images/kot1.jpg',
    'images/kot2.jpg',
    'images/kot3.jpg',
];

// Lista dostępnych ścieżek dźwięków mruczenia
const mruczenia = [
    'audio/mruczenie1.mp3',
    'audio/mruczenie2.mp3',
    'audio/mruczenie3.mp3',

];

// Funkcja obsługująca kliknięcie na kotka
function obslugaKlikniecia(kot) {
    // Usunięcie kotka
    kot.remove();
}

// Funkcja generująca koty na stronie
function generujKotaLosowo() {
    const kotUrl = koty[Math.floor(Math.random() * koty.length)]; // Losowo wybierz URL obrazu kotka
    const pozycja = losowaPozycja(); // Wylosuj losową pozycję na stronie
    const kot = document.createElement('img');
    kot.src = kotUrl;
    kot.style.position = 'absolute';
    kot.style.left = pozycja.x + 'px';
    kot.style.top = pozycja.y + 'px';
    kot.style.width = '4%'; // Możesz dostosować rozmiar obrazu, jeśli chcesz
    kot.style.height = 'auto';
    kot.style.cursor = 'pointer'; // Kursor wskazujący na możliwość interakcji z kotem
    kot.addEventListener('click', function() {
        // Zmiana rozmiaru kotka na pełen ekran
        kot.style.width = '100%';
        kot.style.height = 'auto'; // ustaw na auto, aby zachować proporcje obrazu
        kot.style.left = '0';
        kot.style.top = '0';
        kot.style.zIndex = '9999';
        // Odtworzenie losowego dźwięku mruczenia
        const audio = new Audio();
        audio.src = mruczenia[Math.floor(Math.random() * mruczenia.length)];
        audio.onloadedmetadata = function() {
            audio.play();
        };
        // Obsługa ponownego kliknięcia na kotka - usuwanie kotka
        obslugaKlikniecia(kot);
        // Wygenerowanie nowego kotka
        generujKotaLosowo();
    });
    document.body.appendChild(kot);
}

// Wywołaj funkcję generującą koty na stronie
generujKotaLosowo();
