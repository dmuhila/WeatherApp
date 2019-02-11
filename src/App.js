
import React from 'react';
import Location from './components/Location';
import Weeklyweather from './components/Weeklyweather';
import Data from './components/Data';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h1>Clever Title</h1>
                <Location
                  direction='row'
                  onSubmitLocation={function(city){
                    props.history.push({
                      pathname: '/weeklyweather',
                      search: '?city=' + city
                    });
                  }}
                  location={123} />
              </div>
            )
          }} />

          <Route exact path='/' render={function (props) {
            return (
              <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className='header'>Enter a City and State</h1>
                <Location
                  direction='column'
                  onSubmitLocation={function (city) {
                    props.history.push({
                      pathname: '/weeklyweather',
                      search: '?city=' + city
                    })
                  }}
                  location={123} />
              </div>
            )
          }} />

          <Route path='/weeklyweather' component={Weeklyweather} />

          <Route path='/data/:city' component={Data} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;