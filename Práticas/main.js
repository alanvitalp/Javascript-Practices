function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', event => {
      const el = event.target;

      if(el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText);
      }

      if(el.classList.contains('btn-clear')) {
        this.clearDisplay();
      }

      if(el.classList.contains('btn-del')) {
        this.del();
      }

      if(el.classList.contains('btn-eq')) {
        this.realizaConta();
      }
    });
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', event => {
      if (event.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.realizaConta = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = String(conta);
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.clearDisplay = () => this.display.value = '';

  this.del = () => this.display.value = this.display.value.slice(0, -1);
  
  this.btnParaDisplay = (valor) => {
  this.display.value += valor; 
  this.display.focus();
  }

}

const calculadora = new Calculadora();
calculadora.inicia()