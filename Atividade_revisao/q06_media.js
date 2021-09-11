const input = require('prompt-sync')()

function main(){

    // Processamento
    let num = 0
    let i = 0
    let lista = 0
    
    while(num != -1){
        
        // Entrada
        num = Number(input('Insira um valor: '))

        if(num === -1){
            break
        }

        lista = lista + num
        i++
    }

    let media = lista / i

    // Saída
    console.log(`A média dos números lidos é igual a ${media}`)
}

main()