import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Calender from './components/Calender'

function App() {

  let d = new Date();
  const [year, setYear] = useState(d.getFullYear());
  const [month, setMonth] = useState(d.getMonth());
  const [date, setDate] = useState(d.getDate());

  const prevYear = () => {
    setYear(year - 1);
    setMonth(month + 11);
  }

  const nextYear = () => {
    setYear(year + 1);
    setMonth(month - 11);
  }

  const prevMonth = () => {
    month == 0 ? (
      prevYear()
    ) : (
      setMonth(month - 1)
    )
  }

  const nextMonth = () => {
    month == 11 ? (
      nextYear()
    ) : (
      setMonth(month + 1)
    )
  }

  return (
    <>
      <div className="container">
        <Header />
        <Calender year={year} month={month} date={date} />
      </div>
      <div className="control">
        <button onClick={prevMonth}>prev</button>
        <button onClick={nextMonth}>next</button>
      </div>
    </>
  )
}

export default App
