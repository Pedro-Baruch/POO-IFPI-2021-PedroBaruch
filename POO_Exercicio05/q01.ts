class Calculadora {

    constructor(private operador1 : number,private operador2 : number){}

    soma(): number{
        let resultado : number

        resultado = this.operador1 + this.operador2
        
        return resultado
    }

    public subtracao(): number{
        let resultado : number

        resultado = this.operador1 - this.operador2

        return resultado
    }
}

function main(){

    let Calc : Calculadora = new Calculadora(10,18)

    console.log(Calc)
    console.log("Soma:",Calc.soma())
    console.log("subtração:",Calc.subtracao())
}

main()