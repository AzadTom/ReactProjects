import React from 'react'
import FolderSt from './components/Folder/FolderSt';
import SideBar from './components/Folder/SideBar';
import Multiline from './components/Multiline/Multiline';
import { Routes,Route } from 'react-router-dom';

function App() {

 
  return (
    <>

    <Routes>
      <Route path='/' element={<Multiline/>}/>
      <Route path="/sidebar" element={<SideBar/>}/>
    </Routes>
    </>
  )
}

export default App