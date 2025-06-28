
import React, { useContext } from 'react'
import { Data, Data1 } from '../src/App';

const ComponentA = () => {
    const userName = useContext(Data);
    const userAge = useContext(Data1);
  return (
    <div>
        <h1>my name is {userName} and i'm {userAge} years old</h1>
    </div>
  )

}
export default ComponentA;