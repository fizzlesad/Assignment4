import { useState } from 'react';

function AmbiguousCase() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [ang, setAngle] = useState(0);
    const [type, setType] = useState("");

    function heronsFormula(e) {
        e.preventDefault();
        const height = b * Math.sin(ang * (Math.PI / 180));
        if (ang <= 90) {
            if (a < height) {
                setType("no triangle");
            } else if (a == height) {
                setType("right triangle");
            } else if (a > b) {
                setType("one triangle");
            } else if (height < a && a < b) {
                setType("two triangles (ambiguous case)");
            }
        } else if (ang > 90) {
            if (a < b || a == b) {
                setType("no triangle");
            } else if (a > b) {
                setType("one triangle");
            }
        } else {
            setType("error");
        }
    }

    return (
        <form onSubmit={(e) => heronsFormula(e)}>
            <h1>Ambiguous Case</h1>
            <label>A Value:</label>
            <input type="number" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>B Value:</label>
            <input type="number" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Angle A Value:</label>
            <input type="number" value={ang} onChange={(event) => { setAngle(event.target.value) }} required />
            <label>Triangle Type (Result):</label>
            <input type="text" value={type} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default AmbiguousCase;