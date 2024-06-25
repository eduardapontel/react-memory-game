import React, { Fragment } from 'react';
import game from '../game/game';

export default function GameOver(props) {
    function renderRankingItems() {
        game.calculateRanking();
        const rankingItems = [];
        for (let i = 1; i < 4; i++) {
            let rankingMoves = localStorage.getItem(`place${i}`);
            rankingMoves !== 'undefined' ? (rankingMoves += ' moves') : (rankingMoves = '-');
            rankingItems.push(
                <tr>
                    <td key={i}>
                        <img
                            className="icon"
                            alt={`${i}° place`}
                            src={`assets/images/${i}-place.png`}
                        ></img>
                    </td>
                    <td>{rankingMoves}</td>
                </tr>
            );
        }

        return rankingItems;
    }

    return props.show ? (
        <div id="gameOver">
            <div>Congratulations, you completed the game!</div>

            <div id="ranking">
                <table>
                    <tbody>{renderRankingItems()}</tbody>
                </table>
            </div>
            <button id="restart" onClick={props.handleRestart}>
                Restart
            </button>
        </div>
    ) : (
        <Fragment />
    );
}
