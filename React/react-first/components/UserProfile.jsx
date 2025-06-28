import React, { useContext } from 'react'
import { UserProvider } from './UserContext'

const UserProfile = () => {
    const data = useContext(UserProvider);
  return (
    <div>
        <h1>My name is {data}</h1>
    </div>
  )
}

export default UserProfile