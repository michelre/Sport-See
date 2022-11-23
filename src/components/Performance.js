import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

import Api from '../api/api'

function Performance() {
    const [performances, setPerformances] = useState([])
    let {userId} = useParams()

    useEffect(() => {
            const api = new Api()
            api.getPerformance(userId).then((data) => {
                const perf = data.data.data.map(d => {
                    let kind = data.data.kind[d.kind]
                    kind = kind.charAt(0).toUpperCase() + kind.slice(1);
                    return {...d, kind}
                })
                setPerformances(perf)

            })
        },
        [userId]
    )

    return performances && (
        <div>
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={performances}
            >
                <PolarGrid/>
                <PolarAngleAxis dataKey="kind"/>
                <PolarRadiusAxis/>
                <Radar
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
