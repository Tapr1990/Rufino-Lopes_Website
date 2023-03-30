import { useState } from 'react'
import './App.css'


import Home from './pages/Home'
import Services from './pages/Services'
import Portofolio from './pages/Portofolio'
import Contacts from './pages/Contacts'

function App() {
  

  return (
    <div className="App">
      <Home />
      <Services />
      <Portofolio />
      <Contacts />
    </div>
  )
}

export default App
