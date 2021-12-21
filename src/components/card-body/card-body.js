import React from "react";
import Recipe from "../card-recipe";

const CardBody = ({method, glass, ingredients, measures}) => {
    return ( 
        <div className="card mb-3">
            <div>
                <Recipe
                   ingredients={ingredients}
                   measures={measures}/>
              <p>{method}</p>
              <p>Serve in {glass}</p> 
            </div>
        </div>
    )
}

export default CardBody