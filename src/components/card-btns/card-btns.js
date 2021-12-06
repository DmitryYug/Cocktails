import React from "react";

const CardButtons = ({method}) => {
        return(
            <>
                <button 
                    type="button" 
                    className="btn btn-success">
                        \/
                </button>
                <button 
                    onClick={method}
                    type="button" 
                    className="btn btn-danger ">
                        ?
                </button>
            </>
        )
};

export default CardButtons;
