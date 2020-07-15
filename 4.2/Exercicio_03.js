//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = 0;

for ( let i=0; i < numbers.length; i++) {
    media+= numbers[i];
}

//Divisão//
media / numbers.length;

console.log("A média aritmética é " + (media / numbers.length));