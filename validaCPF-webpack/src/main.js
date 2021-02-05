import geraCPF from './modules/geraCPF';
import './assets/css/style.css';


(function geradorDeCPF() {
  const gerador = new geraCPF();
  const divResultado = document.querySelector('.cpf-gerado');

  divResultado.innerHTML = gerador.formatarCpf(gerador.geraNovoCpf());

})()