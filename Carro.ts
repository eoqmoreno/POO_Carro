export class Carro{
    kilometragem : number;
    combustivel : number;
    passageiros : number;

    constructor(kilo:number,comb : number,pass:number){
        this.kilometragem = kilo;
        this.combustivel = comb;
        this.passageiros = pass;
    }

    entrar():boolean{
        this.passageiros += 1;
        if(this.passageiros > 2){
            this.passageiros = 2;
            return false;
        }else{
            return true;
        }
    }
    sair():boolean{
        this.passageiros -= 1;
        if(this.passageiros < 0){
            this.passageiros = 0;
            return false;
        }else{
            return true;
        }
    }

    abastecer(qtd : number):void{
        this.combustivel += Number(qtd);
        if(this.combustivel > 10){
            this.combustivel = 10;
        }
    }

    andar(km:number):number{
        if(this.passageiros>0){
            let calc:number = km/10.
            if(this.combustivel - calc < 0){
                return 1;
            }else{
                    this.combustivel -= calc;
            }
        }else{
            return 2;
        }
    }
}
