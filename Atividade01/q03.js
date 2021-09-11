var cidades;
(function (cidades) {
    cidades[cidades["PI"] = 0] = "PI";
    cidades[cidades["CE"] = 1] = "CE";
    cidades[cidades["MA"] = 2] = "MA";
})(cidades || (cidades = {}));
for (var i in cidades) {
    console.log(cidades[i]);
}
//# sourceMappingURL=q03.js.map