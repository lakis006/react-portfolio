import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                        {props.title && <h1 className="display-1 font-weight-bolder super">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-1 font-weight-light super">{props.subTitle}</h3>}
                        {props.text && <h3 className="lead font-weight-light super">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;
