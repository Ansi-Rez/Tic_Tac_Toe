//Gameboard

let gameBoard = (function()
{
  let board = [['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];

  let getBoard = function()
  {
    return board;
  };

  let setBoard = function(playerid,row,column)
  {
    for(let i=0; i < board.length; i++)
    {
      for(let c=0; c < board[i].length; c++)
      {
        switch(playerid)
        {
          case 1: 
          board[row][column] = "x";
          break;
          case 2: 
          board[row][column] = "o";
          break;
        }
      }
    }
  };
  return {getBoard, setBoard};
})();

//Player

let playerFactory = function(name,id)
{
    const winMessage = name + " is the winner of this round";

    return {name,id,winMessage}
}
  
let player1 = playerFactory("Kadeem",1);
let player2 = playerFactory("Nyron",2);
let round = true;
let current_player = player1.id;
let plturn = document.querySelector("#player_turn");
plturn.textContent = player1.name;
//Game

let game = (function()
{

  let squares = document.querySelectorAll(".tictaccontainer td");

  for(let i=0; i < squares.length; i++)
  {
    squares[i].addEventListener("click",(e)=>
    {
      if(round && e.target.textContent != 'x' && e.target.textContent != 'o')
      {
        changeSquares(Number(e.target.getAttribute("data-square-row")),Number(e.target.getAttribute("data-square-col")),e.target);
        console.log("hello");
      }
      else
      {
        console.log("hi");
      }
    });
  }

  let changeSquares = function(row,col,square)
  {
    gameBoard.setBoard(current_player,row,col);
    square.textContent = gameBoard.getBoard()[row][col];
    if(current_player == player1.id)
    {
      current_player = player2.id;
      plturn.textContent = player2.name;
    }
    else if(current_player == player2.id)
    {
      current_player = player1.id;
      plturn.textContent = player1.name;
    }
    
    if((gameBoard.getBoard()[0][0] == 'x' && gameBoard.getBoard()[0][1] == 'x' && gameBoard.getBoard()[0][2] == 'x')||
    (gameBoard.getBoard()[1][0] == 'x' && gameBoard.getBoard()[1][1] == 'x' && gameBoard.getBoard()[1][2] == 'x')||
    (gameBoard.getBoard()[2][0] == 'x' && gameBoard.getBoard()[2][1] == 'x' && gameBoard.getBoard()[2][2] == 'x')||
    (gameBoard.getBoard()[0][0] == 'x' && gameBoard.getBoard()[1][0] == 'x' && gameBoard.getBoard()[2][0] == 'x')||
    (gameBoard.getBoard()[0][1] == 'x' && gameBoard.getBoard()[1][1] == 'x' && gameBoard.getBoard()[2][1] == 'x')||
    (gameBoard.getBoard()[0][2] == 'x' && gameBoard.getBoard()[1][2] == 'x' && gameBoard.getBoard()[2][2] == 'x')||
    (gameBoard.getBoard()[0][0] == 'x' && gameBoard.getBoard()[1][1] == 'x' && gameBoard.getBoard()[2][2] == 'x')||
    (gameBoard.getBoard()[0][2] == 'x' && gameBoard.getBoard()[1][1] == 'x' && gameBoard.getBoard()[2][0] == 'x'))
    {
      plturn.textContent = player1.winMessage;
      round = false;
    }
    else if((gameBoard.getBoard()[0][0] == 'o' && gameBoard.getBoard()[0][1] == 'o' && gameBoard.getBoard()[0][2] == 'o')||
    (gameBoard.getBoard()[1][0] == 'o' && gameBoard.getBoard()[1][1] == 'o' && gameBoard.getBoard()[1][2] == 'o')||
    (gameBoard.getBoard()[2][0] == 'o' && gameBoard.getBoard()[2][1] == 'o' && gameBoard.getBoard()[2][2] == 'o')||
    (gameBoard.getBoard()[0][0] == 'o' && gameBoard.getBoard()[1][0] == 'o' && gameBoard.getBoard()[2][0] == 'o')||
    (gameBoard.getBoard()[0][1] == 'o' && gameBoard.getBoard()[1][1] == 'o' && gameBoard.getBoard()[2][1] == 'o')||
    (gameBoard.getBoard()[0][2] == 'o' && gameBoard.getBoard()[1][2] == 'o' && gameBoard.getBoard()[2][2] == 'o')||
    (gameBoard.getBoard()[0][0] == 'o' && gameBoard.getBoard()[1][1] == 'o' && gameBoard.getBoard()[2][2] == 'o')||
    (gameBoard.getBoard()[0][2] == 'o' && gameBoard.getBoard()[1][1] == 'o' && gameBoard.getBoard()[2][0] == 'o'))
    {
      plturn.textContent = player2.winMessage;
      round = false;
    }
  }
})();