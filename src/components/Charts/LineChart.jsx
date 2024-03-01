import React from 'react'
import { ChartComponent, SeriesCollectionDirective ,
SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries} from '@syncfusion/ej2-react-charts/index'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy.js'
import { useStateContext } from '../../contexts/ContextProvider.js'
function LineChart() {
  const {currentMode} = useStateContext();
  return (
   <ChartComponent
   id='line-chart'
   height='360px'
   primaryXAxis={LinePrimaryXAxis}
   primaryYAxis={LinePrimaryYAxis}
   chartArea={{border: {width:0}}}
   tooltip={{enable: true}}
   background={currentMode === 'Dark' ? "#33373E" : "#fff"}>
     <Inject services={[LineSeries, DateTime, Legend , Tooltip]}/>
     <SeriesCollectionDirective>
      {lineCustomSeries.map((item, index) => 
      <SeriesDirective key={index} {...item}/>)}
     </SeriesCollectionDirective>
   </ChartComponent>
  )
}

export default LineChart