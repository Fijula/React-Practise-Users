import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'
function Chart(props) {
  const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value) //map it to object and returns only the array of values to dataPointValues
  const totalMaximum=Math.max(...dataPointValues)//max should have list of numbers as arguments .. so spread operator changes the dataPointsvalue array to individual Pointa
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint)=>{ return(
 <ChartBar
 key={dataPoint.label}
 value={dataPoint.value}
 label={dataPoint.label}
 maxValue={totalMaximum}/>

     ) })}
     
    </div>
  )
}

export default Chart