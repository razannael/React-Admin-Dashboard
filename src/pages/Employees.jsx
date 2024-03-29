import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Page,Search, Inject , Toolbar} from '@syncfusion/ej2-react-grids/index'
import {employeesData, employeesGrid} from '../data/dummy.js'
import Header from '../components/Header.jsx'
const Employees = ()=> {
  return (
    <div className='m-2 mt-16 md:m-1  p-2 md:p-3 bg-white rounded-3xl'>
      <Header category ="Page" title ="Employees"/>
      <GridComponent 
       dataSource={employeesData}
      allowPaging allowSorting
      toolbar={['Search']} width='auto'>
        <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[ Page,Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees