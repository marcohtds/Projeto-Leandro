/* ---------------------------------------------
   MathLingo – Sistema de Exercícios
   Arquivo: exercicios.js
   --------------------------------------------- */

// Lista de questões — você pode adicionar mais aqui
const questoes = [
    {
        enunciado: "Quanto é 7 + 5?",
        alternativas: ["10", "11", "12", "13"],
        correta: 2
    },
    {
        enunciado: "Qual é o valor de x na equação 2x = 8?",
        alternativas: ["2", "3", "4", "6"],
        correta: 2
    }
];

let indice = 0;
let acertos = 0;

// Área onde as questões serão exibidas
const area = document.getElementById("exerciseArea");

// Garante que o script só rode se a área existir
if (area) mostrarQuestao();

/* ---------------------------------------------
   Mostrar Questão
--------------------------------------------- */
function mostrarQuestao() {
    const q = questoes[indice];

    area.innerHTML = `
        <h2 class="text-3xl font-extrabold text-white mb-6 drop-shadow">
            ${q.enunciado}
        </h2>

        <div class="flex flex-col gap-4">
            ${q.alternativas.map((alt, i) => `
                <button 
                    class="alternativa bg-white text-blue-700 font-bold p-4 rounded-xl shadow-md transition 
                           hover:bg-blue-100 active:scale-95"
                    onclick="verificar(${i}, this)">
                    ${alt}
                </button>
            `).join("")}
        </div>
    `;
}

/* ---------------------------------------------
   Verificar Resposta
--------------------------------------------- */
function verificar(resposta, botao) {

    // Desativar todas as alternativas após clique
    document.querySelectorAll(".alternativa").forEach(btn => btn.disabled = true);

    const correta = questoes[indice].correta;

    // Colore o botão escolhido
    if (resposta === correta) {
        botao.classList.add("bg-green-500", "text-white");
        acertos++;
    } else {
        botao.classList.add("bg-red-500", "text-white");

        // Destacar a alternativa correta
        const botoes = document.querySelectorAll(".alternativa");
        botoes[correta].classList.add("bg-green-500", "text-white");
    }

    // Avançar para próxima questão
    setTimeout(() => {
        indice++;
        indice < questoes.length ? mostrarQuestao() : finalizar();
    }, 900);
}

/* ---------------------------------------------
   Tela Final
--------------------------------------------- */
function finalizar() {
    area.innerHTML = `
        <h2 class="text-3xl font-extrabold text-white mb-4">🎉 Resultado</h2>

        <p class="text-xl mb-8 opacity-90">
            Você acertou <strong>${acertos}</strong> de <strong>${questoes.length}</strong> questões!
        </p>

        <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-md"
            onclick="location.reload()">
            Refazer
        </button>
    `;
}
