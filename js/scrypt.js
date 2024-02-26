// Creo la const con il contenitore delle immagini e i pulsanti

const imageContainer = document.querySelector('.image-container');
const up = document.querySelector('.up')
const down = document.querySelector('.down')

let counterImg = 0;

// Creo l'array con tutte le immagini

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

// Avvio il ciclo per aggiungere la classe alle immagini

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  imageContainer.innerHTML += `<img class="image hidden" src="${img}">`
}

// Prendiamo tutte le immagini

const imgCollection = document.getElementsByClassName('image');


// Rimuoviamo la classe hidden alla prima immagine


imgCollection[0].classList.remove('hidden')



// Incrementiamo e decrementiamo il counter con le frecce

up.addEventListener('click', function (){
   // Prima aggiungo la classe hidden

   imgCollection[counterImg--].classList.add('hidden');

  //  BONUS 1

   counterImg = (counterImg - 1 + images.length) % images.length;

   // Dopo la rimuovo
 
   imgCollection[counterImg].classList.remove('hidden');
  
})

down.addEventListener('click', function (){
  // Prima aggiungo la classe hidden

  imgCollection[counterImg++].classList.add('hidden');

  // BONUS 1

  counterImg = (counterImg + 1) % images.length;

  // Dopo la rimuovo

  imgCollection[counterImg].classList.remove('hidden');

})