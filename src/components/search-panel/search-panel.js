import React, { Component } from "react";


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onChangeSearch = this.onChangeSearch.bind(this)
    }

    onChangeSearch(e) {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }


    render() {
        return(
            <>
                <div class="form-floating mb-3">
                    <input 
                        onChange={this.onChangeSearch}
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="Name of cocktail..."
                    />
                    <label for="floatingInput">Searching for...</label>
                </div>
            </>
        )
    }
}







