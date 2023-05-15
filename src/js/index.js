const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    } else {
        imagemBotaTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    }
})