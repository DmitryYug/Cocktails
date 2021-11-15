import React from "react";

const CardHeader = ({method, glass, garnish, name}) => {
        return (
                <div className="card-header">
                    {method} / {glass} / {garnish}
                    <h4 className="card-title">{name}</h4>
                </div>
        );
}

export default CardHeader;