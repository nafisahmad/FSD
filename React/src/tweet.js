import React from 'react';
import "./App.css"

// function Tweet(props){ 1st way
function Tweet({name, message}){

    return(
        <div className="tweet">
            {/* <h3>{props.name}</h3>1st way */}
            <h3>{name}</h3>
            {/* <p>{props.message}</p>1st way */}
            <p>{message}</p>
            <h3>number of likes</h3>
        </div>
    )
}


export default Tweet;
