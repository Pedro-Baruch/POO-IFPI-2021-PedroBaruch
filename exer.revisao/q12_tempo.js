const { obterNumero, time } = require("./utils");


function main(){

    // Entrada
    const segundos = obterNumero('Insiria um valor de tempo em segundos: ')

    // Processamento
    const[hh,mm,ss] = time(segundos)

    // Saída
    console.log(`${hh}:${mm}:${ss}`)
}

main()