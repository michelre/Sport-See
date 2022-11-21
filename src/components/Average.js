import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

function Average (){
    const [average, setAverage] = useState([])
    console.log(average.data)
    let {userId} = useParams()
    useEffect(() => {
        const api = new Api();
        api.getAverageSessions(userId).then((data) => {
          setAverage(data)
        })
      },
      [userId]
    )
    

    if (!average.data) {
      return ''   
  }

    return (
<div>    
  <div>{average.data.sessions[0].day}</div>
<ResponsiveContainer width="100%" height="100%">
<LineChart 
  width={730}
  height={250}
  data={average.data.sessions}
  margin=
  {{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />

  <XAxis dataKey="day" />
  <YAxis dataKey="sessionLength" />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
</LineChart>
      </ResponsiveContainer>
</div>
    );
}

export default Average

