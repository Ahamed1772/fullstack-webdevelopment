import { useEffect, useState } from "react"

const CounterEffect = () => {
    const [count,startCount] = useState(0);
    useEffect(() => {
        document.title = `Increment ${count}`
    })
    return <div>
        <h1>{count}</h1>
        <button onClick={() => startCount(count + 1)}>+</button>
    </div>
}

export default CounterEffect;