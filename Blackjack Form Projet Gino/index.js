let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")
let cards = []
let sum = 0

// let player = {
//     name: "Gineston",
//     chips: 2400
// }

let playerName = "Gineston" ;
let playerChips = 0 ;


messageEl.textContent = "Want to play a round?"
playerEl.textContent = playerName + ": $" + playerChips


function getRandomCard() {
    let cardRand = Math.floor(Math.random()*11) + 1 ;
    return cardRand
}



function startgame() {
    let card1 = getRandomCard()
    let card2 = getRandomCard()

    cards = [card1, card2]
    sum = card1 + card2  
    rendergame() 
}
function rendergame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    
    for (let i = 0 ; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"

    } else if (sum === 21 ) {
        messageEl.textContent = "You've got Blackjack!"
        playerChips += 100 
        playerEl.textContent = playerName + ": $" + playerChips
    } else {
        messageEl.textContent = "You're out of the game!"
    }
}

function newcard() {
        if(sum < 21) {
            let newCard = getRandomCard()
            sum += newCard
            cards.push(newCard)
            rendergame()    
        } 
}  