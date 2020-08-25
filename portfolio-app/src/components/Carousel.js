import React from 'react'
import Card from '../components/Card';
import budget from '../assets/images/budget.png';
import burgpic from '../assets/images/burgpic.png';
import fitness from '../assets/images/fitness.png';


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
                    selected: false

                },
                {
                    id: 1,
                    title: 'Burger',
                    subTitle: 'This app will allow the user to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)',
                    imgSrc: burgpic,
                    link: 'https://burger-sql.herokuapp.com/',
                    selected: false

                },
                {
                    id: 2,
                    title: 'Fitness Tracker',
                    subTitle: 'The PWA App that Allows updated withdrawals/depositsThe Fitness Tracker enables the user to create and add workouts to a database and track these workouts in a dashboard.',
                    imgSrc: fitness,
                    link: 'https://fitness-mongo.herokuapp.com/',
                    selected: false

                }

                // Add 3 more assignments/projects and make the portfolio page nicer (started below/ just stwitch properties)

                // {
                //     id: 1,
                //     title: 'Burger',
                //     subTitle: 'This app will allow the user to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)',
                //     link: 'https://burger-sql.herokuapp.com/',
                //     selected: false

                // },
                // {
                //     id: 1,
                //     title: 'Burger',
                //     subTitle: 'This app will allow the user to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)',
                //     link: 'https://burger-sql.herokuapp.com/',
                //     selected: false

                // },
                // {
                //     id: 1,
                //     title: 'Burger',
                //     subTitle: 'This app will allow the user to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)',
                //     link: 'https://burger-sql.herokuapp.com/',
                //     selected: false

                // }
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
