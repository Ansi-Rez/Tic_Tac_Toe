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



//GameFlow

let gameFlow = (function ()
{
  let plx = playerFactory("Kadeem",1);
  let plo = playerFactory("Nyron",2);

  //c for condition
  let c = true;
  let currentplayer = plx.id;

  let current_board = gameBoard.getBoard();

  while(c)
  {
      if(currentplayer == 1)
      {
        let row = prompt(plx.name + " please enter the row you want to enter your cross");
        let col = prompt(plx.name + " please enter the column you want to enter your cross");
        gameBoard.setBoard(plx.id,row,col);
        console.log(current_board);
        
        if((current_board[0][0] == 'x' && current_board[0][1] == 'x' && current_board[0][2] == 'x')||
        (current_board[1][0] == 'x' && current_board[1][1] == 'x' && current_board[1][2] == 'x')||
        (current_board[2][0] == 'x' && current_board[2][1] == 'x' && current_board[2][2] == 'x')||
        (current_board[0][0] == 'x' && current_board[1][0] == 'x' && current_board[2][0] == 'x')||
        (current_board[0][1] == 'x' && current_board[1][1] == 'x' && current_board[2][1] == 'x')||
        (current_board[0][2] == 'x' && current_board[1][2] == 'x' && current_board[2][2] == 'x')||
        (current_board[0][0] == 'x' && current_board[1][1] == 'x' && current_board[2][2] == 'x')||
        (current_board[0][2] == 'x' && current_board[1][1] == 'x' && current_board[2][0] == 'x'))
        {
          console.log(current_board);
          console.log(plx.winMessage);
          c = false;
        }
        else
        {
        currentplayer = plo.id;
        }
      }
      else if(currentplayer == 2)
      {
        let row = prompt(plo.name + " please enter the row you want to enter your cross");
        let col = prompt(plo.name + " please enter the column you want to enter your cross");
        gameBoard.setBoard(plo.id,row,col);
        console.log(current_board);
        
        if((current_board[0][0] == 'o' && current_board[0][1] == 'o' && current_board[0][2] == 'o')||
        (current_board[1][0] == 'o' && current_board[1][1] == 'o' && current_board[1][2] == 'o')||
        (current_board[2][0] == 'o' && current_board[2][1] == 'o' && current_board[2][2] == 'o')||
        (current_board[0][0] == 'o' && current_board[1][0] == 'o' && current_board[2][0] == 'o')||
        (current_board[0][1] == 'o' && current_board[1][1] == 'o' && current_board[2][1] == 'o')||
        (current_board[0][2] == 'o' && current_board[1][2] == 'o' && current_board[2][2] == 'o')||
        (current_board[0][0] == 'o' && current_board[1][1] == 'o' && current_board[2][2] == 'o')||
        (current_board[0][2] == 'o' && current_board[1][1] == 'o' && current_board[2][0] == 'o'))
        {
          console.log(current_board);
          console.log(plo.winMessage);
          c = false;
        }
        else
        {
        currentplayer = plx.id;
        }
      }
  }
})();

//display controller

let displayController = (function()
{
  
})();