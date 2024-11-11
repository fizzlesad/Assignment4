import { useState } from 'react'
import HeronsFormula from './components/HeronsFormula.jsx'
import AmbiguousCase from './components/AmbiguousCase.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeronsFormula />
    <AmbiguousCase />
    {/*<NewtonsMethod />
    <PolynomialFunction /> */}
    </>
  )
}

export default App
