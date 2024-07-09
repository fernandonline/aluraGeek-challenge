import { removerProduto } from "./index.js"; 

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector('[data-lista]');

  lista.addEventListener('click', (evento) => {
    if (evento.target && evento.target.matches("[data-remover]")) {
      const produtoCard = evento.target.closest('.produto_card');
      const produtoId = produtoCard.dataset.id;
      removerProduto(produtoId, produtoCard);
    }
  });
});