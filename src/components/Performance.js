import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'

function Performance (){
    const [performance, setPerformance] = useState({})
    let {userId} = useParams()
   console.log(performance.data)
    useEffect(() => {
        const api = new Api()
        api.getPerformance(userId).then((data) => {
          setPerformance(data)
        })
      },
      [userId]
    )
    return(
<div>    
  <h1 className="listing-title"> {performance.data}
</h1>
</div>
    );
}

export default Performance