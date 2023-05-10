//Programa: Métodos JS
//Aluno: Daniel Luz
//Data: 10/05/2023

// 1- Método Random retorna dois valores. 
// 2- O maior valor será retornado com Max.
// 3- Esse valor será elevado a potencia de 2.
// 4- Obteremos o valor da raiz quadrada da potência, isto é, o "número max".  

let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

console.log("Número 1: " + num1);
console.log("Número 2: " + num2);

let maior = Math.max(num1, num2);
console.log("Maior valor: " + maior);

let potencia = Math.pow(maior, 2);
console.log("Valor elevado ao quadrado: " + potencia);

let raiz = Math.sqrt(potencia);
console.log("Raiz quadrada do valor elevado ao quadrado: " + raiz);