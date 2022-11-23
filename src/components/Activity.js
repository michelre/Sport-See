import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Activity (){
    const [activity, setActivity] = useState({})
    let {userId} = useParams()
   console.log(activity.data)
    useEffect(() => {
        const api = new Api();
        api.getActivity(userId).then((data) => {
            setActivity(data)
        })
      },
      [userId]
    )
    if (!activity.data) {
        return ''
    }
    return(
<div>   
  <h1 className='dailyActivity'>Activité quotidienne</h1>
<BarChart
title='Activité Quotidienne'
      width={500}
      height={300}
      data={activity.data.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis/>
      <Tooltip />
      <Legend verticalAlign="top" height={36}/>
      <Bar name="Poids (kg)" 
      dataKey="kilogram" fill="#282D30" />
      <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" />
    </BarChart>
  ;

</div>

    );
}

export default Activity