import { useState } from 'react';
import './HeronsFormula.css';

function HeronsFormula() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [area, setArea] = useState("");

  function heronsFormula(e) {
    e.preventDefault();
    setArea(Math.sqrt(4 * (Math.pow(a, 2)) * Math.pow(b, 2) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) -
      Math.pow(c, 2)), 2)) / 4);
  }

  return (
    <form onSubmit={(e) => heronsFormula(e)} class="herons-container">
      <h1>Herons Formula</h1>
      <label>A Value:</label>
      <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
      <label>B Value:</label>
      <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
      <label>C Value:</label>
      <input type="number" value={c} onChange={(event) => { setC(event.target.value) }} required />
      <label>Area (Result):</label>
      <input type="text" value={area} readOnly />
      <input type="submit" value="Calculate" />
    </form>
  )
}

export default HeronsFormula;