const sacolao = [];

const fruta1 = {
    nome: "laranja",
    preco: 2.00,
    disponibilidade: true
};
const fruta2 = {
    nome: "banana",
    preco: 3.00,
    disponibilidade: true
};
const fruta3 = {
    nome: "maçã",
    preco: 4.00,
    disponibilidade: true
};
sacolao.push(fruta1, fruta2, fruta3);

console.log(sacolao);
console.log('Quantidade de de iteins no sacolão: ', sacolao.length);