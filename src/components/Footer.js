import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


function Footer() {
    return (
     <footer className="mt-5">
         <Container fluid={true}>
             <Row className="border-top justify-content-between p-3">
                 <Col className="p-0" md={3} sm={12}>
                    Jamal Lakis
                 </Col>
                 <Button className="p-0 d-flex justify-content-end" md={3}>
                     Github
                 </Button>
                 <Button className="p-0 d-flex justify-content-end" md={3}>
                     Linkedin
                 </Button>
                 <Button className="p-0 d-flex justify-content-end" md={3}>
                     Resume
                 </Button>
                 <Col className="p-0 d-flex justify-content-end" md={3}>
                     This site made by j-lakis
                 </Col>
             </Row>
         </Container>

     </footer>
    )
}

export default Footer;