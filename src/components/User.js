import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Api from '../api/api'

function User (){
    const [user, setUser] = useState({})
    let {userId} = useParams()
   console.log(user.data)
    useEffect(() => {
        const api = new Api();
        api.getUser(userId).then((data) => {
          setUser(data)
        })
      },
      [userId]
    )
    return user.data && (
<div>
  <h1 className="listing-title"> {user.data.id}

</h1>
</div>
    );
}

export default User
