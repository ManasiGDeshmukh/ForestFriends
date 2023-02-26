var cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = document.querySelectorAll('.card_inner')
    cards[i].addEventListener('click', function (){
        card[i].classList.toggle('is-flipped');
    })    
}


