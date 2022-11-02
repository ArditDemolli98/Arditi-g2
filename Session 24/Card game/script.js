let message = document.querySelector("h3");
let deckId;

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id;
    })
    .catch(err => {
        console.log(`error ${err}`);
    })



document.querySelector("button").addEventListener("click", drawCards);

function drawCards() {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector("#player-1").src = data.cards[0].image;
            document.querySelector("#player-2").src = data.cards[1].image;
            const player1Value = convertToNum(data.cards[0].value);
            const player2Value = convertToNum(data.cards[1].value);
            if (player1Value > player2Value) {
                message.innerText = "Player 1 wins";
            } else if (player1Value < player2Value) {
                message.innerText = "Player 2 wins";
            } else {
                message.innerText = "There is a tie";
            }
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
}

function convertToNum(value) {
    if (value === "JACK") {
        return 11;
    } else if (value === "QUEEN") {
        return 12;
    } else if (value === "KING") {
        return 13;
    } else if (value === "ACE") {
        return 14;
    } else {
        return Number(value);
    }
}