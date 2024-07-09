async function listaProduto() {
    try {
      const resposta = await fetch('http://localhost:3000/produtos');
      const listaApi = await resposta.json();
  
      if (Array.isArray(listaApi)) {
        listaApi.forEach((elemento) =>
          lista.appendChild(
            criarCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id) // Passa o id do produto.
          )
        );
      } else {
        console.error('listaApi não é um array:', listaApi);
      }
    } catch (erro) {
      console.error('Erro ao obter a lista de produtos:', erro);
    }
  }
  
  async function criarProduto(nome, preco, imagem) {
    const res = await fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        nome: nome,
        preco: preco,
        imagem: imagem,
      }),
    });
  
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }
  
  async function removerProduto(id, elementoProduto) {
    try {
      const res = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
  
      if (res.ok) {
        elementoProduto.remove();
        alert('Produto removido com sucesso!');
      } else {
        console.error('Erro ao remover o produto:', res.statusText);
      }
    } catch (erro) {
      console.error('Erro ao remover o produto:', erro);
    }
  }
  
  let lista = document.querySelector('[data-lista]');

  function criarCard(nome, preco, imagem, id) {
    const produto = document.createElement('div');
    produto.className = 'produto_card';
    produto.dataset.id = id;
    produto.innerHTML = `
            <img src="${imagem}">
        
            <div class="produto_card_info">
        
                <p> ${nome} </p>
        
                <div class="produto_card_preco">
                    <p>$ ${preco}</p>
                    <button data-remover>Remover</button> <!-- Botão de remoção do produto -->
                </div>
            </div>
        `
  
    return produto;
  }
  
  listaProduto();
  
  export const addProduto = { criarCard, criarProduto };
  export { removerProduto };