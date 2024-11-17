import { useState } from 'react'
import HeronsFormula from './components/HeronsFormula.jsx'
import AmbiguousCase from './components/AmbiguousCase.jsx'
import NewtonsMethod from './components/NewtonsMethod.jsx'
import PolynomialFunction from './components/PolynomialFunction.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid-container">
      <HeronsFormula />
      <AmbiguousCase />
      <NewtonsMethod />
      <PolynomialFunction />
    </div>
  )
}

export default App
