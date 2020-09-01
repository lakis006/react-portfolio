import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';


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
      about: {
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
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jamal Lakis</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">

                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>



          {/* Getting the routes set up to render or display a different component at said path on main pages */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
