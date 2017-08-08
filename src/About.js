import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import config from './Config';

class About extends Component{
  constructor(){
    super()
    this.state={
      con:[]
    }
  }
  componentDidMount(){
    var ip=config.url+config.port;
  	var id=window.location.href.split('=')[1];
    $.ajax({
      url:ip+"/text",
      type:"post",
      data:{
      	id:id
      },
      success:function(e){
      	console.log(e);
      	this.setState({
        	con:e
    	})
      }.bind(this)
    })
  }
  render(){
    return <div></div>
  }
}

export default About;