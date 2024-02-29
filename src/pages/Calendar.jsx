import React from 'react'
import { ScheduleComponent, ViewDirective, ViewsDirective
, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule/index'
import { scheduleData } from '../data/dummy.js'
import Header from '../components/Header.jsx'
function Calendar() {
  return (
    <div className='m-2 md:m-2 mt-12 p-2 md:p-3 bg-white rounded-3xl'>
        <Header category= "App" title="Calendar" />
        <ScheduleComponent height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>
    </div>
  )
}

export default Calendar