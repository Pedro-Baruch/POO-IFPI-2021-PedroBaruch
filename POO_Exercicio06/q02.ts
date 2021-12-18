class Calculadora {

    constructor(private operador1 : number,private operador2 : number){}

    adicionar(): number{
        let resultado : number

        resultado = this.operador1 + this.operador2
        
        return resultado
    }

    subtrair(): number{
        let resultado : number

        resultado = this.operador1 - this.operador2

        return resultado
    }
}

function main(){

    let Calc : Calculadora = new Calculadora(10,18)

    console.log(Calc)
    console.log("Soma:",Calc.adicionar())
    console.log("subtração:",Calc.subtrair())
}

main()