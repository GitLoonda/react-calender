import React from 'react'

function Calender() {
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();

  console.log(year, month, day);

  //말일 구하기
  let lastDate = new Date(year, month + 1, 0).getDate();
  //1일 요일 구하기
  let firstDate = new Date(year, month, 1).getDay();
  console.log(lastDate, firstDate); 


  return (
    <div className="calender">
      <header>
        <h2>{year}</h2>
        <span>{month + 1}월</span>
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default Calender