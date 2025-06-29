import React, { useRef } from 'react'

const FocusInput = () => {
    const reference = useRef(null);
    const focusOn = () => {
        reference.current.focus();
        reference.current.value = "ibrahim";
    }
  return (
    <div>
        <input type="text" name="text" id="text" ref={reference} />
        <button onClick={() => focusOn()}>click</button>
    </div>
  )
}

export default FocusInput