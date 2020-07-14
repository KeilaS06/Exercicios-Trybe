// Faça um programa que retorne o maior de três números.  //
// Defina no começo do programa três variáveis com os valores que serão comparados. //

let valor1 = 15;
let valor2 = 30;
let valor3 = 45;

if ((valor1 > valor2) && (valor1 > valor3)) {
    console.log("O maior número é " + valor1);

} else if ((valor2 > valor1) && (valor2 > valor3)) {
    console.log("O maior número é " + valor2);

} else {
    console.log("O maior número é " + valor3);
}   