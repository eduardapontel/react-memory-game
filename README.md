# Memory Game of Technologies 🎮

Welcome to the Memory Game of Technologies! This is a simple and fun game to test your memory as you match pairs of popular technologies.

## About the New Version

The game has been migrated to React! This update doesn't change any functionality but improves the code's performance and maintainability.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository or download the project files.
2. Open a terminal in the project directory.
3. Run the following command to install the necessary packages:

```sh
  npm install
```
4. Run the following command to start the server on port 3000:

```sh
  npm start
```

## How to Play 🕹️

1. You'll see a grid of cards face down, click on two cards to reveal their matching technologies.
2. If the technologies of the two cards match, they will stay face up. Otherwise, they will be turned face down again.
3. Continue flipping cards until you find all pairs of technologies.
4. The game ends when all pairs are found.

## Top 3 Ranking 🏆

At the end of the game, a ranking of the top three rounds will be displayed, showing the rounds that were completed with the fewest moves. If you want to play again and improve your score, simply click the "Restart" button to reset the game.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React

## Project Structure

- `node_modules` - Contains all the npm dependencies for the project.
- `public/`
  - `assets/`
    - `images/` - Contains images used in the game.
  - `index.html` - The main HTML file where the content is rendered.
- `src/`
  - `components/`
    - `CardElement.js` - Component representing an individual card.
    - `GameBoard.js` - Component for the game board.
    - `GameContainer.js` - Component containing the game container.
    - `GameOver.js` - Component for the game over screen.
  - `game/`
    - `game.js` - Contains game logic.
  - `index.css` - Contains styles for the game.
  - `index.js` - Entry point for the React application.
  - `MemoryGame.js` - Main component for the memory game.
- `.gitignore` - Specifies files and directories that should be ignored by Git.
- `package-lock.json` - Automatically generated file that describes the exact dependency tree installed in node_modules to ensure consistent installs.
- `package.json` - Contains metadata about the project, including dependencies, scripts, and project details.
- `README.md` - Provides an overview of the project, including setup instructions, usage guidelines, and other relevant information.

## How to Contribute 🤝

If you'd like to contribute to this game, feel free to send pull requests or open issues.
