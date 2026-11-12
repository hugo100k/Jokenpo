
const botoes = document.querySelectorAll(".opcao");

const jogadorTexto = document.getElementById("jogador");
const computadorTexto = document.getElementById("computador");
const mensagem = document.getElementById("mensagem");

const vitoriasTexto = document.getElementById("vitorias");
const derrotasTexto = document.getElementById("derrotas");
const empatesTexto = document.getElementById("empates");
const botaoReiniciar = document.getElementById("reiniciar");

const opcoes = ["pedra", "papel", "tesoura"];

let vitorias = 0;
let derrotas = 0;
let empates = 0;

const emojis = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌️"
};

function jogar(escolhaJogador) {
    const escolhaComputador =
        opcoes[Math.floor(Math.random() * opcoes.length)];

    jogadorTexto.textContent =
        `Você: ${emojis[escolhaJogador]} ${escolhaJogador}`;

    computadorTexto.textContent =
        `Computador: ${emojis[escolhaComputador]} ${escolhaComputador}`;

    if (escolhaJogador === escolhaComputador) {
        mensagem.textContent = "🤝 Empate!";
        empates++;
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        mensagem.textContent = "🎉 Você venceu!";
        vitorias++;
    } else {
        mensagem.textContent = "💻 O computador venceu!";
        derrotas++;
    }

    atualizarPlacar();

    mensagem.classList.remove("animar");
    void mensagem.offsetWidth;
    mensagem.classList.add("animar");
}

function atualizarPlacar() {
    vitoriasTexto.textContent = vitorias;
    derrotasTexto.textContent = derrotas;
    empatesTexto.textContent = empates;
}

function reiniciarJogo() {
    vitorias = 0;
    derrotas = 0;
    empates = 0;

    jogadorTexto.textContent = "Você: —";
    computadorTexto.textContent = "Computador: —";
    mensagem.textContent = "Faça sua escolha para começar!";

    mensagem.classList.remove("animar");

    atualizarPlacar();
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        jogar(botao.dataset.escolha);
    });
});

botaoReiniciar.addEventListener("click", reiniciarJogo);
