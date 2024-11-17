import { useState } from 'react';
import './NewtonsMethod.css'

function NewtonsMethod() {

    const [g, gValue] = useState(0);
    const [type, setType] = useState("");

    function newtonsMethod(e) {
        e.preventDefault();
        let root = (g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 *
            Math.pow(g, 2) - 36 * g + 7));
        while (root - g > 0.000001) {
            gValue(root);
            root = (g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 *
                Math.pow(g, 2) - 36 * g + 7));
        }
        setType(root);
    }

    return (
        <form onSubmit={(e) => newtonsMethod(e)} class="newtons-container">
            <h1>Newtons Method</h1>
            <label>Root Guess:</label>
            <input type="number" value={g} onChange={(event) => { gValue(event.target.value) }} required />
            <label>Root Approximation (Result):</label>
            <input type="text" value={type} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default NewtonsMethod;