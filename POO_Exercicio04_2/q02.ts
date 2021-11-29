class Triangulo{
    
    a : number
    b : number
    c : number

    constructor(a: number,b : number,c : number){
        this.a = a
        this.b = b
        this.c = c
    }

    triangulo() :any{
        
        let op1 : number = this.b - this.c
        let op2 : number = this.b + this.c
        
        if (op1 < 0){
            op1 = op1 * -1
        }

        if(op1 < this.a && this.a < op2){
            return true
        }else{
            return false
        }
    }

    ehIsoceles() : boolean{

        let boolean : boolean = this.triangulo()

        if(boolean == true){
            if(this.a == this.b || this.a == this.c || this.b == this.c){
                return true
            }else{
                return false
            }
        }else{
            return false    
        }
    }

    ehEquilatero() : boolean{
        
        let boolean : Boolean = this.triangulo()

        if(boolean == true){
            if(this.a == this.b && this.a == this.c && this.b == this.c){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    ehEscaleno() : boolean{
        
        let boolean : Boolean = this.triangulo()

        if(boolean == true){
            if(this.a != this.b && this.a != this.c && this.b != this.c){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
}

function main(){

    let tri: Triangulo = new Triangulo(4,2,3)

    console.log("É um triângulo: ",tri.triangulo())
    console.log("É isóceles: ",tri.ehIsoceles())
    console.log("É equilátero: ",tri.ehEquilatero())
    console.log("É escaleno: ",tri.ehEscaleno())
}

main()