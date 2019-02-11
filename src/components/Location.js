import React from 'react';
import PropTypes from 'prop-types';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locate: '',
    };

    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
  }
  handleSubmitLocation () {
    this.props.onSubmitLocation(this.state.locate)

    this.setState(function () {
      return {
        locate: ''
      }
    })
  }
  handleUpdateLocation (e) {
    var loc = e.target.value;
    this.setState(function () {
      return {
        locate: loc
      }
    });
  }
  render() {
    return (
      <div
        className='location-container'
        style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateLocation}
          type='text'
          value={this.state.locate} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitLocation}>
            Get Weather
        </button>
      </div>
    )
  }
}

Location.defaultProps = {
  direction: 'column'
}

Location.propTypes = {
  direction: PropTypes.string,
}

export default Location;