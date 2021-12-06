import React, { Component } from "react";
import AddForm from "../add-form";
// import CocktailCard from "../cocktail-card";
import CocktailCardList from "../cocktail-card-list";
import SearchPanel from "../search-panel";
import FilterBtns from "../fiter-btns";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: [
                {learn: false, know: false, method: 'Stir', glass: 'old fashioned glass', garnish: 'Orange peel+cherry',name: 'old fashioned', id: 1},
                {learn: false, know: false, method: 'Shake', glass: 'Cocktail glass', garnish: 'Lime aromatic', name: 'Daiquiry', id: 2 },
                {learn: false, know: false, method: 'Stir', glass: 'old fashioned glass', garnish: 'Orange slice', name: 'Negroni', id: 3},
                {learn: false, know: false, method: 'Shake', glass: 'Cocktail glass', garnish: '-', name: 'Last word', id: 4}
            ],
            term: '',
            filter:'all'
        };
        this.onToggleKnow = this.onToggleKnow.bind(this);
        this.onToggleLearn = this.onToggleLearn.bind(this);
        this.addCocktail = this.addCocktail.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterUpdate = this.onFilterUpdate.bind(this);
        this.maxId = 5;

    }

    onSearch(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((element) => {
            return element.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    addCocktail(name, method, glass, garnish) {
        let newCocktail = {
            name: name,
            method: method,
            glass: glass,
            garnish: garnish,
            id: this.maxId++
        }

        this.setState(({description}) =>{
            let newArr = [...description, newCocktail]
            return{
                description: newArr
            }
        })
    }

    onToggleLearn(id) {
        this.setState(({description}) => {
            const index = description.findIndex(elem => elem.id === id);
            const oldItem = description[index]
            const newItem = {...oldItem, learn: !oldItem.learn, know: false }
			const newArr = [...description.slice(0, index), newItem, ...description.slice(index + 1)];
            console.log(newArr)
            return {
                description: newArr
            }
        })
    }

    onToggleKnow(id) {
        this.setState(({description}) => {
            const index = description.findIndex(elem => elem.id === id);
            const oldItem = description[index]
            const newItem = {...oldItem, know: !oldItem.know, learn: false }
			const newArr = [...description.slice(0, index), newItem, ...description.slice(index + 1)];
            console.log(newArr)
            return {
                description: newArr
            }
        })
    }
    

    onFilter(items, filter) {
        if(filter === 'know') {
            return items.filter(elem => elem.know)
        } if (filter === 'learn') {
            return items.filter(elem => elem.learn)
        } 
        else {
            return items
        }
    }
    onFilterUpdate(filter) {
        this.setState({filter})
    }


    render () {
        const {description, term, filter} = this.state;
        const visibleCards = this.onFilter(this.onSearch(description, term), filter)
        return (
            <div className="app">
                <div className="search-panel">
                    <FilterBtns
                        filter={filter}
                        onFilterUpdate={this.onFilterUpdate}/>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                </div>
                    <AddForm
                        addCocktail={this.addCocktail}/>
                    <CocktailCardList 
                        header={visibleCards}
                        onToggleLearn={this.onToggleLearn}
                        onToggleKnow={this.onToggleKnow}
                    />
            </div>
        );
    }
}


