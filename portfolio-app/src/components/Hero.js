import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function Hero(props) {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h3>{props.subTitle}</h3>}
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;
