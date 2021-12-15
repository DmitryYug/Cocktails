import React from "react";

const Recipe = ({ingredients, measures}) => {
    let recipe = ''
    ingredients.forEach((item, i) => {
        if(item !== null && item !== '' && measures[i] !== null) {
            recipe += `${item}: ${measures[i]}, `
        } else if (item != null && measures[i] == null) {
            recipe += `${item}, `
        } 
    })
    return(
        <p>
            {recipe}
        </p>
    )

}

export default Recipe

