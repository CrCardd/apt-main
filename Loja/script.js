
// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;
const pop_up = document.querySelector("dialog");

window.onload = function () {
  var storedUser = localStorage.getItem("usuario");
  var user = JSON.parse(storedUser);
  document.getElementById("user").textContent = user.name;
  document.getElementById("perfil").textContent = user.name;
  document.getElementById("idPerfil").textContent = user.id;
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Dados/loja.json")
    .then((response) => response.json())
    .then((data) => {
      produtos = data;
      const produtosContainer = document.getElementById("produtos-container");


      produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.style.marginRight = "10px";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "imagem";

        const cardBody = document.createElement("div");
        cardBody.className = "cardBody";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "cardTitle";
        cardTitle.textContent = produto.descricao;

        const cardText = document.createElement("p");
        cardText.className = "cardText";
        cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

        const botaoCarrinho = document.createElement("a");
        botaoCarrinho.href = "#";
        botaoCarrinho.className = "botaoCarrinho";
        botaoCarrinho.textContent = "Adicionar ao Carrinho";
        botaoCarrinho.setAttribute("data-indice", produtos.indexOf(produto));

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(botaoCarrinho);

        card.appendChild(imagem);
        card.appendChild(cardBody);

        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));



  $("#produtos-container").on(
    "click",
    ".botaoCarrinho",
    async function () {
      const indexDoProduto = $(this).data("indice");
      const produtoSelecionado = produtos[indexDoProduto];

      pop_up.showModal();
      

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
      carrinho.push(produtoSelecionado);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  );
});

let close_pop_up = document.getElementById('close-pop-up');
close_pop_up.addEventListener('click', () => {
  pop_up.close()
})