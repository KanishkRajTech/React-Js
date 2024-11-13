import { useState } from 'react'
import UserContexProvider from './Contex/UserContexProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContexProvider>
      <h1>React with contex</h1>
      <Login/>
      <Profile/>
    </UserContexProvider>
      
  )
}

export default App
