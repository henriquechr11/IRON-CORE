document.getElementById("pesquisarBotao").addEventListener("click",()=>{
    let escolha = document.getElementById("modeloEscolha").value
    if(escolha == "opçao1"){
        window.location.href = "produto1.html"
    } else if (escolha == "opçao2"){
        window.location.href = "produto2.html"
    }
})