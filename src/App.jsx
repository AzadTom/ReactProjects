import React from "react";
import Products from "./components/Products";
import { Route ,Routes } from 'react-router-dom'
import Christmas from './components/Christmas';




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route  path="/quiz" element={<Christmas/>}/>
    </Routes>
    </>
  );
}

export default App;
