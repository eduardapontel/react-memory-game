import React, { useEffect, useState } from 'react';
import GameOver from './components/GameOver';
import game from './game/game';
import GameContainer from './components/GameContainer';

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    }, []);

    function restart() {
        game.moves = 0;
        setCards(game.createCardsFromTechs());
        setGameOver(false);
    }

    function refreshCards() {
        setCards([...game.cards]);
    }

    function handleFlip(card) {
        game.flipCard(card.id, ()=>setGameOver(true), refreshCards)
        refreshCards();
    }

    return (
        <div className="body-memory-game">
            <GameContainer moves={game.moves} handleFlip={handleFlip} cards={cards}></GameContainer>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    );
}
