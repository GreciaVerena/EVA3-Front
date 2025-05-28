import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      
    
    </>
  )
}

export default App
