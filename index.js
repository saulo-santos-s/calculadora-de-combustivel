const etanolPreco = 5.79;
const etanolConsumo = 7; 
const distancia = 100;

const custoEtanol = etanolPreco * distancia;
const etanolTotal = custoEtanol / etanolConsumo;

const gasolinaPreco = 6.66;
const gasolinaConsumo = 10; 

const custoGasolina = gasolinaPreco * distancia;
const gasolinaTotal = custoGasolina / gasolinaConsumo;

console.log("Etanol:", etanolTotal.toFixed(2));
console.log("Gasolina:", gasolinaTotal.toFixed(2));

if (gasolinaTotal < etanolTotal) {
    console.log("Melhor colocar gasolina");
} else {
    console.log("Melhor colocar etanol");
}
