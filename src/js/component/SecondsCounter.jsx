import React from "react";

export const SecondsCounter = ({props}) => {    
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    let sixth = 0;
        first = Math.floor((props.seconds / 1) % 10)
        second = Math.floor((props.seconds / 10) % 10);
        third = Math.floor((props.seconds / 100) % 10);   
        fourth = Math.floor((props.seconds / 1000) % 10);  
        fifth = Math.floor((props.seconds / 10000) % 10);   
        sixth = Math.floor((props.seconds / 100000) % 10);
    return (
        <div>
            <div className="counter">
                <span className="cajita rounded p-3 me-3"><i className="fa-regular fa-clock"></i></span>                
                <span className="cajita rounded p-3 me-3">{sixth}</span>
                <span className="cajita rounded p-3 me-3">{fifth}</span>
                <span className="cajita rounded p-3 me-3">{fourth}</span>
                <span className="cajita rounded p-3 me-3">{third}</span>
                <span className="cajita rounded p-3 me-3">{second}</span>
                <span className="cajita rounded p-3 me-3">{first}</span>
            </div>
        </div>
    )
}

export default SecondsCounter;