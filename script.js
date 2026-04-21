document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Função que adiciona a classe 'active' para mostrar as seções
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; // Sensibilidade: quanto menor, mais rápido aparece

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    };

    // 2. Escuta o evento de scroll (rolagem)
    window.addEventListener("scroll", reveal);

    // 3. PLANO DE SEGURANÇA:
    // Dispara a função imediatamente após carregar a página 
    // para mostrar as seções que já estão visíveis no topo.
    setTimeout(reveal, 500); 
    
    // 4. LOG DE TESTE (Abra o F12 no navegador para ver se carregou)
    console.log("Sistema de animação de scroll carregado com sucesso!");
});