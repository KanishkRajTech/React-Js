// import { useState, useCallback } from 'react'
import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length ,setLength] =useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] =useState("")
// useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_+(){}[]~`"

    for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random()* str.length +1)
        pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(()=> {
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-4xl text-center text-white py-7'>Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
            value={password}
            className='outlinr-none w-full py-1 px-3' placeholder='Password'
            readOnly
            ref={passwordRef}/>
          <button
            onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 py-5">
          <div className='flex item-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={12}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              defaultValue={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev )=> !prev);
              }}
             />
             <label>Add Number</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              defaultValue={charAllowed}
              id='charInput'
              onChange={()=>{
                setCharAllowed((prev )=> !prev);
              }}
             />
             <label>Add char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
