import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [conunter, setCounter] = useState(true)

  // let conunter =15;

  const addvalue = ()=>{
    console.log("value added", conunter);
    if(conunter < 20){
      conunter =conunter +1;
      setCounter(conunter)
    }
    else{
      alert("Count values not be assixed on 20")
    }
    
  };

  const revValue = ()=>{
    if(conunter > 0 ){
      conunter =conunter -1;
      setCounter(conunter)
    }
    else{
      alert("Count values not be go bellow 0")
    }
    
  }

  return (
    <>
      <h1>Start React</h1>
      <h2>Couner value: {conunter}</h2>

      <button onClick={addvalue}>  
        Add value
      </button>
      <br /> <br />
      <button onClick={revValue}>Remove value</button>
    </>
  )
}

export default App
