// Boolean
const contaPaga: boolean = false;


// Number
const idade: number = 22;
const avaliacao: number = 7.2;


// String
const nome: string = "Dieisson Narde";


// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45];


// Tuple
let jogadores: [string, string, string, number];
jogadores = ['Arrascaeta', 'Chiesa', 'CR7', 10];


// Enum
enum StatusAprovacao {
  Aprovado,
  Pendente,
  Rejeitado
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


// Any
const retornoDaAPI: any[] = [7, 10, 'Narde', false];


// Void
function printarNaTela(msg: string): void {
  console.log(msg);
}


// Null and Undefined
const u: undefined = undefined;
const n: null = null;


// Object
function criar(objeto: object) {
  // ...
}
criar({
  propriedades: 1,
})
// criar('Vitor') = Dá erro


// Never
function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha(): never {
  return erro('Algo falhou');
}


// Union Types
const nota: string | number = 7;

function exibirNota(nota: number | string) {
  console.log('A nota é: ' + nota);
}

exibirNota(10);
exibirNota('10');


// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
  nome: 'Dieisson',
  sobrenome: 'Narde',
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for(let funcionario of funcionarios) {
    console.log('Nome do funcionário ', funcionario.nome, ' ', funcionario.sobrenome);
  }
}


// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  celular: number;
  email?: string;  // email: string | null;
}

const contato: Contato = {
  nome: 'Dieisson',
  celular: 999999
}


// Type Assertion
const minhaIdade: any = 22;
(minhaIdade as number).toString();

const input1 = <HTMLInputElement>document.getElementById("numero1");
const input2 = document.getElementById("numero1") as HTMLInputElement;
console.log(input1.value);
console.log(input2.value);