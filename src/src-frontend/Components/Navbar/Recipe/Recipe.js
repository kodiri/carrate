import React from 'react';

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{calories}</p>
            <img src={image}/>
        </div>
    );
}

export default Recipe;