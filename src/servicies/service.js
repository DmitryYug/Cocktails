import { Component } from "react";

export default class cocktService extends Component {

    constructor() {
        super()
        this._apiBase = 'https://www.thecocktaildb.com/api/'
    }


    async getResource (url) {
        const res = await fetch (`${this._apiBase}${url}`)
        if(!res.ok) {
            throw new Error(`не загружается: ${res} потому что: ${res.status}`)
        }
        return await res.json();
    }


    async getCocktailsByLetter(filter) {
        const res = await this.getResource(`json/v2/9973533/search.php?f=${filter}`)
        const {drinks} = res
        // const errorMessage = [{name: 'ooops, no cocktail on this letter'}]
        return drinks.map(this._transformCocktailData)
    }

    async getSearchByName(name) {
        const res = await this.getResource(`json/v2/9973533/search.php?s=${name}`)
        const {drinks} = res
        return drinks.map(this._transformCocktailData)
    }
    
    async getRandomCocktail() {
        const res = await this.getResource(`json/v2/9973533/random.php`)
        const {drinks} = res
        // console.log(res);
        return drinks.map(this._transformCocktailData)
    }

    _transformCocktailData (cockt) {
        return {
            method: cockt.strInstructions,
            glass: cockt.strGlass,
            name: cockt.strDrink,
            id: cockt.idDrink,
            ingredients: [
                cockt.strIngredient1,
                cockt.strIngredient2,
                cockt.strIngredient3,
                cockt.strIngredient4,
                cockt.strIngredient5,
                cockt.strIngredient6,
                cockt.strIngredient7,
                cockt.strIngredient8,
                cockt.strIngredient9,
                cockt.strIngredient10,
                cockt.strIngredient11,
                cockt.strIngredient12,
                cockt.strIngredient13,
                cockt.strIngredient14,
                cockt.strIngredient15,
            ],
            measures: [
                cockt.strMeasure1,
                cockt.strMeasure2,
                cockt.strMeasure3,
                cockt.strMeasure4,
                cockt.strMeasure5,
                cockt.strMeasure6,
                cockt.strMeasure7,
                cockt.strMeasure8,
                cockt.strMeasure9,
                cockt.strMeasure10,
                cockt.strMeasure11,
                cockt.strMeasure12,
                cockt.strMeasure13,
                cockt.strMeasure14,
                cockt.strMeasure15
            ]
        }
    }

}


