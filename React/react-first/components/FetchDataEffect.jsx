import { useEffect, useState } from "react";

const FetchDataEffect = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            if (result) setData(result);
        }
        fetchData();
    },[])
    return <div>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
}

export default FetchDataEffect;