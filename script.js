// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const board = Array(9).fill(null);
    let currentPlayer = "X";

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.getAttribute("data-index");

            if (board[index] === null) {
                board[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWinner(currentPlayer)) {
                    alert(`${currentPlayer} wins!`);
                    resetBoard();
                } else if (board.every(cell => cell !== null)) {
                    alert("It's a draw!");
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winPatterns.some(pattern => {
            return pattern.every(index => board[index] === player);
        });
    }

    function resetBoard() {
        board.fill(null);
        cells.forEach(cell => cell.textContent = "");
        currentPlayer = "X";
    }
});
