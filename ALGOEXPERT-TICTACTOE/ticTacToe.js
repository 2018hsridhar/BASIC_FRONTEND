/* 
Until restarted game, tile disabled
Update dynamic heading ( turn-based )
Say who won ( or tie ) 
Restart but only @ game end -> restart the game
*/

function onTilePress() {
  const gameSquares = document.querySelectorAll(".game-square");
  const dynamicHeading = document.getElementById("game-heading");
  const restartButton = document.getElementById("restart-button");

  var curPlayer = 1;
  var curPlayerState = 'X';
  var gameEnd = false;

  gameSquares.forEach(selectedButton => {
    selectedButton.addEventListener("click", function() {
      if (curPlayer === 1) {
        curPlayer = 2;
        curPlayerState = 'O';
        dynamicHeading.textContent = "Player 1's Turn";
      } else if (curPlayer === 2) {
        curPlayer = 1;
        curPlayerState = 'X';
        dynamicHeading.textContent = "Player 2's Turn";
      }

      selectedButton.textContent = curPlayerState;
      selectedButton.disabled = true;

      let gameEndStatus = findTicTacToeWinner(); // Make sure this function exists
      gameEnd = true;
      console.log(gameEndStatus)

      if (gameEndStatus === "TIE") {
        dynamicHeading.textContent = "Tie Game!";
      } else if (gameEndStatus === "ONE") {
        dynamicHeading.textContent = "Player 1 Won!";
      } else if (gameEndStatus === "TWO") {
        dynamicHeading.textContent = "Player 2 Won!";
      } else {
        gameEnd = false;
      }

      if (gameEnd === true) {
        restartButton.style.display = 'block'; // show restart button
      }
    });
  });

  restartButton.addEventListener("click", function() {
    gameSquares.forEach(gameSquare => {
      gameSquare.textContent = '';
      gameSquare.disabled = false;
    });
    curPlayer = 1;
    curPlayerState = 'X';
    dynamicHeading.textContent = "Player 1's Turn";
    restartButton.style.display = 'none'; // hide button
  });
}

function findTicTacToeWinner()
{
    // Convert NodeList to array (if needed)
    const gameSquares = document.querySelectorAll('.game-square');
    const board = Array.from(gameSquares).map(row => Array.from(row.textContent));
    
    // Count X and O
    let countX = 0;
    let countO = 0;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'X') {
                countX++;
            } else if (board[i][j] === 'O') {
                countO++;
            }
        }
    }
    
    // Early checks
    if (countX === 0 && countO === 0) return true;
    
    const letDiff = Math.abs(countX - countO);
    if (letDiff >= 2) return false;
    if (countO > countX) return false;
    if (countX === 0 && countO > 0) return false;
    
    // Initialize count map
    const encount = { 'X': 0, 'O': 0, ' ': 0 };
    
    // Check verticals
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            const elem = board[0][j];
            if (encount[elem] !== undefined) encount[elem]++;
        }
    }
    
    // Check horizontals
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            const elem = board[i][0];
            if (encount[elem] !== undefined) encount[elem]++;
        }
    }
    
    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        const elem = board[1][1];
        if (encount[elem] !== undefined) encount[elem]++;
    }
    
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        const elem = board[1][1];
        if (encount[elem] !== undefined) encount[elem]++;
    }
    
    // Check frequencies
    let gameEndStatus = 'UNKNOWN'
    if (encount['X'] >= 1) {
      gameEndStatus = "ONE"
    } else if(encount['O'] >= 1){
      gameEndStatus = 'TWO'
    } else {
      gameEndStatus = "TIE"
    }
    
    return gameEndStatus;
  }
