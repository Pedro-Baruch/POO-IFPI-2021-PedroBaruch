const input = require('prompt-sync')()

function main(){

    // Entrada
    let s = String(input('Insira uma frase: '))

    let a = String(input('Insira a letra para susbstituição: '))
    let b = String(input('Insira a letra para ser substituida: '))

    // Processamento
    let nova_string = s

    for(let i = 0; i < s.length; i++){
        if(s[i] === a){
            s = nova_string.split(s[i])
            nova_string = s.join(b)
        }
    }

    console.log(nova_string)
}

main()