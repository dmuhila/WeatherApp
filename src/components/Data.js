import React from 'react';
import Daily from './Daily';
import {convertTemp} from '../utils/helpers';

class Data extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div>
        <Daily day={props} />
        <div className='description-container'>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {convertTemp(props.temp.min)} °F</p>
          <p>max temp: {convertTemp(props.temp.max)} °F</p>
          <p>humidity: {props.humidity}</p>
        </div>
      </div>
    )
  }
}

export default Data;