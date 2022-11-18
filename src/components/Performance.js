import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import Api from '../api/api'

function Performance (){
    const [performance, setPerformance] = useState([])
    let {userId} = useParams()
    console.log(performance)

    useEffect(() => {
        const api = new Api()
        api.getPerformance(userId).then((data) => {
          setPerformance(data)
          
        })
      },
      [userId]
    )
    
    return performance.data && (
<div>    
<RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={performance.data.data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>

</div>
    );
}

export default Performance