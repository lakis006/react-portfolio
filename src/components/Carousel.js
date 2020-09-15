import React from 'react'
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import budget from '../assets/images/budget-pic.png';
import burgpic from '../assets/images/clear-burger.png';
import fitness from '../assets/images/fit-pic.png';
import qEats from '../assets/images/q-eats.png';
import noteTaker from '../assets/images/start.png';
import weather from '../assets/images/weather-pic.png';


class  Carousel extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Budget Tracker',
                    subTitle: 'The PWA App that allows updated withdrawals/deposits to apply even if the USER is offline',
                    imgSrc: budget,
                    link: 'https://budget-tracker-jl.herokuapp.com/',
                    github: "https://github.com/lakis006/budget-tracker",
                    selected: false

                },
                {
                    id: 1,
                    title: 'Burger',
                    subTitle: 'This app will allow the user to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)',
                    imgSrc: burgpic,
                    link: 'https://burger-sql.herokuapp.com/',
                    github: "https://github.com/lakis006/burger",
                    selected: false

                },
                {
                    id: 2,
                    title: 'Fitness Tracker',
                    subTitle: 'The PWA App that Allows updated withdrawals/depositsThe Fitness Tracker enables the user to create and add workouts to a database and track these workouts in a dashboard.',
                    imgSrc: fitness,
                    link: 'https://fitness-mongo.herokuapp.com/',
                    github: "https://github.com/lakis006/fitness-tracker",
                    selected: false

                },

                // Add 3 more assignments/projects and make the portfolio page nicer (started below/ just stwitch properties)

                {
                    id: 3,
                    title: 'Quarantine Eats',
                    subTitle: 'Anyone can use this application to inspire and instruct any user on how to make a variety of dishes and drinks at home.',
                    imgSrc: qEats,
                    link: 'https://jonafi.github.io/quarantine-eats/index.html',
                    github: "https://github.com/jonafi/quarantine-eats",
                    selected: false

                },
                {
                    id: 4,
                    title: 'Note Taker',
                    subTitle: 'This application enables the user to write, save, and delete notes. It will use an express backend as well as saves and retrieves note data from a JSON file. This was accomplished by using methods such as GET, POST, and DELETE.',
                    link: 'https://note-taker-lakis006.herokuapp.com/',
                    github: "https://github.com/lakis006/note-taker",
                    imgSrc: noteTaker,
                    selected: false

                },
                {
                    id: 5,
                    title: 'Weather Dashboard',
                    subTitle: 'This project will include building a weather dashboard using the OpenWeather API as per users spefications. The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
                    imgSrc: weather,
                    link: 'https://lakis006.github.io/weather-dashboard/',
                    github: "https://github.com/lakis006/weather-dashboard",
                    selected: false

                }
            ]
        }
    }


    // this function below is going to  be a method that 
    handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if (item.id !== id) {
            item.selected = false;
        }
    });
    this.setState({
        items
    });
    }
   

    // actually making the items by creating a method that maps items and creates a card component for each one of these items 
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
         })
    }



    render() {

        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                </Row>
            </Container>
            );
    }
}

export default Carousel;
