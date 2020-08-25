import React from 'react'
import { useSpring, animated } from 'react-spring';
import  '../';

 function CardInfo(props) {

    // the const below is actually going to hold the style of react spring we're using 
    const style = useSpring({opacity: 1, from: {opacity: 0}});


    return (
    
      <animated.div className="j-card-info" style={style}>
          <p className="j-card-title">{props.title}</p>
          <p className="j-card-sub-title">{props.subTitle}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">View Deployed App on Heroku</a>
      </animated.div>
    )
}


export default CardInfo;