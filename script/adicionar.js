import {addProduto} from "./index.js"

const formulario = document.querySelector("[data-formulario]");

async function criaProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await listaProdutos(nome, valor, imagem);
    formulario.reset();
    alert("Produto cadastrado com sucesso!");
}

formulario.addEventListener("submit", evento => addProduto(evento));

const limparBotao = document.querySelector("[data-limpar]");

limparBotao.addEventListener("click", () => {
    formulario.reset();
})

criaProduto()