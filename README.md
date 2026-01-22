#  Cálculo de Combustível – Etanol x Gasolina

Este projeto em **JavaScript** calcula o custo total de uma viagem utilizando **etanol** e **gasolina**, com base no preço do combustível, consumo do veículo (km/l) e distância percorrida.  
Ao final, o programa informa **qual combustível é mais vantajoso**.

---

## Objetivo

Praticar conceitos básicos de **lógica de programação** em JavaScript, como:
- Variáveis (`const`)
- Operações matemáticas
- Estruturas condicionais (`if / else`)
- Uso do `console.log`

---

##  Como funciona

O programa:
1. Define o preço do etanol e da gasolina
2. Define o consumo do veículo (km por litro)
3. Define a distância da viagem
4. Calcula o custo total para cada combustível
5. Compara os valores e informa qual é o melhor

---

##  Código principal

```js
const etanolPreco = 5.79;
const etanolConsumo = 7; // km/l
const distancia = 100; // km

const custoEtanol = etanolPreco * distancia;
const etanolTotal = custoEtanol / etanolConsumo;

const gasolinaPreco = 6.66;
const gasolinaConsumo = 10; // km/l

const custoGasolina = gasolinaPreco * distancia;
const gasolinaTotal = custoGasolina / gasolinaConsumo;

console.log("Etanol:", etanolTotal.toFixed(2));
console.log("Gasolina:", gasolinaTotal.toFixed(2));

if (gasolinaTotal < etanolTotal) {
    console.log("Melhor colocar gasolina");
} else {
    console.log("Melhor colocar etanol");
}
