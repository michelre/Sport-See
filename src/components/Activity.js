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
   console.log(activity)
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
<BarChart
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
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  ;
</div>
    );
}

export default Activity