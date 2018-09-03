import {Carro} from "./Carro";
declare function require(msg:string):any;
var readline = require('readline-sync');

let car:Carro = new Carro(0,0,0);

while(true){
    console.log("show - entrar - sair - abastecer(quantidade) - andar(distancia)")
    let control:string = readline.question("Digite o comando: ");
    switch (control) {
        case "show":
            console.log(car);            
            break;

        case "entrar":
            if(car.entrar() != true){
                console.log("O veiculo está cheio");
            }
            break;

        case "sair":
            if(car.sair() != true){
                console.log("O veiculo está vazio");
            }
            break;

        case "abastecer":
            let quantidade :number = readline.question("Quantidade: ");
            car.abastecer(quantidade);
            break;

        case "andar":
            let distancia :number = readline.question("Distancia: ");
            switch(car.andar(distancia)){
                case 3:
                    console.log("Sem passageiros");
                    break;
                case 2:
                    console.log("O carro andou");
                    break;
                case 1:
                    console.log("Sem gasolina");
                    break;
            }
            break;

        default:
            console.log("Comando invalido");
            break;
    }
}