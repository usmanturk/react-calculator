import { useState } from "react";
import "./comp.css"
// import { calckey } from "./btn";

export const Keypad = () => {
  const [str, setstr]= useState("")
  const [prev, setprev]= useState("")
  const keypress = (e)=> {
    setstr(str.concat(e.target.innerText))
  }
const clear = () => {
  setstr("")
  setprev("")
}
  const answer =()=>{
  setprev(str)
try{
  setstr(eval(str).toString())
}catch{
  setstr(error)
}
  }

    return(
      
        <div className="calculator">
        <h1>calculator</h1>
      <div className="screen">
          <input id="recent-scrn" type="text" value={prev}/>
      <input id="main-scrn" type="text" value={str} />
      </div> 
         <div className="btns">
          <div>
            <button className="key" onClick={keypress}>7 </button >
            <button className="key" onClick={keypress}>8</button>
            <button className="key" onClick={keypress}>9</button>
            <button
              className="key" onClick={keypress}
              // style="background-color: rgb(43, 40, 40); color: gray" 
            >
              /
            </button>
          </div>
           <div>
            <button className="key" onClick={keypress}>4</button>
            <button className="key" onClick={keypress}>5</button>
            <button className="key" onClick={keypress}>6</button>
            <button
              className="key" onClick={keypress}
              // style="background-color: rgb(43, 40, 40); color: gray"
            >
              *
            </button>
          </div>
          <div>
            <button className="key" onClick={keypress}>1</button>
            <button className="key" onClick={keypress}>2</button>
            <button className="key" onClick={keypress}>3</button>
            <button
              className="key" onClick={keypress}
              // style="background-color: rgb(43, 40, 40); color: gray"
            >
              +
            </button>
          </div>
          <div>
            <button className="key" onClick={keypress}>.</button>
            <button className="key" onClick={keypress}>0</button>
            <button className="key" id="equal" onClick={answer} >=</button>
            <button
              className="key" onClick={keypress}
              // style="background-color: rgb(43, 40, 40); color: gray"
            >
              -
            </button>
          </div>
          <button className="key" id="clear" onClick={clear}>clear</button> 
        </div>
      </div> 
    
  
    )
}