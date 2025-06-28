import { useState } from "react";

const Profile = () => {
    const [data,setData] = useState({
        name: "",
        age: ""
    })
    const change = (event) => {
        const {name,value} = event.target;
        setData((prevValue) => ({
            ...prevValue,
            [name]:value
        }));
    }
    return <div>
        <label htmlFor="name">Name: <input type="text" name="name" id="name" onChange={change} /></label>
        <label htmlFor="age">Age: <input type="text" name="age" id="age"  onChange={change}/></label>
        <ul>
            <li>{data.name}</li>
            <li>{data.age}</li>
        </ul>
    </div>
}

export default Profile;