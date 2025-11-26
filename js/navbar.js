// navbar.js
// Controle da navegação mobile da MathLingo

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuButton = document.getElementById("menuButton");

    // Se a página não tem menu mobile, não executa o restante
    if (!mobileMenu || !menuButton) return;

    // Alterna o menu mobile
    function toggleMenu() {
        mobileMenu.classList.toggle("hidden");
    }

    // Expor função para o botão no HTML
    window.toggleMenu = toggleMenu;

    // Fecha o menu ao clicar em um link
    document.querySelectorAll("#mobileMenu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });

    // Fecha ao clicar fora
    document.addEventListener("click", (event) => {
        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedButton = menuButton.contains(event.target);

        if (!clickedInsideMenu && !clickedButton) {
            mobileMenu.classList.add("hidden");
        }
    });
});
