const input = require('prompt-sync')()

function main(){

    // Entrada
    console.log('Insira um número entre 1 e 12 que representa um mês do ano')
    const mes_num = Number(input('---> '))

    // Processamento e Saída
    
    if(mes_num === 1){
        console.log('Janeiro!')
    }else if(mes_num === 2){
        console.log('Fevereiro!')
    }else if(mes_num === 3){
        console.log('Março!')
    }else if(mes_num === 4){
        console.log('Abril!')
    }else if(mes_num === 5){
        console.log('Maio!')
    }else if(mes_num === 6){
        console.log('Junho!')
    }else if(mes_num === 7){
        console.log('Julho!')
    }else if(mes_num === 8){
        console.log('Agosto!')
    }else if(mes_num === 9){
        console.log('Setembro!')
    }else if(mes_num === 10){
        console.log('Outubro!')
    }else if(mes_num === 11){
        console.log('Novembro!')
    }else if(mes_num === 12){
        console.log('Dezembro!')
    }else{
        console.log('Número inválido!')
    }
}

main()