import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // taking in the 
      title: "Jamal Lakis",
      headerLinks: [

        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      // adding top level info for each page in particular 
      home: {
        title: 'Enjoy Life',
        subTitle: 'Projects that make users happy',
        text: "Checkout The Projects!"
      },
      abour: {
        title: 'About Me'        
      },
      contact: {
        title: 'Let\'s Chat'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container ClassName="p-0" fluid={true}>
          
        <Navbar ClassName="border-bottom">
          <Navbar.Brand>Jamal Lakis</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="nabar-toggle">
            <Nav>

              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

          </Container>
      </Router>
    )
  }
}

export default App;
