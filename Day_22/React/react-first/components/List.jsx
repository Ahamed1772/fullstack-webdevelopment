import React from 'react'

const List = () => {
    const people = ["ahamed","ibrahim","mari","anand"];
  return (
    <div>
        {
            people.map(person => (
                <ul key={person}>
                    <li>{person}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default List