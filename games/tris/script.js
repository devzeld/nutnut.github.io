const table = []; 
let turn = 1;

const grid = document.querySelectorAll("#grid #cell");

const gameAlert = document.querySelector(".game-alert");

for (let i = 0; i < grid.length; i++) {
    let cell = grid[i];

    cell.addEventListener("click", event => {
        console.table(table);
        console.log(turn);
        
        let sign = turn % 2 === 0 ? "X" : "O";

        if (table[i]) {
            return;
        }

        cell.querySelector("p").textContent = sign;
        table[i] = sign;

        if(turn === 9){
            displayAlert("pareggio");
            return;
        }

        if (hasWon()) {
            displayAlert("Ha vinto: " + sign);
            losingIncourage(sign);
        }

        turn++;
    });
}

function hasWon() {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningPatterns.length; i++) {

        const combination = winningPatterns[i];

        const a = combination[0];
        const b = combination[1];
        const c = combination[2];
        
        if (table[a] && table[a] === table[b] && table[b] === table[c]) {
            return true;
        }
    }

    return false;
}


function displayAlert(sign) {
    const alert = gameAlert.querySelector(".alert-message");

    alert.textContent = sign;
}

//abbastanza inutile
function losingIncourage(name) {
    const alert = gameAlert.querySelector(".losing-message");

    const encourages = ["Sarà per la prossima volta " + name, "Il tuo avversario ha avuto solo fortuna, " + name, "Ti servirebbe un pò di allenamento " + name];


    let rN = Math.random() * 10 / 2;
    console.log(rN.toFixed());
    alert.textContent = encourages[rN.toFixed()];
}

