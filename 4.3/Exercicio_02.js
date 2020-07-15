// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo://

let n = 5;
let asteriscos = "*";
let vazia = "";

for (let i = 0; i < n; i += 1) {
    vazia = asteriscos + vazia;
    console.log(vazia);
}

