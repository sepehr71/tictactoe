let tictactoe = {
    items: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
}

function change(position) {

    document.getElementById(position).textContent = 'x';
    tictactoe.items[position] = 'x';
    console.log(tictactoe.items);
    judge();
    cpuAction();
}

function cpuAction() {

    for (let item in tictactoe.items) {
        if (tictactoe.items[item] === '-') {
            document.getElementById(item).textContent = 'o';
            tictactoe.items[item] = 'o';
            return;
        }
    }
    judge();
}
function judge() {

}
