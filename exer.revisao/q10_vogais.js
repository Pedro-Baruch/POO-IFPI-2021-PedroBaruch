const input = require('prompt-sync')()

function main(){

    // Entrada
    let string = String(input('Insira um frase: '))

    // Processamento
    let quebra = string.split('')
    let vogais = ['a','e','i','o','u','A','E','I','O','U']
    let palavra = ''

    for(let i = 0; i < quebra.length; i++){
        for(let j = 0; j < vogais.length; j++){
            if(quebra[i] == vogais[j]){
                palavra = string.split(quebra[i])
                string = palavra.join('')
            }
        }
    }

    // Saída
    console.log(`String resultante: ${string}`)
}

main()