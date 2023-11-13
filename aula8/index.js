/*
    Luiz Otávio Miranda tem 30 anos, pesa 85 kg
    tem 1.8 metros de altura e su IMC é de 25.9
    Luiz Otávio nasceu em 1980
*/

const nome = "Pedro";
const sobrenome = "Grangeiro";
const idade = 25;
const peso = 110;
const altura = 1.71;

let imc; // peso / (altura * altura)
let anoNascimento;

anoNascimento = 2023 - idade;
const resultadoIMC = peso / (altura * altura);
//template strings

console.log(`${nome} ${sobrenome} tem idade anos pesa ${peso} kg`);
console.log(`tem ${altura} metros de altura e seu IMC é de ${resultadoIMC}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
