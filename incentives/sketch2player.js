// Tic Tac Toe AI with Minimax Algorithm

// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let w;
let h;

let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;

function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
}

function equals3(a, b, c) {
    return a == b && b == c && a != '';
}

function checkWinner() {
    let winner = null;

    // Horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }

    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }

    if (winner == null && openSpots == 0) {
        return 'tie';
    } else {
        return winner;
    }
}

function mousePressed() {
    let x = floor(mouseX / w);
    let y = floor(mouseY / h);
    if (board[x][y] == '') {
        board[x][y] = currentPlayer;
        if(currentPlayer==player1){
            currentPlayer = player2;
        }
        else{
            currentPlayer = player1;
        }
    }
}

function draw() {
    background(255);
    strokeWeight(4);

    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let spot = board[i][j];
            textSize(32);
            let r = w / 4;
            if (spot == player1) {
                noFill();
                ellipse(x, y, r * 2);
            } else if (spot == player2) {
                line(x - r, y - r, x + r, y + r);
                line(x + r, y - r, x - r, y + r);
            }
        }
    }

    let result = checkWinner();
    if (result != null) {
        noLoop();
        let resultP = createP('');
        resultP.style('font-size', '32pt');
        if (result == 'tie') {
            resultP.html('Tie!');
        } else {
            if(result=='X'){
                resultP.html(`player1 wins!`);
            }
            else{
                resultP.html(`player2 wins!`);
            }
        }
    }
}
