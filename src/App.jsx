import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ThemeProvider } from './context/themeContext.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'




const App = () => {



return (
  <>
  <ThemeProvider>

  <Navbar/>
  <Hero/>
  <Skills/>
  <About/>
  </ThemeProvider>

  </>

);
}

export default App



