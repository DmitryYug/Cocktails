import React, { Component } from "react";
import { Button } from "reactstrap";


export default class FilterBtns extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            {name: '10Random', label: '10 Random'},
            {name: 'a', label: 'A'},
            {name: 'b', label: 'B'},
            {name: 'c', label: 'C'},
            {name: 'random', label: 'Random'}
        ]
        this.onFilterUpdate = this.onFilterUpdate.bind(this)

    }
    
    onFilterUpdate(filter) {
        this.props.onFilterUpdate(filter)
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