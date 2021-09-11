const { obterNumero, porcentagem } = require("./utils")

function main(){

    // Entrada
    let valorp = obterNumero('Insira o valor da porcentagem: ')
    let valorx = obterNumero('Insnria o valor total: ')

    // Processamento
    let percentual = porcentagem(valorp,valorx)

    // Saída
    console.log(`${valorp}% de ${valorx} é igual a ${percentual}`)
}

main()