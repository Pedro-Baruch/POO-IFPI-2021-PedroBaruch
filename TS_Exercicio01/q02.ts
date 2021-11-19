function soma(x: number, y?: any): number{
    return x + y
}

console.log(soma(1,2)) // Soma 1 + 2 = 3
console.log(soma(1,"2")) // Como não é possivel somer um number e uma string, o programa apenas junta o number com a string resultando com "12"
console.log(soma(1)) // O resultado é "not a number", pelo fato de ser somado um number com undefined