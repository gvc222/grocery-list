import React, { useState } from 'react'


export const ListItem = ( {text} ) => {
    const [toggle, setToggle] = useState(1)

    const toggleButton = (e) => {
        (toggle === 1) ? setToggle(2) : setToggle(1)
    }
    
  return (
    <div className="list-item">
        <li>
        <input className="button" type="range" value={toggle} min="1" max="2" onClick={toggleButton}/>
        <span>{text}</span>

        </li>
    </div>
  )
}
