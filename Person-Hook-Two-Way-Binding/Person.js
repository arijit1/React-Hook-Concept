import React from 'react';

export const Person = (props) => {
    
    return <>
        <p onClick={props.click} style={props.style}>My Name is {props.name} and my age is {props.age}</p>
    </>
}