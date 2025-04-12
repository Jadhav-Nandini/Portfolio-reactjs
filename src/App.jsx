import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { ThemeProvider } from './context/themeContext.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

const App = () => {

  return (
    <ThemeProvider >
    <Navbar/>
    <Hero/>
    </ThemeProvider>
    
  )
}

export default App



// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import { ThemeProvider } from './context/themeContext.jsx';

// const App = () => {

//   return (
//     <ThemeProvider value={{ darkMode, toggleDarkMode }}>
//       <Navbar />
//       <Hero />
//       <About />
//     </ThemeProvider>
//   );
// };

// export default App;
