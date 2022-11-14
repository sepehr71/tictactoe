let tictactoe = {
    items: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
    isFinished: false,
    isYourTurn: true
}

function change(position) {
    if (tictactoe.items[position] === '-' && tictactoe.isFinished === false && tictactoe.isYourTurn === true) {
        document.getElementById(position).textContent = 'x';
        tictactoe.isYourTurn = false;
        tictactoe.items[position] = 'x';
        judge();
        setTimeout(() => {
            cpuAction();
        }, 1500)

    }
}

function assigner(position) {
    tictactoe.items[position] = 'o';
    document.getElementById(position).textContent = 'o';
    judge();
}

function cpuAction() {
    tictactoe.isYourTurn = true;
    if (tictactoe.isFinished === false) {
        const steps = [
            { points: [0, 3, 6], diff: 1 },
            { points: [2], diff: 2 },
            { points: [0, 1, 2], diff: 3 },
            { points: [0], diff: 4 }
        ]
        let success = false;

        tryToWin('o', '-');
        tryToWin('x', '-');
        tryToWin('-', 'o');

        function tryToWin(element1, element2) {

            steps.forEach(step => {
                for (let key in step.points) {
                    if (!success
                        && tictactoe.items[step.points[key]] === element1
                        && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff]
                        && tictactoe.items[step.points[key] + step.diff + step.diff] === element2) {
                        success = true;
                        if (element2 === '-')
                            assigner(step.points[key] + step.diff + step.diff);
                        else
                            assigner(step.points[key]);
                    }
                    else if (!success
                        && tictactoe.items[step.points[key] + step.diff] === element1
                        && tictactoe.items[step.points[key] + step.diff] === tictactoe.items[step.points[key] + step.diff + step.diff]
                        && tictactoe.items[step.points[key]] === element2) {
                        success = true;
                        if (element2 === '-')
                            assigner(step.points[key]);
                        else
                            assigner(step.points[key] + step.diff);
                    }
                    else if (!success
                        && tictactoe.items[step.points[key]] === element1
                        && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff + step.diff]
                        && tictactoe.items[step.points[key] + step.diff] === element2) {
                        success = true;
                        if (element2 === '-')
                            assigner(step.points[key] + step.diff);
                        else
                            assigner(step.points[key] + step.diff + step.diff);
                    }
                }
            })
        }

        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        if (!success) {
            let guessBox = [];
            for (let item in tictactoe.items)
                if (tictactoe.items[item] === '-')
                    guessBox.push(tictactoe.items[item]);

            let guessBox_selected = random(0, guessBox.length + 1);
            document.getElementById(guessBox_selected).textContent = 'o';
            tictactoe.items[guessBox_selected] = 'o';
            guessBox.length = 0;
        }
    }
}

function judge() {
    const steps = [
        { diff: 1, start: [0, 3, 6] },
        { diff: 2, start: [2] },
        { diff: 3, start: [0, 1, 2] },
        { diff: 4, start: [0] }
    ]

    steps.forEach(step => {
        for (let key in step.start) {
            if (tictactoe.items[step.start[key]] !== '-'
                && tictactoe.items[step.start[key]] === tictactoe.items[step.start[key] + step.diff]
                && tictactoe.items[step.start[key] + step.diff] === tictactoe.items[step.start[key] + step.diff + step.diff]) {
                document.getElementById("score-winner").textContent = tictactoe.items[step.start[key]];
                // changing color place of winner player 
                document.getElementById(step.start[key]).style.backgroundColor = '#F56e6e';
                document.getElementById(step.start[key] + step.diff).style.backgroundColor = '#F56e6e';
                document.getElementById(step.start[key] + step.diff + step.diff).style.backgroundColor = '#F56e6e';
                tictactoe.isFinished = true;
            }
        }
    })
}

function clearTable() {
    tictactoe.items = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    tictactoe.isFinished = false;
    for (let key in tictactoe.items) {
        document.getElementById(key).textContent = null;
        document.getElementById(key).style.backgroundColor = '#70b8d9';
    }
    document.getElementById('score-winner').textContent = null;
}