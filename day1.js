let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

console.log('---------------------------------------------------------------------------------');
if (numeroUm == stringUm) {
    console.log('as variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.');
} else {
    console.log('As variáveis numeroUm e stringUm não têm o mesmo valor');
}
console.log('O tipo de numeroUm é: ' + typeof numeroUm);
console.log('O tipo de stringUm é: ' + typeof stringUm);
console.log('---------------------------------------------------------------------------------');

if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo');
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo valor.');
}
console.log('O tipo de numeroTrinta é: ' + typeof numeroTrinta);
console.log('O tipo de stringTrinta é: ' + typeof stringTrinta);
console.log('---------------------------------------------------------------------------------');

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes');
} else {
   console.log('As variáveis numeroDez e stringDez não têm o mesmo valor');
}
console.log('O tipo de numeroDez é: ' + typeof numeroDez);
console.log('O tipo de stringDez é: ' + typeof stringDez);
console.log('---------------------------------------------------------------------------------');
