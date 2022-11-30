import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts'
import Api from '../api'
import '../styles/Users.css'
import PropTypes from 'prop-types'


function User() {
    const [user, setUser] = useState({})
    let { userId } = useParams()
    useEffect(
        () => {
            const api = new Api()
            api.getUser(userId).then((data) => {
                setUser(data)
                console.log(data)
            })
        },
        [userId],
        []
    )
    return (
        user.data && (
            <div className="piechart">
                <div className="score_container">
                    <div className="goal_chart">
                        <h2 className="goal_title">Score</h2>

                        <PieChart width={250} height={250}>
                            <Pie
                                data={[user.data]}
                                startAngle={90}
                                endAngle={90 + (user.data.todayScore * 360)}
                                innerRadius="60%"
                                outerRadius="70%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="todayScore"
                            >
                                <Cell fill="red" />
                            </Pie>
                        </PieChart>

                        <div className="goal_content">
                            <p className="percentage">
                                {user.data.todayScore * 100}%
                            </p>
                            <p className="legend">de votre</p>
                            <p className="legend">objectif</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
User.propTypes = {
    todayScore: PropTypes.number
}
export default User
