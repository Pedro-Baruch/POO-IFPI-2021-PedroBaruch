const input = require('prompt-sync')()

function main(){
    
    // Entrada
    const elementos = 5
    const vetor_a = Array(elementos)

    // Processamento
    for(let i = 0; i < elementos; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    // Saída
    console.log(vetor_a)
}

main()