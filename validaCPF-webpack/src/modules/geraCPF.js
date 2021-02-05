import validaCPF from './validaCPF';

export default class GeraCPF {
  rand (min = 1_000_000_00, max = 9_999_999_99) {
    return String(Math.floor(Math.random() * (max - min) + max));
  }

  geraNovoCpf () {
    const noveDigitos = this.rand();
    const digito1 = validaCPF.geraDigito(noveDigitos);
    const digito2 = validaCPF.geraDigito(noveDigitos + digito1); 
    
    const novoCPF = noveDigitos + digito1 + digito2;

    return novoCPF;
  }

  formatarCpf (cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  } 
}