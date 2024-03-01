import React from 'react'
import { Header, LineChart } from '../../components/index.jsx'
function Line() {
  return (
    <div className='m-4 md:m-10 mt-20 p-3 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full'>
        <LineChart/>
      </div>
    </div>
  )
}

export default Line