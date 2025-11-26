/* ---------------------------------------------
   MathLingo – Trilhas de Aprendizado
   Arquivo: trilhas.js
   --------------------------------------------- */

// Lista de trilhas (adicione quantas quiser)
const trilhas = [
    {
        nome: "Matemática Básica",
        descricao: "Operações essenciais para todos os níveis.",
        imagem: "img/icone_basico.png",
        link: "exercicio.html"
    },
    {
        nome: "Álgebra",
        descricao: "Equações, incógnitas e expressões.",
        imagem: "img/icone_alg.png",
        link: "exercicio.html"
    },
    {
        nome: "Geometria",
        descricao: "Figuras, ângulos e áreas.",
        imagem: "img/icone_geo.png",
        link: "exercicio.html"
    }
];

// Container dos cards
const container = document.getElementById("cardsContainer");

// Garante que o script só execute se o container existir
if (container) {
    gerarTrilhas();
}

/* ---------------------------------------------
   Função que gera os cards dinamicamente
--------------------------------------------- */
function gerarTrilhas() {
    trilhas.forEach(trilha => {

        const card = document.createElement("div");
        card.className =
            "bg-white text-black shadow-xl p-6 rounded-2xl w-64 " +
            "hover:-translate-y-2 transition transform cursor-pointer text-center " +
            "hover:shadow-2xl";

        card.innerHTML = `
            <img src="${trilha.imagem}" class="w-28 mx-auto mb-4">
            <h3 class="text-xl font-extrabold text-blue-700">${trilha.nome}</h3>
            <p class="text-gray-600 mt-2">${trilha.descricao}</p>

            <button class="btn-trilha mt-4 bg-green-500 hover:bg-green-600
                           text-white px-4 py-2 rounded-full font-bold w-full
                           transition active:scale-95">
                Começar
            </button>
        `;

        // Redirecionar ao clicar no botão
        card.querySelector(".btn-trilha").addEventListener("click", (e) => {
            e.stopPropagation();   // Evita clique no card inteiro
            window.location.href = trilha.link;
        });

        // Card redireciona ao clicar em qualquer lugar
        card.addEventListener("click", () => {
            window.location.href = trilha.link;
        });

        container.appendChild(card);
    });
}
