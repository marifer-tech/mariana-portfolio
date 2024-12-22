// JavaScript para animações de rolagem
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);

    // Verificar ao carregar a página
    checkScroll();
});
