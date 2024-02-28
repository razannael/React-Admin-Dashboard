import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban/index'
import React from 'react'
import { kanbanData, kanbanGrid } from '../data/dummy.js'
import Header from '../components/Header.jsx'
function Kanban() {
  return (
    <div className='m-2 md:m-2 mt-12 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category= "App" title="Kanban" />
    <KanbanComponent id='kanban' dataSource={kanbanData}
    cardSettings={{contentField: 'Summery', headerField: 'Id'}}
    keyField='Status'>
      <ColumnsDirective>
      {kanbanGrid.map((item, index) =>
      <ColumnDirective key={index} {...item}/>)}
      </ColumnsDirective>
    </KanbanComponent>
</div>
  )
}

export default Kanban