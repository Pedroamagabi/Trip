
var botao=document.querySelector("#botao")
var modal=document.querySelector("#modal-overlay")
  
var senhalocal=localStorage.getItem('senhalocal')?? []
senhalocal=Number(senhalocal)
if(senhalocal===130102){
    modal.classList.add("hidden");
   
  

}

function clickds(){
  

    
    var senha=document.querySelector("#Senha")
senha=Number(senha.value)

if(senha===130102){
    modal.classList.add("hidden");
    console.log(senha)
    localStorage.setItem('senhalocal',senha)

}

}

botao.addEventListener("click",clickds)
