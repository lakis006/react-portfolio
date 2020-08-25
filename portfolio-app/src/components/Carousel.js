import React from 'react'
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
   
    render() {

        return (
            <p>Carousel Works</p>
            );
    }
}

export default Carousel;
