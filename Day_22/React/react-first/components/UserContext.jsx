import React, { createContext } from 'react'
export const UserProvider = createContext(); 
import UserProfile from './UserProfile';
const UserContext = () => {
    const name = "ahamed ibrahimkhan";
  return (
    <div>
        <UserProvider.Provider value={name}>
            <UserProfile  />
        </UserProvider.Provider>
    </div>
  )
}

export default UserContext