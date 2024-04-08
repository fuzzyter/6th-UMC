import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const increase = () => {
    setCount(count + 1);
    console.log("increase 가 클릭됨");
  }

  const decrease = () => {
    setCount(count - 1);
    console.log("decrease 가 클릭됨");
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    </>
  )
}

export default App
