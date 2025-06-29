import React from 'react'

const UserList = () => {
    const user = [
        { 
            id: 1,
            fname: "Alice",
            age: 25
        },
        {
            id: 2,
            fname: "Bob",
            age: 26
        },
        {
            id:3,
            fname: "simson",
            age: 30
        },
    ]
  return (
    <div>
        {
            user.map(({id, fname, age }) => (
                <ul key={id}>
                    <li>{fname}</li>
                    <li>{age}</li>
                </ul>
            ))
        }
    </div>
  )
}
export default UserList