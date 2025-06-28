import { useState } from "react";


const TodoList = () => {
    const [name,setname] = useState("");
    const [items,setitems] = useState([]);
    const change = (event) => {
        const value = event.target.value;
        setname(value);
    }
    const start = () => {
        setitems((prevValue) => {
            return [...prevValue,name]
        });
        setname("");
    }
    return <div>
        <input type="text" name="text" id="text" onChange={change}  value={name}/>
        <button onClick={start}>click</button>
        <ul>
            {items.map(item => <li key={Math.random()}>{item}</li>)}
        </ul>
    </div>
}

export default TodoList;

