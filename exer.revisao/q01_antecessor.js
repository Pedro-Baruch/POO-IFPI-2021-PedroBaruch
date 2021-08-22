const input = require('prompt-sync')()

function main(){

   // Entrada
   const num = Number(input('Insira um valor: '))

   // Processamento
   const antecessor = num - 1
   const sucessor = num + 1

   // Saída
   console.log(`O antecessor ao número ${num} é ${antecessor} e o sucessor é ${sucessor}.`)
}

main()