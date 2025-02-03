
const table = []; 
let turn = 1;

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6]
]

const grid = document.querySelectorAll("#grid #cell");

grid.forEach(cell => {
    cell.addEventListener("click", event => {
        console.log(table.toString());
        console.log(turn);

        if (turn % 2 === 0) {
            if (cell.querySelector("p").textContent === "" || cell.querySelector("p").textContent !== "O") {
                table[turn - 1] = "X";
                cell.querySelector("p").textContent = "X";
            } else {
                return;
            }
        } else{
            if (cell.querySelector("p").textContent === "" || cell.querySelector("p").textContent !== "X") {
                table[turn - 1] = "O";
                cell.querySelector("p").textContent = "O";
            }else{
                return;
            }
        }

        if(turn === 9){
            return;
        }

        turn++;
    })
});

