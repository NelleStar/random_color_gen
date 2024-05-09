import { useState } from "react";
import "./style.css"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  function randomNum(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for(let i=0; i<6; i++) {
      hexColor += hex[randomNum(hex.length)]
    };

    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRbgColor() {
    const r = randomNum(256);
    const g = randomNum(256);
    const b = randomNum(256);
    
    console.log(`rgb(${r},${g},${b})`)
    setColor(`rgb(${r},${g},${b})`)
  }

  return (
    <div className="container" style={{background: color}}>
      <h1>Generate Random Color</h1>
      <div className="button-color-type">
        <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>    
      </div>
      <div className="button-random">
        <button 
        onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRbgColor}>
          Generate Random Color
        </button>
      </div>     
      <h3>{color}</h3> 
    </div>
  )
}