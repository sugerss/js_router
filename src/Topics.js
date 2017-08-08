import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Topic from './Topic';
import Bon from './Bon';

class Topics extends Component{
  render(){
    return <div>
      <h3>Topics detail</h3>
      <ul>
        <li><Link to='/topics/topic'>111</Link></li>
        <li><Link to='topics/bon'>222</Link></li>
      </ul>
      <Route exact path='/topics/topic' component={Topic}></Route>
      <Route path='/topics/bon' component={Bon}></Route>
    </div>
  }
}


export default Topics;