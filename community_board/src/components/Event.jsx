import React from "react";

const Event = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Location: {props.location}</p>
            <p>Website: <a href={props.website} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
        </div>
    );
}

export default Event;