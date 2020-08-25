import React from 'react'
import { useSpring, animated } from 'react-spring';

 function CardInfo(props) {

    // the const below is actually going to hold the style of react spring we're using 
    const style = useSpring({opacity: 1, from: {opacity: 0}});


    return (
    
      <animated.div className="g-card-info" style={style}>
          <p className="g-card-title">{props.title}</p>
          <p className="g-card-sub-title">{props.subTitle}</p>
          <a href={props.link} target="_blank" rel="noopener norefferer">View</a>
      </animated.div>
    )
}


export default CardInfo;