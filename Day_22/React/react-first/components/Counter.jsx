import { useState } from "react";

const Counter = () => {
    const [initial,setinitial] = useState(0);
    const increment = () => {
        setinitial(initial + 1)
    }
    return <div>
        <h1>{initial}</h1>
        <button onClick={increment}>+</button>
    </div>
}

export default Counter;