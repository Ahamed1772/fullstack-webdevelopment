import { useState } from "react";
import CopiedText from "./CopiedText";
import { createPortal } from "react-dom";

const CopyText = () => {
    const [initial,setinitial] = useState("");
    const [copied,setcopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(initial).then(() => {
            setcopied(true);
            setTimeout(() => setcopied(false),2000);
        })
    }
    return createPortal (
     <div>
        <label htmlFor="text">Text: <input type="text" name="text" id="text" value={initial} onChange={event => setinitial(event.target.value)} /></label>
        <button onClick={handleCopy}>Copy</button>
        <CopiedText copied={copied} />
    </div>,document.querySelector('#popup') )
}

export default CopyText;