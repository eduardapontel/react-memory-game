import React from 'react'
import GameBoard from './GameBoard'

export default function GameContainer(props) {
  return (
    <div id="gameContainer">

    <h2>Total moves: <span id="moves">{props.moves}</span></h2>

    <GameBoard handleFlip={props.handleFlip} cards={props.cards}></GameBoard>

</div>
  )
}
