document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'image7',
            img: 'images/image7.png'
        },
        {
            name: 'image7',
            img: 'images/image7.png'
        },
        {
            name: 'image13',
            img: 'images/image13.png'
        },
        {
            name: 'image13',
            img: 'images/image13.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'heartCloud',
            img: 'images/heartCloud.png'
        },
        {
            name: 'heartCloud',
            img: 'images/heartCloud.png'
        },
        {
            name: 'sunset',
            img: 'images/sunset.png'
        },
        { 
            name: 'sunset',
            img: 'images/sunset.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },
        {
            name: 'image22',
            img: 'images/image22.png'
        },
        { 
            name: 'image22',
            img: 'images/image22.png'
        },
        {
            name: 'image19',
            img: 'images/image19.png'
        },
        { 
            name: 'image19',
            img: 'images/image19.png'
        },
        {
            name: 'image18',
            img: 'images/image18.png'
        },
        { 
            name: 'image18',
            img: 'images/image18.png'
        },
        {
            name: 'image16',
            img: 'images/image16.png'
        },
        { 
            name: 'image16',
            img: 'images/image16.png'
        },
        {
            name: 'image12',
            img: 'images/image12.png'
        },
        { 
            name: 'image12',
            img: 'images/image12.png'
        },
        {
            name: 'jellyfish',
            img: 'images/jellyfish.png'
        },
        { 
            name: 'jellyfish',
            img: 'images/jellyfish.png'
        }, 
        {
            name: 'image20',
            img: 'images/image20.png'
        },
        { 
            name: 'image20',
            img: 'images/image20.png'
        }, 
        {
            name: 'image9',
            img: 'images/image9.png'
        },
        { 
            name: 'image9',
            img: 'images/image9.png'
        },
        {
            name: 'image1',
            img: 'images/image1.png'
        },
        { 
            name: 'image1',
            img: 'images/image1.png'
        }, 
        {
            name: 'image3',
            img: 'images/image3.png'
        },
        { 
            name: 'image3',
            img: 'images/image3.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/image11.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/image11.png')
            cards[optionTwoId].setAttribute('src', 'images/image11.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/image11.png')
            cards[optionTwoId].setAttribute('src', 'images/image11.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations, you found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})