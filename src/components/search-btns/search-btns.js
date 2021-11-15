import React from "react";

const SearchBtns = () => {
    return(
        <>
            <button 
                type="button" 
                className="btn btn-success d-inline">
                    Alredy know
            </button>
            <button 
                type="button" 
                className="btn btn-danger d-inline">
                    Need to learn
            </button>
            <button 
                type="button" 
                className="btn btn-warning d-inline">
                    Random
            </button>
        </>
    )
}

export default SearchBtns;