import React, {Component} from "react";
import CardButtons from "../card-btns/card-btns";
import CardHeader from "../card-header/card-header";
import CardRecipe from "../card-recipe/card-recipe";
import './cocktail-card.css'

export default class CocktailCard extends Component {
    render () {
        const {...header} = this.probs;
        const elements = header.map((item) => {
            let classNames = "card mb-3";
            const{id, learn, ...cardContent} = item;
            if (learn) {
                classNames += ' learn';
            }
            return (
                <div key={id} className={classNames}>
                    <CardHeader {...cardContent}/>
                    <CardRecipe/>
                    <CardButtons/>
                </div>
            )
        })
        return (
            <>
                {elements}
            </>
        )
    }
}



// const CocktailCard = ({header}) => {
    
    
//     });

    
// };

// export default CocktailCard;




