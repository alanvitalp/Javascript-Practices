/*
 
exemplos: 705.484.450-52 / 070.987.720-03

7  0  5  4  8  4  4  5  0
x  x  x  x  x  x  x  x  x  
10 9  8  7  6  5  4  3  2

= 70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7  0   5  4  8  4  4  5  0  5
x  x   x  x  x  x  x  x  x  x
11 10  9  8  7  6  5  4  3  2
= 77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for > 9, entao digito = 0
*/

function ValidaCPF(cpf) {
  this.cpf = cpf;
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpf.replace(/\D+/g, '');
    }  
  });
}

ValidaCPF.prototype.valida = function () {
  if (this.cpfLimpo.length !== 11) return 'CPF errado';
  if (typeof this.cpfLimpo == 'undefined') return 'Valor errado';
  if(this.isSequencia()) return 'Sequencia nao aceita';
  
  doisDigitosFinais = Array.from(this.cpfLimpo).slice(9, 11).map(valor => Number(valor))
  
  if (doisDigitosFinais.includes(this.primeiroDigito()) && 
      doisDigitosFinais.includes(this.segundoDigito())) { 
      return `O CPF ${this.cpf} eh valido`;
  }
  else 
    return `CPF ${this.cpf} eh invalido`;

}

ValidaCPF.prototype.primeiroDigito = function () {
  let numerosCPF = Array.from(this.cpfLimpo).slice(0, 9).map(valor => Number(valor));
  
  numerosCPF.reverse();
  numerosCPF.forEach((valor, indice) => {
    numerosCPF[indice] = valor * (indice + 2);
  });
  
  const soma = numerosCPF.reduce((acm, valor) => acm += valor, 0);
  
  const primeiroDigito = 11 - (soma % 11)
  
  return primeiroDigito >= 10 ? '0' : primeiroDigito.toString();
}

ValidaCPF.prototype.segundoDigito = function () {
  let numerosCPF = Array.from(this.cpfLimpo).slice(0, 10).map(valor => Number(valor));
  
  numerosCPF.reverse();
  numerosCPF.forEach((valor, indice) => {
    numerosCPF[indice] = valor * (indice + 2);
  });
  
  const soma = numerosCPF.reduce((acm, valor) => acm += valor, 0);
  
  const segundoDigito = 11 - (soma % 11);
  
  return segundoDigito >= 10 ? '0' : segundoDigito.toString();
}

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('078.654.203-90');

console.log(cpf.valida());