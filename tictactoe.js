
let gameBoard = (function()
{
  let board = [['-','-','-'],
              ['-','-','-'],
              ['-','-','-']];

  let getBoard = function()
  {
    return board;
  };

  let setBoard = function(userChoice,row,column)
  {
    for(let i=0; i < board.length; i++)
    {
      for(let c=0; c < board[i].length; c++)
      {
        switch(userChoice)
        {
          case "x": 
          board[row][column] = "x";
          break;
          case "o": 
          board[row][column] = "o";
          break;
        }
      }
    }
  };
  return {getBoard, setBoard};
})();

document.querySelector("#return").addEventListener("click",
  ()=>
  {
    console.log(gameBoard.getBoard());
  }
)

document.querySelector("#modify").addEventListener("click",
  ()=>
  {
    console.log(gameBoard.setBoard("x",0,1));
  }
)