import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'

export default function Performance (){
    const [performance, setPerformance] = useState({})
    let {userId} = useParams()
   console.log(performance)
    useEffect(() => {
        const api = new Api();
        api.getPerformance(userId).then((data) => {
          setPerformance(data)
        })
      })
    return(
<div>    
  <h1 className="listing-title"> {JSON.stringify(performance.data)}
</h1>
</div>
    );
}