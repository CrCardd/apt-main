

let imagem_senha = document.getElementById('imagem-senha');
let senha = document.getElementById('senha');
let ver_senha = false;

imagem_senha.addEventListener('click', () => {
  if(ver_senha){
    imagem_senha.src = '../img/icons/mostrar-senha.png'
    senha.type = 'text'
  }
  else{
    imagem_senha.src = '../img/icons/bloquear-senha.png'
    senha.type = 'password'
  }
  ver_senha = !ver_senha;
});






let botao_login = document.getElementById('botao-login');
botao_login.addEventListener('click', () => {
  console.log('teste');
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";
  } else {
    //logica para se o nome e senha forem incorretos
  }
})