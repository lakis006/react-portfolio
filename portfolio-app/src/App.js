import React from 'react';
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
      <div>Hello From React</div>
    )
  }
}

export default App;
