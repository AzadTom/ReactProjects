import React from "react";
import Products from "./components/Products";
import { Route ,Routes } from 'react-router-dom'




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Products/>} />
    </Routes>
    </>
  );
}

export default App;
