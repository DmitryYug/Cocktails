import React, {Component} from "react";
import './cocktail-card.css';



export default class CocktailCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         learn: false, 
    //         know: false
    //     };
    //     this.onLearn = this.onLearn.bind(this)
    //     this.onKnow = this.onKnow.bind(this)
    // }


    render () {
        const {method, glass, garnish, name, learn, know, onToggleLearn, onToggleKnow} = this.props;
        let classNames = "card mb-3";
        if (learn) {
            classNames += ' learn'
        }
        if (know) {
            classNames += ' know'
        }
        return (
            <div className={classNames}>
                <div className="card-header">
                   classic/added
                   <h4 className="card-title">
                       {name}
                   </h4>
                </div>
                <div>
                   Here will be recipe
                   <p>{method} / {glass} / {garnish}</p>
                </div>
                <button 
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
                </button>
            </div>
        );
    }
}



