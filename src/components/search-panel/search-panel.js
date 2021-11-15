import React from "react";
import SearchBtns from "../search-btns";

const SearchPanel = () => {
    return(
        <>
            <div class="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Name of cocktail..."
                />
                <label for="floatingInput">Name of cocktail...</label>
            </div>
            <SearchBtns/>
        </>
    )
}


export default SearchPanel;