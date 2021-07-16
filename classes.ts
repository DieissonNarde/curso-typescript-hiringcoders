class Data {
  // public day: number;
  // private month: number;
  // year: number;

  constructor(public day: number, private month: number, year: number = 2019) {
    // this.day = day;
    // this.month = month;
    // this.year = year;
  }
}

const data = new Data(1, 1, 2021);
console.log(data.day);
// console.log(data.month);  não é possível acessar fora da classe


// Utilizando Modificadores de Acesso
class Carro {
  private velocidadeAtual: number = 0;

  constructor (
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    // Faço as validações de aceleracao e frenagem
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }

  frear() {
    this.alterarVelocidade(-5);
  }
}

const carro = new Carro('Ford', 'Fusion', 250);
// carro.velocidadeMaxima = 400;
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
carro.frear();
carro.frear();


// Herança
class Ferrari extends Carro {
  private turbo = false;

  constructor() {
    super('Ferrari', 'Italia', 900);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const ferrari = new Ferrari();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.ligarTurbo();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();