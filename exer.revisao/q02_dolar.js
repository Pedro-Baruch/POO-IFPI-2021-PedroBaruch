const input = require('prompt-sync')()

function main(){

    // Entrada
    const cotacao_dolar = Number(input('Insira a cotação do dólar: '))
    const dolar = Number(input('Insira a quantidade de dolares para conversão: $'))

    // Processamento
    const real = dolar * cotacao_dolar
    
    // Saída
    console.log(`$${dolar.toFixed(2)} dolares são R$${real.toFixed(2)} reais.`)
}

main()
