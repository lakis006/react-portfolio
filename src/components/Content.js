import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 function Content(props) {
    return (
       <Container fluid={true}>
           <Row className="justify-content-center">
               <Col md={8}>

               {/* props.children is a special react prop that whenever you pass inside the component that you want to use this component in, it basically renders it */}
                {props.children}
               </Col>
           </Row>
       </Container>
    )
}

export default Content;