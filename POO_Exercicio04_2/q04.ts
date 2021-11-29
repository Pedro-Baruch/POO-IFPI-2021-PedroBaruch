class Postagem {

    id : number
    texto : string
    likes : number

    constructor(id:number,texto:string,likes:number){
        this.id = id
        this.texto = texto
        this.likes = likes
    }

    curtir(){
        this.likes = this.likes + 1
    }

    toString() :any{
        let concatenado : string = this.texto + " : Curtidas -> " + this.likes + "\n"
        return concatenado
    }
}

class Microblog {

    postagem : Postagem[] = []

    inserir(post){
        this.postagem.push(post)
    }

    consultar(id : number) : Postagem{
        let idConsultado : Postagem

        for(let post of this.postagem){
            if(post.id == id){
                idConsultado = post
            }
        }

        return idConsultado
    }

    consultarIndice(id : number) : number{
        let indice : number

        for(let i : number = 0; i < this.postagem.length; i++){
            if(this.postagem[i].id == id){
                indice = i
            }
        }
        
        return indice
    }

    maisCurtida(): Postagem{
        let mLikes : number = 0
        let maisLikes : Postagem

        for(let i : number = 0; i < this.postagem.length; i++){
            if(this.postagem[i].likes > mLikes){
                mLikes = this.postagem[i].likes
                maisLikes = this.postagem[i]
            }
        }

        return maisLikes
    }

    excluir(id : number){
        let indice: number = this.consultarIndice(id)

        if(indice != -1){
            for(let i : number = indice; i < this.postagem.length; i++){
                this.postagem[i] = this.postagem[i+1]
            }

            this.postagem.pop
        }
    }

    curtidas(id : number){
        let indice : number = this.consultarIndice(id)

        this.postagem[indice].curtir()
    }

    toString(){

        for(let i : number = 0; i < this.postagem.length; i++){
            console.log(this.postagem.toString())
        }
    }

}

function main2(){
    
    let microblog: Microblog = new Microblog
    
    microblog.inserir(new Postagem(1,"Olá!!!",40))
    microblog.inserir(new Postagem(2,"Boa noite :)",10))
    microblog.inserir(new Postagem(3,"Cuidado!",30))

    microblog.curtidas(1)
    microblog.toString()

    console.log(microblog.consultarIndice(1)," - ",microblog.consultar(1))
    console.log(microblog.consultarIndice(2)," - ",microblog.consultar(2))
    console.log(microblog.consultarIndice(3)," - ",microblog.consultar(3))

    console.log(microblog.maisCurtida())
}

main2()

function main(){

    let post2: Postagem = new Postagem(1,"Olá!!!",0)

    post2.curtir()

    console.log(post2)
    console.log(post2.toString())
}

main()
