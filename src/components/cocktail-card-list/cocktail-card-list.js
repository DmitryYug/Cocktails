import React from "react";
import CocktailCard from "../cocktail-card";
import {Col, Row, Container} from 'reactstrap'; 


const CocktailCardList = ({cardContent, onToggleLearn, onToggleKnow}) => {
    const elements = cardContent.map((list) => {
        const {id, learn, know, ingredients, measures, ...cockt} = list;
        return(
                <Col 
                md='6'
                key={id}>
                    <CocktailCard 
                    {...cockt}
                    ingredients={ingredients}
                    measures={measures}
                    learn={learn}
                    know={know}
                    onToggleKnow={() => onToggleKnow(id)}
                    onToggleLearn={() => onToggleLearn(id)}
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





