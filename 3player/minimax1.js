function bestMove() {

    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, 0, false, -Infinity, +Infinity,human);
          board[i][j] = '';
          if (score >= bestScore) {
            bestScore = score;
            move = { i, j };
            //if(bestScore == 10){  //Taking that highest maximum possible score is 10
            //  break;
            //}
          
          }
          
        }
      }
    }
    board[move.i][move.j] = ai;
    currentPlayer = human;
  }
  
  
  let scores = {
    X: 10,
    O: -10,
    Y: -10,
    tie: 0
  };
  
  //Minimax algorithm using alpha beta pruning
  function minimax(board, depth, isMaximizing,alpha,beta,player) {
    let result = checkWinner();
    if (result !== null) {
      return scores[result];
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          // Is the spot available?
          if (board[i][j] == '') {
            board[i][j] = ai;
            let score = minimax(board, depth + 1, false, alpha, beta,human);
            board[i][j] = '';
            bestScore = max(score, bestScore);
            alpha = max(alpha,score);
            if(beta<alpha){
              
              return bestScore;
            }
          }
        }
      }
      return bestScore;
    }
    
    else if(player == human){
      let bestScore = Infinity;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          // Is the spot available?
          if (board[i][j] == '') {
            board[i][j] = human;
            let score = minimax(board, depth + 1, false, alpha, beta, human2);
            board[i][j] = '';
            bestScore = min(score, bestScore);
            beta = min(beta,score);
            if(beta<alpha){
              return bestScore;
            }
          }
        }
      }
      return bestScore;
    }

    else{let bestScore = Infinity;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          // Is the spot available?
          if (board[i][j] == '') {
            board[i][j] = human;
            let score = minimax(board, depth + 1, true, alpha, beta, human2);
            board[i][j] = '';
            bestScore = min(score, bestScore);
            beta = min(beta,score);
            if(beta<alpha){
              return bestScore;
            }
          }
        }
      }
      return bestScore;
    }

    
  }
  