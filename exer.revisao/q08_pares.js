const input = require('prompt-sync')()

function main(){

    // Entrada
    const n = 20
    vetor_a = Array(n)

    // Processamento
    let pares = 0
    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Valor do elemento: `))
        if(vetor_a[i] % 2 == 0){
            pares++
        }
    }

    // Saída
    console.log(`Nessa lista temos ${pares} números pares!`)
}

main()