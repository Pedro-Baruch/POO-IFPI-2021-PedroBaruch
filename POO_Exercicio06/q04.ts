class Conta {

    private _numero: String
    private _saldo: number

    constructor(numero: String, Saldo: number){
        this._numero = numero
        this._saldo = Saldo
    }

    sacar(valor : number){
        if(this._saldo >= valor){
            this._saldo = this._saldo - valor
        }
    }

    depositar(valor : number){
        this._saldo = this._saldo + valor
    }

    consultarSaldo() : number{
        return this._saldo
    }

    tranferir(contaDestino : Conta, valor : number){
        this.sacar(valor)
        contaDestino.depositar(valor)
    }

    get numero(): String{
        return this._numero
    }
    
    get saldo(): number{
        return this._saldo
    }
}

class Poupanca extends Conta{
    private _taxaJuros: number

    constructor(numero: String, saldo: number, taxaJuros: number){
        super(numero,saldo)
        this._taxaJuros = taxaJuros
    }

    renderJuros(): void{
        this.depositar(this.saldo * this._taxaJuros/100)
    }

    get taxaJuros(): number{
        return this._taxaJuros
    }
    
}

class Banco {

    private contas : Conta[] = []

    inserir(conta : Conta){
        let numero : String = conta.numero
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

    private consultarIndice(numero : String) : number{
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

    renderJuros(numero: String){
        let contaConsultada = this.consultar(numero)

        if(contaConsultada instanceof Poupanca){
            let poupanca: Poupanca = <Poupanca> contaConsultada
            poupanca.renderJuros()
        }else{
            console.log("A conta de número:",numero,".Não é uma poupança!!!")
        }
    }
}

function main(){

    let banco: Banco = new Banco()

    banco.inserir(new Conta("1",100))
    banco.inserir(new Poupanca("2",100,0.5))

    banco.renderJuros("1")
    banco.renderJuros("2")
    
    console.log(banco.consultar("1"))
    console.log(banco.consultar("2"))

    // Como a conta de número 1 não é do tipo poupanca seu saldo não é alterado
    // Como a conta de numero 2 é do tipo poupanca seu saldo é alterado 
}

main()