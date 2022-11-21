import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { PieChart,RadialBarChart, RadialBar, Legend,PolarAngleAxis, ResponsiveContainer, Pie, Cell } from 'recharts';
import Api from '../api/api'
import caloriesIcon from '../assets/caloriesIcon.png'
import fatIcon from '../assets/fatIcon.png'
import carbsIcon from '../assets/carbsIcon.png'
import proteinIcon from '../assets/proteinIcon.png'
import '../styles/Users.css'


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
<h1> Bonjour {user.data.userInfos.firstName}<br/>
Félicitation ! Vous avez explosé vos objectifs hier 👏</h1>
<RadialBarChart width={200} height={200} data={user.data.todayScore}>
    <PolarAngleAxis type="number" domain={[0, 100]} dataKey={user.data.todayScore * 100} angleAxisId={0} tick={false} />
    <RadialBar background dataKey="todayScore" angleAxisId={0} data={user.data.todayScore} />
</RadialBarChart>
                <div className="goal_content">
                    <p className="percentage">{user.data.todayScore * 100}%</p>
                    <p className="legend">de votre</p>
                    <p className="legend">objectif</p>
                </div>

<div className='rightSideInfos'>
    <div className='rightSideInfos_container'>
        <img src={caloriesIcon} alt="caloriesIcon"></img>
        <p>{user.data.keyData.calorieCount}kCal</p> 
    </div>
   <p>calories</p>
    </div>

<div className='rightSideInfos'>
    <div className='rightSideInfos_container'>
        <img src={proteinIcon} alt="proteinIcon"></img>
        <p>{user.data.keyData.proteinCount}g </p> 
    </div>
   <p> proteines</p>
</div>

<div className='rightSideInfos'>
    <div className='rightSideInfos_container'>
        <img src={carbsIcon} alt="carbsIcon"></img>
        <p>{user.data.keyData.carbohydrateCount}g</p> 
    </div>
   <p> carbo</p>
</div>

<div className='rightSideInfos'>
    <div className='rightSideInfos_container'>
        <img src={fatIcon} alt="fatIcon"></img>
        <p>{user.data.keyData.lipidCount}g </p> 
    </div>
   <p>lipides</p>
</div>
</div>

    );
}

export default User