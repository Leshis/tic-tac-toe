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
    const getBoardArray = () => gameBoardArray;
    return {
        displaySelection,
        resetBoard,
        getBoardArray,
    };
});

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return { getName, getSymbol };
};

const isGameWon = (gameBoardArray) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
            gameBoardArray[a]
            && gameBoardArray[a] === gameBoardArray[b]
            && gameBoardArray[a] === gameBoardArray[c]
        ) {
            return true;
        }
    }
    return false;
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
        if (isGameWon(myGameBoard.getBoardArray())) {
            console.log(`${currentPlayer.getName()} has won the game!`);
            myGameBoard.resetBoard();
            currentPlayer = player1;
        } else {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    }
});

resetButton.addEventListener('click', () => {
    myGameBoard.resetBoard();
    currentPlayer = player1;
});
