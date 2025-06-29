import { useEffect } from "react"

const BasicEffect = () => {
    useEffect(() => {
        console.log("call the effect");
    },[])
    return <div>
        <h1>hello world</h1>
    </div>
}

export default BasicEffect;