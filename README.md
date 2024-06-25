# Memory Game of Technologies 🎮

Welcome to the Memory Game of Technologies! This is a simple and fun game to test your memory as you match pairs of popular technologies.

## About the New Version

The game has been migrated to React! This update doesn't change any functionality but improves the code's performance and maintainability.

## How to Play 🕹️

1. Open the [game link](https://eduardapontel.github.io/memory-game/) in your preferred browser.
2. You'll see a grid of cards face down.
3. Click on two cards to reveal their matching technologies.
4. If the technologies of the two cards match, they will stay face up. Otherwise, they will be turned face down again.
5. Continue flipping cards until you find all pairs of technologies.
6. The game ends when all pairs are found.

## Top 3 Ranking 🏆

At the end of the game, a ranking of the top three rounds will be displayed, showing the rounds that were completed with the fewest moves. Try to reach the top of the ranking!

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React

## Project Structure

- `public/`
  - `assets/`
    - `images/`: Contains images used in the game.
  - `index.html`: The main HTML file where the content is rendered.
- `src/`
  - `components/`
    - `CardElement.js`: Component representing an individual card.
    - `GameBoard.js`: Component for the game board.
    - `GameContainer.js`: Component containing the game container.
    - `GameOver.js`: Component for the game over screen.
  - `game/`
    - `game.js`: Contains game logic.
  - `index.css`: Contains styles for the game.
  - `index.js`: Entry point for the React application.
  - `MemoryGame.js`: Main component for the memory game.

## How to Contribute 🤝

If you'd like to contribute to this game, feel free to send pull requests or open issues.
