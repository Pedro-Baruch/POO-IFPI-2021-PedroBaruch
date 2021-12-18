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

    get ope1(): number{
        return this.operador1
    }

    get ope2(): number{
        return this.operador2
    }
}

class CalculadoraCientifica extends Calculadora{

    exponenciar(): Number{
        let resultado: Number

        for(let i:number = 0; i < this.ope2; i++){
            resultado = this.ope1 * this.ope1
        }

        return resultado
    }
}

function main(){
    
    let calc: Calculadora = new CalculadoraCientifica(5,2);
    let resultado: Number
    
    console.log((<CalculadoraCientifica> calc).exponenciar())

    // Respostas letra c) : Foi necessário a implementar dois metodos get para transpotar o valor dos operadores
}

main()