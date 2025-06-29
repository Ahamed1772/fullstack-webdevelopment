import { useState } from "react"

const ColorSwitch = () => {
    const [initial,setinitial] = useState(false);
    return <div>
        {initial ? <span>Black</span> : <span>White</span>}
        <input type="text" name="text" id="text" key={initial ? "dark": "white"} />
        <button onClick={() => setinitial((initial) => !initial)}>click</button>
    </div>
}

export default ColorSwitch;