const suits = ["♦", "♥", "♠", "♣"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Função para criar um baralho
function createDeck() {
    const deck = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    return deck;
}

// Função para embaralhar o baralho
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Função para lidar as cartas
function dealCards(deck) {
    const playerHand = deck.slice(0, 5);
    const dealerHand = deck.slice(5, 10);
    return { playerHand, dealerHand };
}

// Função para mostrar as cartas na tela
function displayCards(hand, elementId) {
    const handElement = document.getElementById(elementId);
    handElement.innerHTML = ""; // Limpa as cartas anteriores
    hand.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerText = ${card.rank}${card.suit};
        handElement.appendChild(cardElement);
    });
}

// Inicializa o jogo
document.getElementById("dealButton").addEventListener("click", () => {
    const deck = shuffle(createDeck());
    const { playerHand, dealerHand } = dealCards(deck);

    displayCards(playerHand, "playerCards");
    displayCards(dealerHand, "dealerCards");
});