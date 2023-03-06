import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Game(){

  return(
    <Squares className="game" style="backgroundColor: red,width: 100px;height: 100px"/> 
  )
}

function Squares(){
  const [isX,SetIsX] =useState(true)
  const [xy,setXy] = useState([,,,,,,]);
  function ruleGame(xOrY){
    let rule=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
    for(let i =0; i<rule.length;i++){
      console.log("no")
      let [a,b,c]=rule[i]
      if(xy[a] === xy[b] === xy[c]){
        document.querySelector(".winner").textContent= "the "+xOrY+" win 🎉🎉🎉"
        console.log("weee")
        return true
      }
    }
    return false
  }
  function handleClick(index){
    if(xy[index]) return
    let tab = xy.slice();
    tab[index] = isX ? "o": "x";
    SetIsX(!isX)
    setXy(tab)
    ruleGame(xy)
  }
  
  return(
    <>
      <div className="winner">the winner</div>
      <div>
        <div className="board-row"><Square xy={xy[0]} onClick={()=>handleClick(0)}/><Square xy={xy[1]} onClick={()=>handleClick(1)}/><Square xy={xy[2]} onClick={()=>handleClick(2)}/></div>
        <div className="board-row"><Square xy={xy[3]} onClick={()=>handleClick(3)}/><Square xy={xy[4]} onClick={()=>handleClick(4)}/><Square xy={xy[5]} onClick={()=>handleClick(5)}/></div>
        <div className="board-row"><Square xy={xy[6]} onClick={()=>handleClick(6)}/><Square xy={xy[7]} onClick={()=>handleClick(7)}/><Square xy={xy[8]} onClick={()=>handleClick(8)}/></div>
      </div>
    </>
  )
}
function Square({xy,onClick}){
  return (
    <>
      <div className="square" onClick={onClick}>
        {xy}
      </div>
    </>
  )
}
  // ========================================

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Game />)