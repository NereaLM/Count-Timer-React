import React, { useState } from 'react';
import "./styles.css";

export default function Counter() {
    const [count, setCount] = useState(0);
    // const state = useState(0);
    // console.log(state)
    //los hooks SIEMPRE arriba 

    const decrease = () => {
        setCount(count - 1)
        if (count <= 0) {
//para que no baje de 0
          setCount(0);
    
        }
    }
    const increase = () => {
        setCount(count + 1);
    }
    const reset = () => {
      setCount(0);
  }
    const increaseFive  = () => {
    setCount(count + 5);
}
const decreaseFive = () => {
  setCount(count - 5);
}

  return (
    <div className='container'>
        <h1>{count}</h1>
        <button onClick={decrease} className="countButton">-</button>
        <button onClick={increase} className="countButton">+</button>
        <button onClick={reset} className="countButton">R</button>
        <button onClick={increaseFive} className="countButton">+5</button>
        <button onClick={decreaseFive} className="countButton">-5</button>
    </div>
  );
}
