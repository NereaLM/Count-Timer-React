import React, { useState } from 'react';
import "./styles.css";

export default function Timer() {
    const [clock, setClock] = useState("TIME");
    let time = new Date().toLocaleTimeString();

    const updateTime = () => {
        setClock(time);
    }

  return (
    <div className='container'>
        <h2 className='textClock'>{clock}</h2>
        <button onClick={updateTime} className="clockButton">GET TIME</button>
    </div>
  );
}
