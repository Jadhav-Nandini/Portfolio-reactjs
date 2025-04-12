import React, { Children, createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  darkMode:true,
  toggleDarkMode: ()=>{} //if for some reason a component ends up outside the ThemeProvider, it won’t crash the app
})


const useTheme = () => useContext(ThemeContext) // to easily access the context value


//creating the provider to wrap the app
const ThemeProvider = ({children}) =>{


  const [darkMode, setDarkMode] = useState(() => {
    const local = localStorage.getItem("darkMode");
    if (local !== null) return local === "true";

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (darkMode) {
      bodyEl.classList.add("dark");
    } else {
      bodyEl.classList.remove("dark");
    }
  }, [darkMode]);

  // 4. Pass values to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
  

}

export { ThemeProvider, useTheme}




// import React, { createContext, useContext, useEffect, useState } from "react";

// // 1. Create the context with default values (optional fallback)
// const ThemeContext = createContext({
//   darkMode: true,
//   toggleDarkMode: () => {},
// });

// // 2. Custom hook to access the context
// export const useTheme = () => useContext(ThemeContext);

// // 3. Provider component to wrap the app and manage theme logic
// export const ThemeProvider = ({ children }) => {
//   // Actual logic for dark mode management
//   const [darkMode, setDarkMode] = useState(() => {
//     const local = localStorage.getItem("darkMode");
//     if (local !== null) return local === "true";

//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     return prefersDark;
//   });

//   const toggleDarkMode = () => {
//     setDarkMode((prev) => !prev);
//   };

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode.toString());

//     const html = document.documentElement;
//     if (darkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [darkMode]);

//   // 4. Pass values to children
//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
