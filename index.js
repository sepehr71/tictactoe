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
        steps.forEach(step => {
            for (let key in step.points) {
                if (!success && tictactoe.items[step.points[key]] === 'o' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff] && tictactoe.items[step.points[key] + step.diff + step.diff] === '-') {
                    tictactoe.items[step.points[key] + step.diff + step.diff] = 'o';
                    document.getElementById(step.points[key] + step.diff + step.diff).textContent = 'o';
                    success = true;
                    judge();

                }
                else if (!success && tictactoe.items[step.points[key] + step.diff] === 'o' && tictactoe.items[step.points[key] + step.diff] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key]] === '-') {
                    tictactoe.items[step.points[key]] = 'o';
                    document.getElementById(step.points[key]).textContent = 'o';
                    success = true;
                    judge();

                }
                else if (!success && tictactoe.items[step.points[key]] === 'o' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key] + step.diff] === '-') {
                    tictactoe.items[step.points[key] + step.diff] = 'o';
                    document.getElementById(step.points[key] + step.diff).textContent = 'o';
                    success = true;
                    judge();

                }
            }
        })
        if (!success) {
            steps.forEach(step => {
                for (let key in step.points) {
                    if (!success && tictactoe.items[step.points[key]] === 'x' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff] && tictactoe.items[step.points[key] + step.diff + step.diff] === '-') {
                        tictactoe.items[step.points[key] + step.diff + step.diff] = 'o';
                        document.getElementById(step.points[key] + step.diff + step.diff).textContent = 'o';
                        success = true;
                        judge();

                    }
                    else if (!success && tictactoe.items[step.points[key] + step.diff] === 'x' && tictactoe.items[step.points[key] + step.diff] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key]] === '-') {
                        tictactoe.items[step.points[key]] = 'o';
                        document.getElementById(step.points[key]).textContent = 'o';
                        success = true;
                        judge();

                    }
                    else if (!success && tictactoe.items[step.points[key]] === 'x' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key] + step.diff] === '-') {
                        tictactoe.items[step.points[key] + step.diff] = 'o';
                        document.getElementById(step.points[key] + step.diff).textContent = 'o';
                        success = true;
                        judge();

                    }
                }
            })
        }
        if (!success) {
            steps.forEach(step => {
                for (let key in step.points) {
                    if (!success && tictactoe.items[step.points[key]] === '-' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff] && tictactoe.items[step.points[key] + step.diff + step.diff] === 'o') {
                        tictactoe.items[step.points[key]] = 'o';
                        document.getElementById(step.points[key]).textContent = 'o';
                        success = true;
                        judge();

                    }
                    else if (!success && tictactoe.items[step.points[key] + step.diff] === '-' && tictactoe.items[step.points[key] + step.diff] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key]] === 'o') {
                        tictactoe.items[step.points[key] + step.diff] = 'o';
                        document.getElementById(step.points[key] + step.diff).textContent = 'o';
                        success = true;
                        judge();

                    }
                    else if (!success && tictactoe.items[step.points[key]] === '-' && tictactoe.items[step.points[key]] === tictactoe.items[step.points[key] + step.diff + step.diff] && tictactoe.items[step.points[key] + step.diff] === 'o') {
                        tictactoe.items[step.points[key] + step.diff + step.diff] = 'o';
                        document.getElementById(step.points[key] + step.diff + step.diff).textContent = 'o';
                        success = true;
                        judge();

                    }
                }
            })
        }
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        if (!success) {
            let stack = [];
            for (let item in tictactoe.items) {
                if (tictactoe.items[item] === '-')
                    stack.push(item);
            }


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
