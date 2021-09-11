// Exemplo enum
enum cores {Vermelho = "Vermelho", Verde = "Verde", Azul = "Azul"}

let t : cores

t = cores.Azul
t = cores.Verde
t = cores.Vermelho

if(t == cores.Vermelho){
    console.log(`O valor de t é ${cores.Vermelho}`)
}else{
    console.log("O valor de t não é vermelho")
}

console.log("----------------------------------------")
// Exemplo Array
let numeros: number[] = [2,6,0] 
numeros.push(-1)

console.log(numeros)
console.log(numeros.sort())
console.log(numeros.reverse())

console.log(numeros.pop()) // Retira o ultimo número do array
console.log(numeros)