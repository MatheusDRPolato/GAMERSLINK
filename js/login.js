"use strict"
function saveData(login, senha) {
    localStorage.setItem("login", login);
    localStorage.setItem("senha", senha);
    console.log(login)
    console.log(senha)
  }
  
  function Entrar() {
    var storedLogin = localStorage.getItem("login");
    var storedSenha = localStorage.getItem("senha");
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    
    if (login === storedLogin && senha === storedSenha) {
      saveData(login, senha);
      window.location.href = "menu.html";
    } 
    else if(login = "Mizuri" && senha == "Isabele2@"){
      window.location.href = "menu.html";}
    else{
      alert("Conta não encontrada ou Senha Invalida!!")
    }
  }
    
  

  function Criar_Conta() {
    var novoUsuario = document.getElementById("login").value;
    var novaSenha = document.getElementById("senha").value;
    
    if (localStorage.getItem(novoUsuario) !== null) {
      alert("Nome de usuário já existente. Por favor escolha outro.");
    }
    else if(novaSenha == 0){
      alert("Não é possivel criar esta senha")
    }
    else if(novoUsuario == 0 && novaSenha == 0){
      alert("Conta invalida, tente novamente")

    } else {
      saveData(novoUsuario, novaSenha);
      alert("Conta criada com sucesso! Por favor, faça login para continuar.");
    }
  }

  

  
