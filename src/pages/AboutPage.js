import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content';


 function AboutPage(props) {
    return (
       <div className>
          <Hero title={props.title} />
         <Content> 
           
            <p>Hello, my name is Jamal. I'm a full stack web developer with experience in Javascript, Express, Node JS, MongoDB, MySQL, and React.</p>
            
            <p> My dream is to start my own full-stack web developer camp for those that are less fortunate than others when it comes to payment (Still working on ideas) </p>

            <p> I'm constantly learning new things, which would just be gaining more experience with React JS, MongoDB, Express JS, Node JS, and MySQL</p>

            <p>My latest project, The Budget Tracker, is a progressive web application that has offline functionality by utilizing Service Workers and the Cache API to 
               store static files and API responses in the users local cache. You can find it deployed <a href="https://budget-tracker-jl.herokuapp.com/">Here</a> on Heroku. While offline, the user may add an expense or deposit, which is stored in their local IndexedDB.</p>
           
            <p> When I'm not learning something new, chances are I am somewhere outdoors hiking, rock-climbing, jogging, and swimming</p>

         </Content>

        
       </div>
       
    )
}

export default AboutPage;