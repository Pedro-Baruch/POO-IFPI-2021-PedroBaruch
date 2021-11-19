/*
let a = 10
a = '2'

Resposta letra a) => Não compila pelo fato de a estar definido como number e não pode ser atribuido a uma string
*/

let b: any = 10
b = 2

// Resposta letrab b) => Compila pelo fato de b estar definido como any, e aceitará qualquer tipo, tanto string quando number

let c: number = 10
c = 2

// Resposta letra c) => Compila pelo fato de c estar definido como number, dessa forma ele aceita outro dado do tipo number