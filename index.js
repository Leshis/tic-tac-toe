const gameBoardElement = document.getElementById('board');
const resetButton = document.getElementById('reset-button');

const gameBoard = (() => {
    let gameBoardArray = new Array(9).fill('');

    const updateBoard = () => {
        for (let i = 0; i < gameBoardArray.length; i++) {
            const square = document.getElementById(`square-${i}`);
            square.innerText = gameBoardArray[i];
        }
    };
    const displaySelection = (num, selection) => {
        gameBoardArray[num] = selection;
        updateBoard();
    };
    const resetBoard = () => {
        gameBoardArray = new Array(9).fill('');
        updateBoard();
    };
    return {
        displaySelection,
        resetBoard,
    };
});

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
};

const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');
const myGameBoard = gameBoard();
let currentPlayer = player1;

gameBoardElement.addEventListener('click', (e) => {
    const square = e.target;
    const squareIndex = Number(square.dataset.index);
    if (square.innerText === '') {
        myGameBoard.displaySelection(squareIndex, currentPlayer.getSymbol());
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
});

resetButton.addEventListener('click', () => {
    myGameBoard.resetBoard();
    currentPlayer = player1;
});
