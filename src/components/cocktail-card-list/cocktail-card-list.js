import React from "react";
import CocktailCard from "../cocktail-card";
import {Col, Row, Container} from 'reactstrap'; 


const CocktailCardList = ({cardContent}) => {
    const elements = cardContent.map((list) => {
        const {id, ingredients, measures, ...cockt} = list;
        return(
                <Col 
                md='3'
                key={id}>
                    <CocktailCard 
                    {...cockt}
                    ingredients={ingredients}
                    measures={measures}
                    />
                </Col>
        );
        
    });
    
    return (
        <Container>
            <Row>
                {elements}
            </Row>
        </Container>
    );
};

export default CocktailCardList





