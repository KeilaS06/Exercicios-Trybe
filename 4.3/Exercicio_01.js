// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.//

let n = 6;
let asteriscos = "*"; 
let vazia = "";

for (let i = 0; i < n; i += 1) {      // for p/ imprimir 6x o "*"
      vazia = asteriscos + vazia;    // p/ somar o "*" + "" 
}
    for (let j = 0; j < n; j +=1) {  // esse for imprime 6 linhas com "*"
        console.log(vazia);
    }
   


