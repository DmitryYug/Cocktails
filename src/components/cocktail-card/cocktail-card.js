import React, {Component} from "react";
import './cocktail-card.css';
import { Button, Collapse, Card, CardBody } from "reactstrap";
import Recipe from "../card-recipe";



export default class CocktailCard extends Component {

    render () {
        const {method, glass, name, learn, know, onToggleLearn, onToggleKnow} = this.props;
        
        const {ingredients, measures} = this.props
        let classNames = "card mb-3";
        // if (learn) {
        //     classNames += ' learn'
        // }
        // if (know) {
        //     classNames += ' know'
        // }
        return (
            <div className={classNames}>
                {/* <div className="card-header"> */}
                   {/* classic/added */}
                   <h4 className="card-title">
                       {name}
                   </h4>
                {/* </div> */}
                <div>
                    <Recipe
                        ingredients={ingredients}
                        measures={measures}/>
                   {/* <p>Here will be Recipe</p> */}
                   <p>{method}</p>
                   <p>{glass}</p> 
                   {/* / {garnish} */}
                </div>
                {/* <button 
                    onClick={onToggleKnow}
                    type="button" 
                    className="btn btn-success">
                   \/
                </button>
                <button 
                    onClick={onToggleLearn}
                    type="button" 
                    className="btn btn-danger">
                   ?
                </button> */}
            </div>
        );

        //Collapse

        // return (
        //     <>
        //         <p>
        //             <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        //                 Button with data-bs-target
        //             </button>
        //         </p>
        //         <div class="collapse" id="collapseExample">
        //             <div class="card card-body">
        //                 Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        //             </div>
        //         </div>
        //     </>
        // )
    }
}



