//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.//
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.//
//Atente que, sobre o custo do produto, incide um imposto de 20%.//
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.//

let custoProduto = 50;
let valorVenda = 100; 
let produtos = 1000;
let imposto = 0.2;
let lucro = valorVenda - custoProduto

if (custoProduto !== 0 && valorVenda !==0) {
    lucro = produtos * imposto;
        console.log(lucro); 
} else {
    console.log("Erro! Seu valor é menor que zero");
}        