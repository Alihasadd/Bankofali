import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const[counterNumber, setCounter] = useState(0)

function countClick(){
  setCounter(counterNumber+1);
  console.log('hi');
}


function countClickDown(){
  setCounter(counterNumber-1);
}

function countClickReset(){
  setCounter(0);
}


return(
  <div>
    <span>{counterNumber}</span>

    <br></br>

  <button onClick={countClick}>
    Add +1
  </button>
  
  <button onClick={countClickDown}>
    Sub -1
  </button>

  <button onClick={countClickReset}>
    Reset
  </button>
  </div>

)

}

export default App;
