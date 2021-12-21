import React, { Component } from "react";
import { Button } from "reactstrap";


export default class FilterBtns extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            // {name: '10Random', label: '10 Random'},
            {name: 'random', label: 'Random'},
            {name: 'a', label: 'A'},
            {name: 'b', label: 'B'},
            {name: 'c', label: 'C'},
            {name: 'd', label: 'D'},
            {name: 'e', label: 'E'},
            {name: 'f', label: 'F'},
            {name: 'g', label: 'G'},
            {name: 'h', label: 'H'},
            {name: 'i', label: 'I'},
            {name: 'j', label: 'J'},
            {name: 'k', label: 'K'},
            {name: 'l', label: 'L'},
            {name: 'm', label: 'M'},
            {name: 'n', label: 'N'},
            {name: 'o', label: 'O'},
            {name: 'p', label: 'P'},
            {name: 'q', label: 'Q'},
            {name: 'r', label: 'R'},
            {name: 's', label: 'S'},
            {name: 't', label: 'T'},
            {name: 'u', label: 'U'},
            {name: 'v', label: 'V'},
            {name: 'w', label: 'W'},
            {name: 'x', label: 'X'},
            {name: 'y', label: 'Y'},
            {name: 'z', label: 'Z'}
        ]
        this.onFilterUpdate = this.onFilterUpdate.bind(this)

    }
    
    onFilterUpdate(filter) {
        this.props.onFilterUpdate(filter)
        // console.log(filter)
    }
    
    
    render() {
        
        // const classNames = 
        const buttons = this.buttons.map(({name, label}) => {
            const active = name === this.props.filter
            const className = active ? '' : 'outline'
            return (
                < Button
                onClick={() => this.onFilterUpdate(name)}
                key={name}
                color = "primary"
                outline={className}
                >
                    {label} 
                </Button>
            )
        })
        return (
            < >
                {buttons}
            </>
        )
    }

}




// const FilterBtns = () => {
//     return(
//         <>
//             <button 
//                 type="button" 
//                 className="btn btn-success d-inline">
//                     Alredy know
//             </button>
//             <button 
//             type="button" 
//             className="btn btn-danger d-inline">
//                     Need to learn
//             </button>
//             <button 
//                 type="button" 
//                 className="btn btn-warning d-inline">
//                     Random
//             </button>
//         </>
//     )
// }

// export default FilterBtns;