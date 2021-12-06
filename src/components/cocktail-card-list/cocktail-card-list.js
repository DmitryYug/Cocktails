import React from "react";
import CocktailCard from "../cocktail-card";

const CocktailCardList = ({header, onToggleLearn, onToggleKnow}) => {
    const elements = header.map((descrObj) => {
        const {id, learn, know, ...cardContent} = descrObj;
        return(
                <li key={id}> 
                    <CocktailCard 
                    {...cardContent}
                    learn={learn}
                    know={know}
                    onToggleKnow={() => onToggleKnow(id)}
                    onToggleLearn={() => onToggleLearn(id)}
                    />
                </li>
        );
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};

export default CocktailCardList