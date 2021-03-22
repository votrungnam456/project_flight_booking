import './App.css';
import Header from './components/home/Home'
import Content from './components/content/Content'
import Booking from './components/booking/Booking'
import Listing from './components/listing/Listing'
import Menu from './components/Menu/Menu'
import Footer from './components/footer/Footer'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Menu/>
        {/* <Listing/> */}
        <Switch>
          {this.showContentMenu(routes)}
        </Switch>

        <Footer/>
      </div>
      </Router>
    );
  }
  showContentMenu = (routes) =>{
    let result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return (<Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>)
      })
    }
    return result
  }
}

export default App;
