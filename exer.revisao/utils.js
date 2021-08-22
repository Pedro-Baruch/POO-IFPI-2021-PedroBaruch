const input = require('prompt-sync')()

// Funções gerais
function obterString(valor){
    return String(input(valor))
}

function obterNumero(valor){
    return Number(input(valor))
}

// Função para questão 11
function porcentagem(percentual,valor){
    let percentual_final = (percentual / 100) * valor
    return percentual_final
}

// Função questão 12
function time(valor_seg){
    let horas = Math.floor(valor_seg / 3600)
    let minutos = Math.floor((valor_seg - (horas * 3600)) / 60)
    let segundos = Math.floor((valor_seg - (horas * 3600) - (minutos * 60)))

    let hhmmss = [horas, minutos, segundos]
    return hhmmss

}

// Função questão 13
function repeticaoNum(num,algarismo){
    let contador = 0

    for(let i = 0; i < num.length; i++){
        if(num[i] === algarismo){
            contador++
        }
    }
    return contador
}

module.exports = {
    obterNumero,
    porcentagem,
    repeticaoNum,
    obterString,
    time
}