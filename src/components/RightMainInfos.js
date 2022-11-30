import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Api from '../api'
import caloriesIcon from '../assets/caloriesIcon.png'
import fatIcon from '../assets/fatIcon.png'
import carbsIcon from '../assets/carbsIcon.png'
import proteinIcon from '../assets/proteinIcon.png'
import '../styles/RightMainInfos.css'

function RightMainInfos() {
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
            <div className="rightLateralInfos">
                <div className="card_keyinfo">
                    <img
                        className="icon"
                        src={caloriesIcon}
                        alt="caloriesIcon"
                    ></img>

                    <div className="keyinfo_content">
                        <p>{user.data.keyData.calorieCount} kCal</p>
                        <span>Calories</span>
                    </div>
                </div>

                <div className="card_keyinfo">
                    <img
                        className="icon"
                        src={proteinIcon}
                        alt="proteinIcon"
                    ></img>

                    <div className="keyinfo_content">
                        <p>{user.data.keyData.proteinCount} g </p>
                        <span>Proteines</span>
                    </div>
                </div>

                <div className="card_keyinfo">
                    <img className="icon" src={carbsIcon} alt="carbsIcon"></img>

                    <div className="keyinfo_content">
                        <p>{user.data.keyData.carbohydrateCount} g</p>
                        <span>Glucides</span>
                    </div>
                </div>

                <div className="card_keyinfo">
                    <img className="icon" src={fatIcon} alt="fatIcon"></img>

                    <div className="keyinfo_content">
                        <p>{user.data.keyData.lipidCount} g </p>
                        <span>Lipides</span>
                    </div>
                </div>
            </div>
        )
    )
}
RightMainInfos.propTypes = {
    keyData: PropTypes.object
}
export default RightMainInfos
