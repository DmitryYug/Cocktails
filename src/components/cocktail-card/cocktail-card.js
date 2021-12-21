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



