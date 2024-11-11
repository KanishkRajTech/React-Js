import { useState } from 'react'

import './App.css'
import InputBox from './componets/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Text</h1>
      <InputBox/>
    </>
  )
}

export default App
