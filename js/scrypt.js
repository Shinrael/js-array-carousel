// Creo l'array con tutte le immagini

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

// Creo la const con il contenitore delle immagini

const imageContainer = document.querySelector('.image-container');

// Avvio il ciclo per aggiungere la classe alle immagini

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  imageContainer.innerHTML += `<img class="image hidden" src="${img}">`
}

// Prendiamo tutte le immagini

const imgCollection = document.getElementsByClassName('image');


// Rimuoviamo la classe hidden alla prima immagine


imgCollection[0].classList.remove('hidden')