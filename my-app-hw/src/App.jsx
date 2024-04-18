import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
//ali
import { render } from '@testing-library/react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
//export const ThemeContext = createContext('null');

function App() {
const[counterNumber, setCounter] = useState(0);
//Ali
//const[theme, setTheme] = useState('light')
//const toggleTheme = () => {
 // setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
//};

//useEffect(() => {
//  document.addEventListener('input', onChange)
//});


function countClick(){
  setCounter(counterNumber+1);
}

function countClickDown(){
  setCounter(counterNumber-1);
}

function countClickReset(){
  setCounter(0);
}

//function addCount(){
 // setCounter(input.value);
//}

return(
 // <ThemeContext.Provider value={theme, setTheme}>
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
  {/*Alis changes */}

  <input >
  </input>

  <button >Dark/light mode</button>

{/*light/dark mode */}
  

  
  </div>

  
  //</ThemeContext.Provider>
)

}


export default App;
