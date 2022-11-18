import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { PieChart,RadialBarChart, RadialBar, Legend,PolarAngleAxis, ResponsiveContainer, Pie, Cell } from 'recharts';
import Api from '../api/api'

function User (){
    const [user, setUser] = useState({})
    let {userId} = useParams()
    console.log(user)
    useEffect(() => {
        const api = new Api();
        api.getUser(userId).then((data) => {
          setUser(data)
          
        })
      },
      [userId],[]
    )
    return user.data &&( 
<div>    
<h1> Bonjour {user.data.userInfos.firstName}</h1>
<ResponsiveContainer width="100%" height="100%">
<RadialBarChart width={200} height={200} data={user.data}>
    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
   
    <RadialBar background dataKey="todayScore" angleAxisId={0} data={[user.data[0]]} />

</RadialBarChart>
      </ResponsiveContainer>
                <div className="goal_content">
                    <p className="percentage">{user.data.todayScore * 100}%</p>
                    <p className="legend">de votre</p>
                    <p className="legend">objectif</p>
                </div>
</div>
    );
}

export default User