import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ThemeProvider } from './context/themeContext.jsx'

const App = () => {

  return (
    <ThemeProvider >
    <Navbar/>
    <Hero/>
    </ThemeProvider>
    
  )
}

export default App



