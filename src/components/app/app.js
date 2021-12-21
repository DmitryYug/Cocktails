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
            filter:'random'
        };
        // this.addCocktail = this.addCocktail.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterUpdate = this.onFilterUpdate.bind(this);
        // this.onFilter = this.onFilter.bind(this)
        // this.getCocktailsByLetter = this.onFilter.bind(this)
        // this.maxId = 5;
        this.btnFilter(this.state.filter)
        this.btnFilter = this.btnFilter.bind(this)
    }
    
    cocktService = new cocktService();
    
    cocktailListLoaded = (allCockts) => {
        this.setState({allCockts})
    }

    async setCocktailsByLetter(filter) {
        await this.cocktService.getCocktailsByLetter(filter)
            .then(this.cocktailListLoaded)
            // .catch(console.log('null'))
    }
    
    async setRandomCocktail() {
        await this.cocktService.getRandomCocktail()
            .then(this.cocktailListLoaded)
    }

    btnFilter(filter) {
        if (filter === 'random') {
            this.setRandomCocktail()
        } else {
            this.setCocktailsByLetter(filter)
        }
    }


    async setSearch(term) {
        await this.cocktService.getSearchByName(term)
            .then(this.cocktailListLoaded)
    }

    

    //working
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

    // addCocktail(name, method, glass, garnish) {
    //     let newCocktail = {
    //         name: name,
    //         method: method,
    //         glass: glass,
    //         garnish: garnish,
    //         id: this.maxId++
    //     }
    //     this.setState(({allCockts}) =>{
    //         let newArr = [...allCockts, newCocktail]
    //         return{
    //             allCockts: newArr
    //         }
    //     })
    // }


    onFilterUpdate(filter) {
        this.setState({filter})
        this.btnFilter(filter)
    }

    render () {
        const {allCockts, term, filter} = this.state;

        // const visibleCards = this.onFilter(this.onSearch(allCockts, term), filter)
        const visibleCards = this.onSearch(allCockts, term)
        // console.log(visibleCards)
        // console.log(allCockts)
        // console.log(filter)
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
                    />
            </div>
        );
    }
}


