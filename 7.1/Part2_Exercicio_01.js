// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => {
  if(num >0) {
    let resultado = 1; // tem que ser 1 senão, não ele multiplica por 0
    for(let i = 1; i <= num; i +=1) {
      resultado *= i;
    }
    return resultado;
  }
}

console.log(fatorial(5));

 