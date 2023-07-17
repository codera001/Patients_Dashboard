import React from 'react'
// import Login from './Login'
// import Signup from './Signup'
// import Home from './Home'
//  import Sidebar from './Sidebar'
import  Navbar from './Navbar'
import { useState , useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Topbar from "../src/scenes/global/Topbar";
import Sidebars from "./scenes/global/Sidebars";
import Dashboard from "../src/scenes/dashboard";
import Team from "../src/scenes/team";
import Invoices from "../src/scenes/invoices";
import Contacts from "../src/scenes/contacts";
import Bar from "./scenes/bar";
import Form from "../src/scenes/form";
import Line from "../src/scenes/line";
import Pie from "../src/scenes/pie";
import FAQ from "../src/scenes/faq";
import Geography from "../src/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "../src/scenes/calendar/calendar";
import Signup from './Signup'
import Login from "./Login"
function App () {
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   () => JSON.parse(localStorage.getItem('auth')) || false
  // );

  // const setAuth = (value) => {
  //   setIsAuthenticated(value);
  //   //alert(value);
  // };

  // useEffect(()=>{
  //   localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  // }, [isAuthenticated]);

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
 
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
   
      <div className="app">
        {/* <Sidebars isSidebar={isSidebar} /> */}
        <main className="content">
          {/* <Topbar setIsSidebar={setIsSidebar} /> */}
          <Routes>  
          <Route path="/" element={<Login  />} />
      <Route path='/signup' element={<Signup/>}></Route>   
            <Route path='/home'  element={<Dashboard />}></Route> 
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  </BrowserRouter>
  )
}


export default App
