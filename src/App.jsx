import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Calender from './components/Calender'

function App() {

  return (
    <>
      <div className="calender">
        <Header />
        <Calender />
      </div>
    </>
  )
}

export default App
