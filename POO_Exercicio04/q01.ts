function main1(){
let a : number[] = [1,2,3]
let soma : number = 0

for (let i : number = 0; i < a.length; i++){
    soma = a[i] + soma
    console.log(i)
}

console.log(soma)
}

main1()