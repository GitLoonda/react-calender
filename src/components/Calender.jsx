import { useState } from 'react'

function Calender({ year, month, date }) {
  
  let curr = new Date();
  let currYear = curr.getFullYear();
  let currMonth = curr.getMonth();
  //말일 구하기
  let lastDate = new Date(year, month + 1, 0).getDate();
  //1일 요일 구하기
  let firstDate = new Date(year, month, 1).getDay();
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className="calender">
      <header>
        <h2>{year}</h2>
        <span>{month + 1}월</span>
      </header>
      <main>
        <ul className='day'>
          {
            day.map((day, i) => {
              return (
                <li key={i}>{day}</li>
              )
            })
          }
        </ul>
        <ul className='date'>
          {
            Array(firstDate).fill().map((_, i) => {
              return (
                <li key={i}></li>
              )
            })
          }
          {
            Array(lastDate).fill().map((_, i) => {
              return (
                <li 
                key={i}
                style={(year == currYear)&&(month == currMonth)&&(date == i+1) ? (
                  {backgroundColor:"red"}
                ) : ( null )}>{i + 1}</li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default Calender