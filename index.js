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
    const steps = [
        { diff: 1, start: [0, 3, 6] },
        { diff: 2, start: [2] },
        { diff: 3, start: [0, 1, 2] },
        { diff: 4, start: [4] }
    ]

    steps.forEach(step => {
        for (let key in step.start) {
            if (tictactoe.items[step.start[key]] !== '-' && tictactoe.items[step.start[key]] === tictactoe.items[step.start[key] + step.diff] && tictactoe.items[step.start[key] + step.diff] === tictactoe.items[step.start[key] + step.diff + step.diff]) {
                document.getElementById("score-winner").textContent = tictactoe.items[step.start[key]];
                tictactoe.isFinished = true;
            }
        }
    })






    // for (let step in steps) {
    //     for (let s in step.start) {
    //         if (tictactoe.items[step.start[s]] !== '-' && tictactoe.items[step.start[s]] === tictactoe.items[step.start[s] + step.diff] && tictactoe.items[step.start[s] + step.diff] === tictactoe.items[step.start[s] + step.diff + step.diff]) {
    //             document.getElementById("score-winner").textContent = tictactoe.items[step.start[s]];
    //             tictactoe.isFinished = true;
    //         }
    //     }
    // }
}

