import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import ProtFolio from './Component/ProtFolio'
import Experiance from './Component/Experience'
import Footer from './Component/Footer'
import Contact from './Component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <  Navbar/>
    <  Home/>
    <  About/>
    <  ProtFolio/>
    <  Experiance/>
    <  Contact/>
    <  Footer/>
    </>
  )
}

export default App
