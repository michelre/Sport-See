import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
import '../styles/Activity.css'
import { CustomLegendText, CustomTooltip } from './CustomRecharts'
import PropTypes from 'prop-types'


function Activity() {
    const [activity, setActivity] = useState({})
    let { userId } = useParams()
    console.log(activity.data)
    useEffect(() => {
        const api = new Api()
        api.getActivity(userId).then((data) => {
            setActivity(data)
        })
    }, [userId])
    if (!activity.data) {
        return ''
    }
    return (
        <div>
            <div className="activity_chart">
                <h2>Acitvité quotidienne</h2>

                <BarChart
                    width={810}
                    height={300}
                    data={activity.data.sessions}
                    barGap={5}
                    barCategoryGap={25}
                    strokeDasharray="1 4"
                >
                    <CartesianGrid vertical={false} />
                    <YAxis
                        type="number"
                        tickCount={3}
                        tickLine={false}
                        dataKey="calories"
                        axisLine={false}
                        orientation="right"
                        tick={{ fontSize: 12 }}
                        stroke="#74798C"
                    />
                    <XAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fontSize: 12 }}
                        stroke="#74798C"
                    />
                    <Tooltip
                        wrapperStyle={{ top: -50, left: 10 }}
                        content={<CustomTooltip />}
                    />
                    <Legend
                        wrapperStyle={{ paddingTop: '15px' }}
                        formatter={CustomLegendText}
                        height={50}
                        iconSize={8}
                        iconType="circle"
                        align="right"
                        verticalAlign="top"
                    />
                    <Bar
                        name="Poids (kg)"
                        radius={[10, 10, 0, 0]}
                        stroke-linejoin={10}
                        barSize={10}
                        dataKey="kilogram"
                        fill="#282D30"
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        radius={[10, 10, 0, 0]}
                        barSize={10}
                        dataKey="calories"
                        fill="#E60000"
                    />
                </BarChart>
            </div>
        </div>
    )

}

Activity.propTypes = {
    sessions: PropTypes.array
}

export default Activity
