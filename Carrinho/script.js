let pop_up = document.getElementById("pedido")


$(document).ready(function () {
  // Recupera o carrinho do localStorage
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Elemento onde a lista será exibida
  const listaElement = $("#lista");

  // Elemento para exibir o total em preço
  const totalElement = $("#total");

  // Função para exibir o carrinho
  function exibirCarrinho() {
    // Limpa o conteúdo atual da lista
    listaElement.empty();

    // Variável para calcular o total em preço
    let totalPreco = 0;

    // Itera sobre os itens do carrinho
    $.each(carrinho, function (index, item) {
      // Cria um elemento de lista para cada item
      const listItem = $("<li>").text(
        `${item.nome} - Preço: $${item.preco.toFixed(2)}`
      );

      // Cria um botão de remoção
      const removeButton = $("<button>")
        .text("❌")
        .css("margin-left", "10px")
        .click(function () {
          removerItemDoCarrinho(index);
        });

      // Adiciona o botão à lista
      listItem.append(removeButton);

      // Adiciona o item à lista
      listaElement.append(listItem);

      // Adiciona o preço do item ao total
      totalPreco += item.preco;
    });

    // Exibe o total em preço no elemento totalElement
    totalElement.text(`Total: $${totalPreco.toFixed(2)}`);
  }

  // Função para remover um item do carrinho
  function removerItemDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    exibirCarrinho();
  }

  // Chama a função para exibir o carrinho
  exibirCarrinho();
});

function gerarDocumentoWord() {
  const listaElement = document.getElementById("lista");
  const totalElement = document.getElementById("total");

  // Clona a lista para evitar a modificação direta na lista original
  const listaClone = listaElement.cloneNode(true);

  // Remove os botões de remoção da lista clonada
  $(listaClone).find("button").remove();

  const lista = listaClone.innerHTML;
  const total = totalElement.innerHTML;

  const conteudoHtml = `
    <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body>
        <h1>Pedido confirmado</h1>
        <h3>Agradecemos sua preferencia</h3>
        ${lista}
        <br>
        <br>
        ${total}
      </body>
    </html>
  `;

  const blob = new Blob([conteudoHtml], { type: "application/msword" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "carrinho.doc";
  link.click();
  pop_up.style.display = "block";
}


let botao_fechar = document.getElementById('botao-fechar');
botao_fechar.addEventListener('click', () => {
  pop_up.style.display = 'none';
})