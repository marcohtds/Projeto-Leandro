/* ---------------------------------------------------
   MathLingo – Perfil do Usuário
   Arquivo: perfil.js
---------------------------------------------------- */

// Dados simulados (poderão vir de um backend futuramente)
const usuario = {
    nome: "Marcos Henrique",
    nivel: 1,
    xp: 120,
    foto: "img/default_avatar.png" // local padrão
};

// Carregar dados no perfil ao abrir a página
function carregarPerfil() {
    const nomeEl = document.getElementById("username");
    const nivelEl = document.getElementById("userLevel");
    const xpEl = document.getElementById("xp");
    const fotoEl = document.getElementById("avatar");

    if (!nomeEl || !nivelEl || !xpEl || !fotoEl) {
        console.error("❌ Erro: elementos do perfil não encontrados no HTML.");
        return;
    }

    nomeEl.textContent = usuario.nome;
    nivelEl.textContent = `Nível: ${usuario.nivel}`;
    xpEl.textContent = `XP: ${usuario.xp}`;
    fotoEl.src = usuario.foto;
}

// Função para editar o nome do usuário
function editarPerfil() {
    const novoNome = prompt("Digite o novo nome:", usuario.nome);

    if (novoNome && novoNome.trim() !== "") {
        usuario.nome = novoNome;
        document.getElementById("username").textContent = usuario.nome;
    }
}

// Carrega automático quando a página abre
window.onload = carregarPerfil;
