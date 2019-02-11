import React from 'react';
import {getForecast} from '../utils/api';
import queryString from 'query-string';
import Daily from './Daily';


class Weeklyweather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    getForecast(city)
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            weekData: res,
          }
        })
      }.bind(this))
  }
  handleClick(city) {
    city.city = this.city;
    this.props.history.push({
      pathname: '/data/' + this.city,
      state: city,
    })
  }
  render() {
    return this.state.loading === true
      ? <h1 className='week-header'> Loading </h1>
      : <div>
          <h1 className='week-header'>{this.city}</h1>
          <div className='week-container'>
            {this.state.weekData.list.map(function (listItem) {
              return <Daily onClick={this.handleClick.bind(this, listItem)} 
                      key={listItem.dt} day={listItem} />
            }, this)}
          </div>
        </div>
  }
}

export default Weeklyweather;