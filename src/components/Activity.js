import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'

function Activity (){
    const [activity, setActivity] = useState({})
    let {userId} = useParams()
   console.log(activity)
    useEffect(() => {
        const api = new Api();
        api.getActivity(userId).then((data) => {
            setActivity(data)
        })
      },
      [userId]
    )
    return(
<div>    
  <h1 className="listing-title"> {activity.sessions}
</h1>
</div>
    );
}

export default Activity