// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;


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

        const corpoProduto = document.createElement("div");
        corpoProduto.className = "corpoProduto";
        
        const nome = document.createElement("h5");
        nome.className = "nome";
        nome.textContent = produto.nome;
        
        const descricao = document.createElement("h6");
        descricao.className = "descricao";
        descricao.textContent = produto.descricao;
        
        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "imagem";

        const preco = document.createElement("p");
        preco.className = "preco";
        preco.textContent = "Preço: $" + produto.preco.toFixed(2);

        const status = document.createElement("div");
        if(produto.status)
            status.className = "status-false"
        else
            status.className = "status-true"




        corpoProduto.appendChild(nome);
        corpoProduto.appendChild(descricao);
        corpoProduto.appendChild(preco);
        corpoProduto.appendChild(status);

        card.appendChild(corpoProduto);
        card.appendChild(imagem);

        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});
