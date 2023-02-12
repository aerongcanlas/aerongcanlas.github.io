import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100000000)
  const [yay,setYay] = useState("")

  return (
    <div className="App">
      <div>
        <img src="/us.jpg" className="img2" alt="Us at museum" />
      </div>
      <h1>Happy 8 months, Mahal!</h1>
      <img src="/me.jpg" className="img1" alt="Me + 3 hearts" />
      <div className="card">
        <button className='love' onClick={() => setCount((count) => count +  598435)}>
          How much I love you: (click me!)<br/>{count}
        </button>
        <div className='valentine'>
          <h3>Will you be my Valentine?</h3>
          <button onClick={() => setYay("Yay I love you!")}>Yes</button>
          <button onClick={() => setYay("YAY I LOVE YOU!!!!!!")}>YES!!!</button>
          <h1>{yay}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
