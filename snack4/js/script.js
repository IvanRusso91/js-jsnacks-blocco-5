/*
Jsnack 4
Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
Stampa a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//--------------------------------------------------

const biciCorsa = [
  {
    nome: 'bici1',
    peso: 7,
  },
  {
    nome: 'bici2',
    peso: 10,
  },
  {
    nome: 'bici3',
    peso: 6.5,
  },
  {
    nome: 'bici4',
    peso: 6,
  },
  {
    nome: 'bici5',
    peso: 11,
  },
  {
    nome: 'bici6',
    peso: 6.8,
  },
]
console.log(biciCorsa);

const [bici1, bici2, bici3, bici4, bici5, bici6] = biciCorsa;

// Test-----------
// console.log(bici1);
// console.log(bici2);
 console.log(bici3.peso);
// console.log(bici4);
// console.log(bici5);
// console.log(bici6);
//-----------/Test.
let pesoMinTemp = bici1.peso;

console.log(pesoMinTemp);

for(let bici of biciCorsa){


  pesoMinTemp = (bici.peso < pesoMinTemp ) ? bici.peso : pesoMinTemp;

  const output=
  `
  <div>
    <ul>
      <li>${bici.nome} : ${bici.peso}g</li>
    </ul>
  </div>
  `;

  document.querySelector('.stampa').innerHTML += output;
  document.querySelector('.light').innerHTML = `La bici più leggera pesa: ${pesoMinTemp}`;
}

console.log('---',pesoMinTemp);