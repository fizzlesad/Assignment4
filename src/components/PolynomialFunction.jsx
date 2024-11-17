import { useState } from 'react';
import './PolynomialFunction.css'

function PolynomialFunction() {

    const [coefficients, setCoefficients] = useState(0);
    const [exponents, setExponents] = useState(0);
    const [xValue, setXValue] = useState(0);
    const [polynomialFunction, setPolynomialFunction] = useState("");
    const [polynomialEvaluation, setPolynomialEvaluation] = useState("");

    function polynomialFunction2(e) {
        e.preventDefault();

        const coefficientValues = coefficients.split(" ");
        const exponentValues = exponents.split(" ");

        let x = xValue;
        let coefficientCount = coefficientValues.length;
        let i = 0;
        let responseOne = "f(x)=";
        while (i <= coefficientCount) {
            if (coefficientValues[i] > 0 || coefficientValues[i] < 0) {
                responseOne += coefficientValues[i] + "x^" + exponentValues[i];
            }
            else {
                responseOne == responseOne;
            }
            if (i >= 0 && i < coefficientCount - 1 && coefficientValues[i + 1] > 0) {
                responseOne += "+";
            }
            i++;
        }
        setPolynomialFunction(responseOne);
        i = 0;
        let ans = 0;
        while (i < coefficientCount) {
            ans += coefficientValues[i] * Math.pow(x, exponentValues[i])
            i++;
        }
        let responseTwo = "f(" + x + ")=" + ans;
        setPolynomialEvaluation(responseTwo);
    }

    return (
        <form onSubmit={(e) => polynomialFunction2(e)} class="polynomial-container">
            <h1>Polynomial Function</h1>
            <label>Coefficients:</label>
            <input type="text" value={coefficients} onChange={(event) => { setCoefficients(event.target.value) }} required />
            <label>Exponents:</label>
            <input type="text" value={exponents} onChange={(event) => { setExponents(event.target.value) }} required />
            <label>x Value:</label>
            <input type="text" value={xValue} onChange={(event) => { setXValue(event.target.value) }} required />
            <label>Polynomial Function (Result):</label>
            <input type="text" value={polynomialFunction} readOnly />
            <label>Polynomial Evaluation (Result):</label>
            <input type="text" value={polynomialEvaluation} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    )
}

export default PolynomialFunction;