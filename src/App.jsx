import React from "react";
import Products from "./components/Products";
import { Route ,Routes } from 'react-router-dom'
import Login from "./components/Login";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
