import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function Game(){
  const [isX,SetIsX] =useState(false)
  const [squares,setSquares] = useState([,,,,,,,,]);
   
  
  function handleClick(index){
    if(squares[index] || clalculateWinner(squares)) return;
    let tab = squares.slice();
    tab[index] = isX ? "o": "x";
    SetIsX(!isX)
    setSquares(tab)
  }
  const winner = clalculateWinner(squares)
  let status;
  if(winner){
    status = "The "+winner+" WIN"
  }else{
    status = "The "+ (isX ? "O" : "X") + " is next :"
  }
  
  return(
    <>
      <div className="status">{status}</div>
      <div>
        <div className="board-row"><Square xy={squares[0]} onClick={()=>handleClick(0)}/><Square xy={squares[1]} onClick={()=>handleClick(1)}/><Square xy={squares[2]} onClick={()=>handleClick(2)}/></div>
        <div className="board-row"><Square xy={squares[3]} onClick={()=>handleClick(3)}/><Square xy={squares[4]} onClick={()=>handleClick(4)}/><Square xy={squares[5]} onClick={()=>handleClick(5)}/></div>
        <div className="board-row"><Square xy={squares[6]} onClick={()=>handleClick(6)}/><Square xy={squares[7]} onClick={()=>handleClick(7)}/><Square xy={squares[8]} onClick={()=>handleClick(8)}/></div>
      </div>
    </>
  )
}
function Square({xy,onClick}){
  return (

      <button className="square" onClick={onClick}>
        {xy}
      </button>
  )
}
function clalculateWinner(Squares){
  let winningLines=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(let i =0; i<winningLines.length;i++){
    let [a,b,c]=winningLines[i]
    if(Squares[a] && Squares [a]===Squares[b] && Squares[a]===Squares[c] ){
      return Squares[a]
    }
  }
  return null
}
  // ========================================

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Game />)