const input = require("prompt-sync")()

function main(){

    // Entrada
    console.log("Insira três valores.")
    let valor1 = Number(input('Insira o 1º valor: '))
    const valor2 = Number(input('Insira o 2º valor: '))
    const valor3 = Number(input('Insira o 3º valor: '))

    // Processamento e Saída
    
    if(valor1 < valor2 && valor1 < valor3){
        console.log(`O número ${valor1} é o menor valor.`)
    }else if(valor2 < valor1 && valor2 < valor3){
        console.log(`O número ${valor2} é o menor valor.`)
    }else if(valor3 < valor1 && valor3 < valor2){
        console.log(`O número ${valor3} é o menor valor.`)
    }
}

main()
