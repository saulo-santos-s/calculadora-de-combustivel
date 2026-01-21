# calculadora-de-combustivel
const precoCombsutivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;
const litrosconsumidos = distanciaEmKm / kmPorLitro;
const custotoal = litrosconsumidos * precoCombsutivel;
console.log(custotoal.toFixed(2)); 

