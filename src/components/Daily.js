import React from 'react';
import {getDate} from '../utils/helpers';

function Daily (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <img className='weather' src={'/images/weather-icons/' + icon + '.svg'} 
           alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

export default Daily;