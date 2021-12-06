class Conta {

    constructor(private numero: string, private saldo: number){}

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

    Numero(){
        return this.numero
    }    
}

class Banco {

    private contas : Conta[] = []

    inserir(conta : Conta){
        let numero : string = conta.Numero()
        let boolean : boolean

        if(this.contas.length == 0){
            this.contas.push(conta)
            boolean = true
        }else{
            for(let i : number = 0; i < this.contas.length ; i++){
                if(numero == this.contas[i].Numero()){
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
            if(conta.Numero() == numero){
                contaConsultada = conta
            }
        }

        return contaConsultada
    }

    private consultarIndice(numero : String) : number{
        let indice : number

        for(let i : number = 0; i < this.contas.length; i++){
            if(this.contas[i].Numero() == numero){
                indice = i
            }
        }

        return indice
    }

    alterar(conta: Conta){
        let indice: number = this.consultarIndice(conta.Numero())

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

    banco.depositar("1",1500)
    banco.depositar("2",5000)
    banco.depositar("3",11000)

    console.log(banco.consultar("1"))
    console.log(banco.consultar("2"))
    console.log(banco.consultar("3"))
}

main()