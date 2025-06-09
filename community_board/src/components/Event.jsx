import React from "react";

const Event = (props) => {
    return (
        <div>
            <img src= {props.pic} alt={props.name} />
            <h2>{props.name}</h2>
            <p><b>Location:</b> {props.location}</p>
            <p><b> <a href={props.website} target="_blank" rel="noopener noreferrer">Visit Website</a></b></p>
        </div>
    );
}

export default Event;