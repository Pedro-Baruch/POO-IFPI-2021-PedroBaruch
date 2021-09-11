// Exemplo enum
var cores;
(function (cores) {
    cores["Vermelho"] = "Vermelho";
    cores["Verde"] = "Verde";
    cores["Azul"] = "Azul";
})(cores || (cores = {}));
var t;
t = cores.Azul;
t = cores.Verde;
t = cores.Vermelho;
if (t == cores.Vermelho) {
    console.log("O valor de t \u00E9 " + cores.Vermelho);
}
else {
    console.log("O valor de t não é vermelho");
}
console.log("----------------------------------------");
// Exemplo Array
var numeros = [2, 6, 0];
numeros.push(-1);
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());
console.log(numeros.pop()); // Retira o ultimo número do array
console.log(numeros);
//# sourceMappingURL=Aula_02_09.js.map