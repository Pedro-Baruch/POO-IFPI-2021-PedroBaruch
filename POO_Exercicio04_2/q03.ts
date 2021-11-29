class Conta {

    numero : string
    saldo : number

    constructor(numero: string, saldoInicial : number){
        this.numero = numero
        this.saldo = saldoInicial
    }

    sacar(valor : number){
        this.saldo = this.saldo - valor
    }

    depositar(valor : number){
        this.saldo = this.saldo + valor
    }

    consultarSaldo() : number{
        return this.saldo
    }

    tranferir(contaDestino : Conta, valor : number){
        this.sacar(valor)
        contaDestino.depositar(valor)
    }
}

class Banco {

    contas : Conta[] = []

    inserir(conta : Conta){
        let numero : string = conta.numero
        let boolean : boolean

        if(this.contas.length == 0){
            this.contas.push(conta)
            boolean = true
        }else{
            for(let i : number = 0; i < this.contas.length ; i++){
                if(numero == this.contas[i].numero){
                    boolean = true
                    console.log("Conta Existente")
                }else{
                    boolean = false
                }
            }
        }

        if(boolean == false){
            this.contas.push(conta)
        }
    }

    consultar(numero : String) : Conta{
        let contaConsultada: Conta

        for(let conta of this.contas){
            if(conta.numero == numero){
                contaConsultada = conta
            }
        }

        return contaConsultada
    }

    consultarIndice(numero : String) : number{
        let indice : number

        for(let i : number = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i
            }
        }

        return indice
    }

    alterar(conta: Conta){
        let indice: number = this.consultarIndice(conta.numero)

        if(indice != -1){
            this.contas[indice] = conta 
        }
    }

    excluir(numero: String){
        let indice: number = this.consultarIndice(numero)

        if (indice != -1){
            for(let i : number = indice; i < this.contas.length; i++){
                this.contas[i] = this.contas[i+1]
            }

            this.contas.pop
        }
    }

    depositar(numero: string, valor: number){
        let contaConsultada = this.consultar(numero)

        if(contaConsultada != null){
            contaConsultada.depositar(valor)
        }
    }
}

function main(){

    let banco: Banco = new Banco()

    banco.inserir(new Conta("1",1000))
    banco.inserir(new Conta("2",2000))
    banco.inserir(new Conta("3",3000))
    banco.inserir(new Conta("3",4000))

    console.log(banco.consultar("1"))
    console.log(banco.consultar("2"))
    console.log(banco.consultar("3"))
}

main()