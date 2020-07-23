let board = [
  ['', '', '',''],
  ['', '', '',''],
  ['', '', '',''],
  ['', '', '','']
];


let w;
let h;


let ai = 'X';
let human = 'O';
let human2 = 'Y';

board[0][0] = 'X';  //Initialising the board as AI has first move


var ran = 1;


let currentPlayer = human;

function setup() {
createCanvas(400, 400);
w = width / 4;
h = height / 4;
//bestMove();
}

function equals3(a, b, c) {
return a == b && b == c && a != '';
}

function checkWinner() {
let winner = null;

// Horizontal
for (let i = 0; i < 4; i++) {
  if (equals3(board[i][0], board[i][1], board[i][2])) {
    winner = board[i][0];

  }
  else if(equals3(board[i][1], board[i][2], board[i][3])) {
    winner = board[i][1];
  }
}

// Vertical
for (let i = 0; i < 4; i++) {
  if (equals3(board[0][i], board[1][i], board[2][i])) {
    winner = board[0][i];
  }
  else if (equals3(board[1][i], board[2][i], board[3][i])) {
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
if (equals3(board[1][0], board[2][1], board[3][2])) {
  winner = board[1][0];
}
if (equals3(board[3][0], board[2][1], board[1][2])) {
  winner = board[2][0];
}
if (equals3(board[0][1], board[1][2], board[2][3])) {
  winner = board[0][1];
}
if (equals3(board[2][1], board[1][2], board[0][3])) {
  winner = board[2][1];
}
if (equals3(board[1][1], board[2][2], board[3][3])) {
  winner = board[1][1];
}
if (equals3(board[3][1], board[2][2], board[1][3])) {
  winner = board[2][1];
}




let openSpots = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
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
if (currentPlayer == human2) {
  
  let x = floor(mouseX / w);
  let y = floor(mouseY / h);
  if (board[x][y] == '') {
    board[x][y] = human2;
    currentPlayer = ai;
    
    if(ran == 1){
      if(board[1][0]=='') board[1][0]=ai;
      else if(board[0][1]=='')board[0][1]=ai;
      else board[1][1]==ai;
      ran =0;
      currentPlayer=human;
    }
    else {
      bestMove();
    }
    
  }
}
 if (currentPlayer == human) {
  let x = floor(mouseX / w);
  let y = floor(mouseY / h);
  if (board[x][y] == '') {
    board[x][y] = human;
    currentPlayer = human2;
    //bestMove();
  }
}
else {
  let x = floor(mouseX / w);
    let y = floor(mouseY / h);
    if (board[x][y] == '') {
      board[x][y] = ai;
      currentPlayer = human;
      //bestMove();
 


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
line(w*3, 0, w*3, height);
line(0, h * 3, width, h * 3);

for (let j = 0; j < 4; j++) {
  for (let i = 0; i < 4; i++) {
    let x = w * i + w / 2;
    let y = h * j + h / 2;
    let spot = board[i][j];
    textSize(32);
    let r = w / 4;
    if (spot == human) {
      noFill();
      ellipse(x, y, r * 2);
    } else if (spot == ai) {
      line(x - r, y - r, x + r, y + r);
      line(x + r, y - r, x - r, y + r);
    }
    else if(spot == human2){
      line(x+r , y -r, x , y );
      line(x-r , y-r, x , y );
      line(x,y,x,y+r);
    }
  }
}

let result = checkWinner();
if (result != null) {
  
  noLoop();
  let resultP = createP('');
  resultP.style('font-size', '45pt');
  if (result == 'tie') {
    resultP.html('Tie!');
  } else {
    resultP.html(`${result} wins!`);
  }
}
}


