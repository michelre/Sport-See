import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api'
import '../styles/Welcome.css'
import PropTypes from 'prop-types'


function Welcome() {
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
            <div className="welcome_container">
                <h1 className="hello">
                    Bonjour{' '}
                    <span className="hello_color">
                        {user.data.userInfos.firstName}
                    </span>
                </h1>
                <h1 className="congrats">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </h1>
            </div>
        )
    )
}
Welcome.propTypes = {
    firstName: PropTypes.string
}
export default Welcome
