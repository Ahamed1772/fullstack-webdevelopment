import React, { useId } from 'react'

const UniqueId = () => {
    const uniqueId = useId();
  return (
    <div>
        <label htmlFor={`${uniqueId}--email`}>Email</label>
        <input type="text" name="text" id={`${uniqueId}--email`} />
        <br />
        <label htmlFor={`${uniqueId}--password`}>Password</label>
        <input type="text" name="text" id={`${uniqueId}--password`} />
    </div>
  )
}

export default UniqueId