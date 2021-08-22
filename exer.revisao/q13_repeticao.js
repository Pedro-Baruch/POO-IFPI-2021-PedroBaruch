const { obterNumero, repeticaoNum, obterString } = require("./utils");

function main(){

    // Entrada
    const num = obterString('Insira um número inteiro: ')
    let algarismo = obterString('Insira um número "d" onde 0 < d <= 9: ')

    // Processamento
    while(algarismo > 9){
        console.log('Valor invalido!')
        algarismo = obterString('Insira um número "d" onde 0 < d <= 9: ')
    }
    const repetido = repeticaoNum(num,algarismo)

    // Saída
    console.log(`O número ${algarismo} aparece no numero ${num}, ${repetido} vezes! `)
}

main()