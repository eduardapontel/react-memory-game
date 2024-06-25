let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,
    moves: 0,
    positions: new Set([]),

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
    ],

    cards: null,

    createCardsFromTechs: function () {
        this.cards = [];
        for (let tech of this.techs) {
            this.cards.push(this.createPairFromTech(tech));
        }
        this.cards = this.cards.flatMap((pair) => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairFromTech: function (tech) {
        return [
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            currentIndex--;
            randomIndex = Math.floor(Math.random() * currentIndex);

            [this.cards[randomIndex], this.cards[currentIndex]] = [
                this.cards[currentIndex],
                this.cards[randomIndex],
            ];
        }
    },

    setCard: function (id) {
        let card = this.cards.filter((card) => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function () {
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    checkGameOver: function () {
        return this.cards.filter((card) => !card.flipped).length === 0;
    },

    unflipCards: function () {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    calculateRanking: function () {
        this.positions.add(this.moves);

        let positionsArray = [...this.positions];
        positionsArray.sort((a, b) => a - b);

        for (let i = 1; i < 4; i++) {
            localStorage.setItem(`place${i}`, positionsArray[i - 1]);
        }
    },

    flipCard: function (cardId, gameOverCallback, noMatchCallback) {
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                this.moves++;
                if (this.checkMatch()) {
                    this.clearCards();
                    if (this.checkGameOver()) {
                        gameOverCallback();
                    }
                } else {
                    setTimeout(() => {
                        this.unflipCards();
                        noMatchCallback();
                    }, 1000);
                }
            }
        }
    },
};

export default game;
