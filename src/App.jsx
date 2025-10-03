import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if(count > 0){
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className='app'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className='card'>
          <button onClick={decrease}>Decrease</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increase}>Increase</button>
        </div>

      </div>
    </>
  )
}

export default App
