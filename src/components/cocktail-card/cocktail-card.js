import React, {Component} from "react";
import './cocktail-card.css';
// import { Button, Collapse, Card, CardBody } from "reactstrap";
import Recipe from "../card-recipe";
import CardBody from "../card-body";



export default class CocktailCard extends Component {
    constructor() {
        super() 
        this.state = {
            toggle: false
        }
        this.onToggle = this.onToggle.bind(this)
    }

    
    onToggle() {
        const current = this.state.toggle
        this.setState (
            {toggle: !current}
        )
    }
    

    render () {
        const {method, glass, name} = this.props
        
        const {ingredients, measures} = this.props

        

            //working code
        // return (
        //     <div className="card mb-3">
        //         <h4 className="card-title">
        //             {name}
        //         </h4>
        //         <div>
        //             <Recipe
        //                 ingredients={ingredients}
        //                 measures={measures}/>
        //            <p>{method}</p>
        //            <p>Serve in {glass}</p> 
        //         </div>
        //     </div>
        // );
    
        const card = this.state.toggle ? <CardBody method={method} glass={glass} ingredients={ingredients} measures={measures}  /> : null

        return(
            <>
                <button
                type="button" 
                class="btn btn-primary"
                onClick={this.onToggle}>
                    {name}
                </button>
               <p> {card}</p>
            </>
        )
    }
}



