// Obtém todos os elementos com a classe "flip-card"
const flipCards = document.querySelectorAll(".flip-card");

// Itera sobre cada card e adiciona um ouvinte de evento de clique
flipCards.forEach((card) => {
    // Adiciona um ouvinte de evento de clique ao card
    card.addEventListener("click", () => {
        // Alterna a classe "flipped" no card clicado para ativar o efeito de flip
        card.classList.toggle("flipped");
    });
});



const card = document.getElementById('card');

card.addEventListener('click', function() {
    card.classList.toggle('flipped');
});