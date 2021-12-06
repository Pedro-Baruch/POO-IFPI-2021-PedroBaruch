class Hora {

    constructor(private hora : number,private minutos : number,private segundos : number){}

    get lerHora(){
        return this.hora
    }

    get lerMinutos(){
        return this.minutos
    }

    get lerSegundos(){
        return this.segundos
    }

    get horario(){
        let formato : string = `${this.hora}:${this.minutos}:${this.segundos}`

        return formato
    }
}

function main(){

    let relogio : Hora = new Hora(10,55,45)

    console.log(relogio)
    console.log(relogio.lerHora)
    console.log(relogio.lerMinutos)
    console.log(relogio.lerSegundos)
    console.log(relogio.horario)
}

main()