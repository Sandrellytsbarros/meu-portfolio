import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import NotFound from "./Pages/NotFound";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <ThemeContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/habilidades" element={<Skills />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </ThemeContextProvider>  
        </div>
      </HashRouter>
    </div>
  );
}

export default App;