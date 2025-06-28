import React, { useContext } from 'react'
import { UserProvider } from './UserContext';


const UpdateUser = () => {
    let data = useContext(UserProvider);
    data = "Changed buddy";
  return (
    <div>
        <h1>My name is {data}</h1>
    </div>
  )
}

export default UpdateUser