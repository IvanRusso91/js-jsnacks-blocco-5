/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

//--------------------------------------------------

const zucchine = [
  {
    name:'Zucchina nera',
    lunghezza: 15,
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
    lunghezza: 14,
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

for (let ortaggio of zucchine){
  let lMaxZucchina= [];
  let lMinZucchina= [];

  if(ortaggio.lunghezza > 15){
    lMaxZucchina.push(ortaggio.lunghezza);
    console.log(lMaxZucchina);
    document.querySelector('.serra1').innerHTML += `
      <ul>
        <li>${ortaggio.name} : ${lMaxZucchina}  cm</li>
      </ul>
      `;
  }else{
    lMinZucchina.push(ortaggio.lunghezza)
    console.log('-----',lMinZucchina );
    document.querySelector('.serra2').innerHTML += `
      <ul>
        <li>${ortaggio.name} : ${lMinZucchina} cm</li>
      </ul>
    `;
  }

}