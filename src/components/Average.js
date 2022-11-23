import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import Api from '../api/api'
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';

function Average() {
    const [sessions, setSessions] = useState([])
    let {userId} = useParams()
    useEffect(() => {
            const api = new Api();
            api.getAverageSessions(userId).then((data) => {
                setSessions(data.data.sessions)
            })
        },
        [userId]
    )


    if (!sessions) {
        return ''
    }

    return (
        <div>
            <LineChart
                width={730}
                height={250}
                data={sessions}
                margin=
                    {{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>

                <XAxis dataKey="day"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8"/>
            </LineChart>
        </div>
    );
}

export default Average

