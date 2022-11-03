let tictactoe = {
    items: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
    isFinished: false
}

function change(position) {
    if (tictactoe.items[position] === '-' && tictactoe.isFinished === false) {
        document.getElementById(position).textContent = 'x';
        tictactoe.items[position] = 'x';
        judge();
        cpuAction();
    }
}

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// function canYouWin() {

// }

function cpuAction() {

    // canYouWin();
    // canOppWin();

    for (let item in tictactoe.items) {
        if (tictactoe.items[item] === '-' && tictactoe.isFinished === false) {
            document.getElementById(item).textContent = 'o';
            tictactoe.items[item] = 'o';
            judge();
            return;
        }
    }
}
function judge() {
    const steps = {
        step1: { diff: 1, start: [0, 3, 6] },
        step2: { diff: 2, start: [2] },
        step3: { diff: 3, start: [0, 1, 2] },
        step4: { diff: 4, start: [4] }
    }

    for (let step in steps) {
        for (let i = 0; i < 3; i++) {
            console.log('d');
            if (tictactoe.items[step.start[i]] !== '-' && tictactoe.items[step.start[i]] === tictactoe.items[step.start[i] + step.diff] && tictactoe.items[step.start[i] + step.diff] === tictactoe.items[step.start[i] + step.diff + step.diff]) {
                console.log('ff');
                document.getElementById("score-winner").textContent = tictactoe.items[step.start[i]];
                tictactoe.isFinished = true;
            }
        }
    }




    // if (tictactoe.items[0] !== '-' && tictactoe.items[0] === tictactoe.items[1] && tictactoe.items[1] === tictactoe.items[2]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[0];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[3] !== '-' && tictactoe.items[3] === tictactoe.items[4] && tictactoe.items[4] === tictactoe.items[5]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[3];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[6] !== '-' && tictactoe.items[6] === tictactoe.items[7] && tictactoe.items[7] === tictactoe.items[8]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[6];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[0] !== '-' && tictactoe.items[0] === tictactoe.items[3] && tictactoe.items[3] === tictactoe.items[6]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[0];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[1] !== '-' && tictactoe.items[1] === tictactoe.items[4] && tictactoe.items[4] === tictactoe.items[7]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[1];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[2] !== '-' && tictactoe.items[2] === tictactoe.items[5] && tictactoe.items[5] === tictactoe.items[8]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[2];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[0] !== '-' && tictactoe.items[0] === tictactoe.items[4] && tictactoe.items[4] === tictactoe.items[8]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[0];
    //     tictactoe.isFinished = true;
    // }
    // if (tictactoe.items[2] !== '-' && tictactoe.items[2] === tictactoe.items[4] && tictactoe.items[4] === tictactoe.items[6]) {
    //     document.getElementById("score-winner").textContent = tictactoe.items[2];
    //     tictactoe.isFinished = true;
    // }
}
