import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


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

          <Navbar ClassName="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jamal Lakis</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="nabar-toggle">
              <Nav className="ml-auto">

                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
            </Navbar.Collapse>
          </Navbar>



          {/* Getting the routes set up to render on main pages */}
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/" exact render={} />
          <Route path="/" exact render={} />

          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
