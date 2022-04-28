/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

//-------------------------------------------------

const zucchine = [
  {
    name:'Zucchina nera',
    lunghezza: 21,
    peso: 200,
  },
  {
    name: 'Zucchino romanesco',
    lunghezza: 11,
    peso: 400 ,
  },
  {
    name:'Zucchino fiorentino',
    lunghezza: 30,
    peso: 350,
  },
  {
    name:'Zucchina napoletana',
    lunghezza: 28,
    peso: 300,
  },
  {
    name:'Zucchine tonde',
    lunghezza: 20,
    peso: 1000,
  },
  {
    name:'Zucchine trombetta',
    lunghezza: 110,
    peso: 380,
  },
  {
    name:'Zucchina pâtisson',
    lunghezza: 20,
    peso: 320,
  },
  {
    name:'Zucchino giallo',
    lunghezza: 15,
    peso: 250,
  },
  {
    name:'Zucchino rugoso friulano',
    lunghezza: 120,
    peso: 600,
  },
  {
    name:'Zucchina Crookneck',
    lunghezza: 25,
    peso: 300 ,
  }
  
];

let totpeso = 0;

for(let ortaggio of zucchine){
  totpeso += ortaggio.peso;
  const output=
  `
  <div>
    <ul>
      <li>${ortaggio.name} : ${ortaggio.peso}g</li>
    </ul>
  </div>
  `
  
  document.querySelector('.serra').innerHTML += output;
  document.querySelector('.somma').innerHTML =`il peso totale della mia cesta è ${totpeso}g e dentro troverete questo:`;
};




