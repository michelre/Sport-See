import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api'
import '../styles/Average.css'
import '../styles/CustomRecharts.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts'
import { CustomTooltipAverage } from './CustomRecharts'
import PropTypes from 'prop-types'

const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
}


function Average() {
    const [sessions, setSessions] = useState([])
    let { userId } = useParams()
    useEffect(() => {
        const api = new Api()
        api.getAverageSessions(userId).then((data) => {
            const sessions = data.data.sessions.map((s) => {
                return {...s, day: days[s.day]}
            })
            setSessions(sessions)
        })
    }, [userId])

    if (!sessions) {
        return ''
    }

    return (
        <div className="average_container">
            <h2>Durée moyenne des sessions</h2>
            <LineChart
                width={230}
                height={220}
                data={sessions}
                margin={{ top: 5, right: 5, left: 5, bottom: 12 }}
            >
                <XAxis
                    dataKey="day"
                    stroke="white"
                    axisLine={false}
                    tickLine={false}
                    tick={{ opacity: 0.5 }}
                />
                <YAxis hide={true} label="min" domain={[0, 'dataMax + 20']} />
                <Tooltip
                    wrapperStyle={{ left: -10 }}
                    cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 100 }}
                    content={<CustomTooltipAverage />}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    strokeWidth="4"
                    dot=""
                    stroke="white"
                    strokeOpacity="0.5"
                />
            </LineChart>
        </div>
    )
}

Average.propTypes = {
    sessions: PropTypes.array
}

export default Average
