import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'

function Average (){
    const [average, setAverage] = useState({})
    let {userId} = useParams()
   console.log(average)
    useEffect(() => {
        const api = new Api();
        api.getAverageSessions(userId).then((data) => {
          setAverage(data)
        })
      },
      [userId]
    )
    return(
<div>    
  <h1 className="listing-titgle"> {JSON.stringify(average.sessions)}
</h1>
</div>
    );
}

export default Average