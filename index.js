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

const myGameBoard = gameBoard();
myGameBoard.displaySelection(0, 'X');
