
function criaCalculadora(){
    return{
        display: document.querySelector('.display') ,

        clearDisplay(){
            this.display.value =''

        },

        inicia(){
            this.cliqueBotoes()
        },

        apagaUm(){
            this.display.value= this.display.value.slice(0,-1)
        },

        realizaConta(){
            let conta = this.display.value

            try {
                conta = eval(conta)
                if(!conta){
                    alert("Conta Inválida")
                    return
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('Conta Inválida')
                
            }
        },

        cliqueBotoes(){
          document.addEventListener('click', (e)=>{
              const el= e.target

              if(el.classList.contains('btn-num')){
                  this.btnParaDisplay(el.innerText)
              }
              if(el.classList.contains('btn-clear')){
                  this.clearDisplay()
              }
              if(el.classList.contains('btn-delete')){
                  this.apagaUm()
              }
              if(el.classList.contains('btn-result')){
                  this.realizaConta()
              }
          } )
        },
        btnParaDisplay(valor){
            this.display.value += valor 

        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()