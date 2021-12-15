import React, { Component } from "react";
import {Button, Input} from 'reactstrap';

export default class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCocktailName:'',
            newCocktailReceipe:'',
            newCocktailMethod: '',
            newCocktailGarnish: '',
            newCocktailGlass: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.placeholder === 'Name') {
            this.setState({
                newCocktailName: e.target.value
            })
        } if (e.target.placeholder === 'Method') {
            this.setState({
                newCocktailMethod: e.target.value
            })
        } if (e.target.placeholder === 'Glass') {
            this.setState({
                newCocktailGlass: e.target.value
            })
        } if (e.target.placeholder === 'Garnish') {
            this.setState({
                newCocktailGarnish: e.target.value
            })
        }


    }

    onSubmit(e) {
        e.preventDefault();
        const {newCocktailName, newCocktailMethod, newCocktailGlass, newCocktailGarnish} = this.state
        this.props.addCocktail(newCocktailName, newCocktailMethod, newCocktailGlass, newCocktailGarnish)
        this.setState({
            newCocktailName:'',
            newCocktailReceipe:'',
            newCocktailMethod: '',
            newCocktailGlass: '',
            newCocktailGarnish: ''
        })
    }

    
    render() {
        return (
            <form
            onSubmit={this.onSubmit}
            >
                <Button
                type='submit'
                >
                    Add cocktail
                </Button>
                <Input 
                    onChange={this.onChange}
                    placeholder="Name" 
                    value={this.state.newCocktailName}
                /> 
                <Input 
                    // onChange={this.onChange}
                    placeholder="Recipe" 
                    // value={this.state.newCocktailName}
                /> 
                <Input 
                    onChange={this.onChange}
                    placeholder="Method" 
                    value={this.state.newCocktailMethod}
                />
                <Input 
                    onChange={this.onChange}
                    placeholder="Glass" 
                    value={this.state.newCocktailGlass}
                />
                <Input 
                    onChange={this.onChange}
                    placeholder="Garnish" 
                    value={this.state.newCocktailGarnish}
                />
            </form>
        )
    }
}
