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

    async getAllCocktails() {
        const res = await this.getResource('json/v2/9973533/randomselection.php')
        const {drinks} = res
        console.log(res);
        return drinks.map(this._transformCocktailData)
        
        
    }

    
    _transformCocktailData (cockt) {
        return {
            // learn: false,
            // know: false,
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

    // _transformIngredientData (cockt) {
    //     return {
    //         ingredient1: cockt.strIngredient1,
    //         ingredient2: cockt.strIngredient2,
    //         ingredient3: cockt.strIngredient3,
    //         ingredient4: cockt.strIngredient4,
    //         ingredient5: cockt.strIngredient5,
    //         ingredient6: cockt.strIngredient6,
    //         ingredient7: cockt.strIngredient7,
    //         ingredient8: cockt.strIngredient8,
    //         ingredient9: cockt.strIngredient9,
    //         ingredient10: cockt.strIngredient10,
    //         ingredient11: cockt.strIngredient11,
    //         ingredient12: cockt.strIngredient12,
    //         ingredient13: cockt.strIngredient13,
    //         ingredient14: cockt.strIngredient14,
    //         ingredient15: cockt.strIngredient15,
    //     }
    // }
    // _transformMeasureData (cockt) {
    //     return {
    //         measure1: cockt.strMeasure1,
    //         measure2: cockt.strMeasure2,
    //         measure3: cockt.strMeasure3,
    //         measure4: cockt.strMeasure4,
    //         measure5: cockt.strMeasure5,
    //         measure6: cockt.strMeasure6,
    //         measure7: cockt.strMeasure7,
    //         measure8: cockt.strMeasure8,
    //         measure9: cockt.strMeasure9,
    //         measure10: cockt.strMeasure10,
    //         measure11: cockt.strMeasure11,
    //         measure12: cockt.strMeasure12,
    //         measure13: cockt.strMeasure13,
    //         measure14: cockt.strMeasure14,
    //         measure15: cockt.strMeasure15,
    //     }
    // }
    
}



// const ingredients = {
//     kDFLAK: 'ASLDKFJASDL;KF',
//     strIngredient1: "Gin",
//     strIngredient2: "Grand Marnier",
//     strIngredient3: "Lemon Juice",
//     strIngredient4: "Grenadine",
//     strIngredient5: null,
//     strIngredient6: null,
//     strIngredient7: null,
//     strIngredient8: null,
//     strIngredient9: null,
//     strIngredient10: null,
//     strIngredient11: null,
//     strIngredient12: null,
//     strIngredient13: null,
//     strIngredient14: null,
//     strIngredient15: null
// }

// const measures = {
//     kDFLAK: 'ASLDKFJASDL;KF',
//     kDFLzxvcxvAK: 'ASLDKFJASDL;adasdKF',
//     kDFvzcxvxzcLAK: 'ASLD12asdasdKFJASDL;KF',
//     strMeasure1: "1 3/4 shot ",
//     strMeasure2: "1 Shot ",
//     strMeasure3: "1/4 Shot",
//     strMeasure4: "1/8 Shot",
//     strMeasure5: null,
//     strMeasure6: null,
//     strMeasure7: null,
//     strMeasure8: null,
//     strMeasure9: null,
//     strMeasure10: null,
//     strMeasure11: null,
//     strMeasure12: null,
//     strMeasure13: null,
//     strMeasure14: null,
//     strMeasure15: null
// }

// function getValues (obj, keyName) {
//     for (let key in obj) {
//         for (let i = 1; i <= 15; i++){
//             if (key === `${keyName}${i}` && obj[key] != null) {
//                 return(obj[key])
//             } 
//         }
//     }
// }
// getValues (measures, 'strMeasure')
// getValues (ingredients, 'strIngredient')








//черновик



// const ingredients = {
//     kDFLAK: 'ASLDKFJASDL;KF',
//     strIngredient1: "Gin",
//     strIngredient2: "Grand Marnier",
//     strIngredient3: "Lemon Juice",
//     strIngredient4: "Grenadine",
//     strIngredient5: null,
//     strIngredient6: null,
//     strIngredient7: null,
//     strIngredient8: null,
//     strIngredient9: null,
//     strIngredient10: null,
//     strIngredient11: null,
//     strIngredient12: null,
//     strIngredient13: null,
//     strIngredient14: null,
//     strIngredient15: null
// }

// const measures = {
//     kDFLAK: 'ASLDKFJASDL;KF',
//     kDFLzxvcxvAK: 'ASLDKFJASDL;adasdKF',
//     kDFvzcxvxzcLAK: 'ASLD12asdasdKFJASDL;KF',
//     strMeasure1: "1 3/4 shot ",
//     strMeasure2: "1 Shot ",
//     strMeasure3: "1/4 Shot",
//     strMeasure4: "1/8 Shot",
//     strMeasure5: null,
//     strMeasure6: null,
//     strMeasure7: null,
//     strMeasure8: null,
//     strMeasure9: null,
//     strMeasure10: null,
//     strMeasure11: null,
//     strMeasure12: null,
//     strMeasure13: null,
//     strMeasure14: null,
//     strMeasure15: null
// }

// function getValues (obj, keyName) {
//     for (let key in obj) {
//         for (let i = 1; i <= 15; i++){
//             if (key === `${keyName}${i}` && obj[key] != null) {
//                 return(obj[key])
//             } 
//         }
//     }
// }

// const strIngredient = getValues (ingredients, 'strIngredient')
// // const strMeasure = getValues (measures, 'strMeasure')
// // console.log(strIngredient)

// // function pattern(ingred, measure) {
// //     this.ingred = ingred
// //     this.measure = measure
// // }


// console.log(strIngredient)