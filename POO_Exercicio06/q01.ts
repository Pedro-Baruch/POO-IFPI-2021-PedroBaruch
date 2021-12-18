class Veiculo {
    placa: String
    ano: Number
}

class Carro extends Veiculo{
    modelo: String
}

class CarroEletrico extends Carro {
    autonimiaBateria: Number
}