import React from 'react';
import CardInfo from '../components/CardInfo';

 function Card(props) {
    return (
        <div className="d-inline-block j-card">
            <img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
           
            {/* the line below (10) we're using conditionally rendered component which means don't actually show it unless card is selected. 
            Also created a CardInfo.js that will get rendered by the Card after getting clicked   */}
            { props.item.selected &&  <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>} 
        </div>
    )
}

export default Card;