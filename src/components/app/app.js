import React, { Component } from "react";
// import AddForm from "../add-form";
import CocktailCardList from "../cocktail-card-list";
import SearchPanel from "../search-panel";
import FilterBtns from "../fiter-btns";
import cocktService from "../../servicies/service";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCockts: [],
            term: '',
            filter:'10Random'
        };
        this.onToggleKnow = this.onToggleKnow.bind(this);
        this.onToggleLearn = this.onToggleLearn.bind(this);
        this.addCocktail = this.addCocktail.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterUpdate = this.onFilterUpdate.bind(this);
        this.maxId = 5;
        this.getAllCocktailsList()
    }
    
    cocktService = new cocktService();
    
    cocktailListLoaded = (allCockts) => {
        this.setState({allCockts})
    }

    async getAllCocktailsList() {
        await this.cocktService.getAllCocktails()
            .then(this.cocktailListLoaded)
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
        this.setState(({allCockts}) =>{
            let newArr = [...allCockts, newCocktail]
            return{
                allCockts: newArr
            }
        })
    }

    onToggleLearn(id) {
        this.setState(({allCockts}) => {
            const index = allCockts.findIndex(elem => elem.id === id);
            const oldItem = allCockts[index]
            const newItem = {...oldItem, learn: !oldItem.learn, know: false }
			const newArr = [...allCockts.slice(0, index), newItem, ...allCockts.slice(index + 1)];
            console.log(newArr)
            return {
                allCocktss: newArr
            }
        })
    }

    onToggleKnow(id) {
        this.setState(({allCockts}) => {
            const index = allCockts.findIndex(elem => elem.id === id);
            const oldItem = allCockts[index]
            const newItem = {...oldItem, know: !oldItem.know, learn: false }
			const newArr = [...allCockts.slice(0, index), newItem, ...allCockts.slice(index + 1)];
            return {
                allCockts: newArr
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
        const {allCockts, term, filter} = this.state;
        const visibleCards = this.onFilter(this.onSearch(allCockts, term), filter)
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
                    {/* <AddForm
                        addCocktail={this.addCocktail}/> */}
                    <CocktailCardList 
                        cardContent={visibleCards}
                        onToggleLearn={this.onToggleLearn}
                        onToggleKnow={this.onToggleKnow}
                    />
            </div>
        );
    }
}


