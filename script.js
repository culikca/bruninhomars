[12:27, 27/11/2024] camilly: // Definindo cores e números do baralho Uno
const colors = ["red", "green", "blue", "yellow"];
const numbers = Array.from({ length: 10 }, (_, i) => i.toString());

// Função para criar um baralho completo
function createDeck() {
    const deck = [];
    for (const color of colors) {
        for (const number of numbers) {
            deck.push({ color, number });
        }
    }
    return shuffle(deck);
}

// Função para embaralhar o baralho
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
[12:27, 27/11/2024] camilly: const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Função para criar a visualização de uma carta
function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", card.color);
    cardElement.textContent = card.number;
    return cardElement;
}

// Variáveis do jogo
let deck = createDeck(); // Baralho embaralhado
let currentCard = deck.pop(); // Carta inicial
let playerHand = []; // Mão do jogador

// Atualiza a carta na mesa (carta atual)
function updateCurrentCard() {
    const currentCardElement = document.getElementById("currentCard");
    currentCardElement.innerHTML = ""; // Limpa o conteúdo anterior
    currentCardElement.appendChild(createCardElement(currentCard)); // Mostra a carta atual
}

// Atualiza a mão do jogador
function updatePlayerHand() {
    const handElement = document.getElementById("hand");
    handElement.innerHTML = ""; // Limpa cartas antigas

    playerHand.forEach((card, index) => {
        const cardElement = createCardElement(card);
        cardElement.addEventListener("click", () => {
            if (card.color === currentCard.color || card.number === currentCard.number) {
                // Jogar uma carta válida
                currentCard = card; // Atualiza a carta atual
                playerHand.splice(index, 1); // Remove a carta jogada da mão
                updateCurrentCard();
                updatePlayerHand();
            } else {
                alert("Você só pode jogar cartas com a mesma cor ou número!");
            }
        });
        handElement.appendChild(cardElement);
    });
}

// Adiciona uma carta à mão do jogador
function drawCard() {
    if (deck.length > 0) {
        playerHand.push(deck.pop());
        updatePlayerHand();
    } else {
        alert("O baralho acabou!");
    }
}

// Inicializa o jogo ao carregar
document.getElementById("drawCard").addEventListener("click", drawCard);

// Distribui cartas iniciais ao jogador e exibe a primeira carta
playerHand = deck.splice(0