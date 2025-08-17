import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import ProtFolio from './Component/ProtFolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <  Navbar/>
    <  Home/>
    <  About/>
    <  ProtFolio/>
    </>
  )
}

export default App
