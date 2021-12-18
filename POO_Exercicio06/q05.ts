class Produto{
    
    private _id : String
    private _descricao : String
    private _quantidade : number
    private _valor : number

    constructor(id: String, descricao: String, quantidade: number,valor: number){
        this._id = id
        this._descricao = descricao
        this._quantidade = quantidade
        this._valor = valor
    }

    repor(num : number){
        this._quantidade = this._quantidade + num 
    }

    daBaixa(num : number){
        this._quantidade = this._quantidade - num
    }

    get id(): String{
        return this._id
    }

    get descricao(): String{
        return this._descricao
    }

    get quantidade(): number{
        return this._quantidade
    }

    get valor(): number{
        return this._valor
    }
}

class ProdutoPerecivel extends Produto{

    private _dataValidade : Date

    constructor(id: String, descricao: String, quantidade: number,valor: number, dataValidade: Date){
        super(id,descricao,quantidade,valor)
        this._dataValidade = dataValidade
    }

    valido(): boolean{
        let validade : boolean

        if(this._dataValidade > new Date()){
            validade = true
        }else{
            validade = false
        }

        return validade
    }

    get dataValidade(): Date{
        return this._dataValidade
    }
}

class Estoque {
    private produtos: Produto[] = []

    inserir(produto: Produto){
        let id : String = produto.id
        let boolean : boolean

        if(this.produtos.length == 0){
            this.produtos.push(produto)
            boolean = true
        }else{
            for(let i : number = 0; i < this.produtos.length ; i++){
                if(id == this.produtos[i].id){
                    boolean = true
                    console.log("Produto já cadastrado!")
                }else{
                    boolean = false
                }
            }
        }

        if(boolean == false){
            this.produtos.push(produto)
        }
    }

    consultar(_id : String) : Produto{
        let produtoConsultado: Produto

        for(let produto of this.produtos){
            if(produto.id == _id){
                produtoConsultado = produto
            }
        }

        return produtoConsultado
    }

    private consultarIndice(_id : String) : number{
        let indice : number

        for(let i: number = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id == _id){
                indice = i
            }
        }

        return indice
    }

    excluir(_id : String){
        let indice: number = this.consultarIndice(_id)

        if(indice != -1){
            for(let i: number = indice; i < this.produtos.length; i++){
                this.produtos[i] = this.produtos[i+1]
            }

            this.produtos.pop()
        }
    }
    
    validadeVencida(){
        console.log("Produtos fora da validade:")
        
        for(let i : number = 0; i < this.produtos.length ; i++){
            if(this.produtos[i] instanceof ProdutoPerecivel){
                let prod: ProdutoPerecivel = <ProdutoPerecivel> this.produtos[i]                
                if(prod.valido() == false){
                    console.log(this.produtos[i])
                }
            }
        }
    }
    
    darBaixa(_id: String, valor : number){
        let i = this.consultarIndice(_id)
        
        let prod : Produto = <Produto> this.produtos[i]
        prod.daBaixa(valor)
    }

    repor(_id: String, valor : number){
        let i = this.consultarIndice(_id)
        
        let prod : Produto = <Produto> this.produtos[i]
        prod.repor(valor)
    }
}

function main(){
    
    let estoque : Estoque = new Estoque();

    estoque.inserir(new ProdutoPerecivel("01","Banana",20,2.30,new Date("2019-01-16")))
    estoque.inserir(new ProdutoPerecivel("02","Maça",30,2.00,new Date("2021-01-16")))
    estoque.inserir(new ProdutoPerecivel("03","Uva",35,2.20,new Date("2022-01-16")))
    estoque.inserir(new ProdutoPerecivel("04","Feijao",35,2.20,new Date("2022-06-27")))
    estoque.inserir(new Produto("05","Arroz",35,2.20))

    estoque.darBaixa("01",10)
    estoque.repor("05",40)

    estoque.excluir("04")
  
    console.log("Todos os produtos:")
    console.log(estoque.consultar("01"))
    console.log(estoque.consultar("02"))
    console.log(estoque.consultar("03"))
    console.log(estoque.consultar("04"))
    console.log(estoque.consultar("05"))
    console.log(estoque)
    
    estoque.validadeVencida()
}

main()