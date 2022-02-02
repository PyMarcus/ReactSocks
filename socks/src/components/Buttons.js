import React from "react";
import './Buttons.css';



const Buttons = (props) => {
    
    return(
        <button onClick={ props.onClick }>
            {props.children}
        </button>
    )
}

export default Buttons;