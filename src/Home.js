import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Button from 'antd/lib/button';
import { Row, Col ,Modal} from 'antd';
import config from './Config';
import './common.css'
class Home extends Component{
  constructor(){
    super()
    this.state={
      obj:[]
    }
  }
  componentDidMount(){
    var ip=config.url+config.port;
    $.ajax({
      url:ip+"/news",
      type:"get",
      success:function(e){
      	console.log(e);
      	this.setState({
        	obj:e
    	})
      }.bind(this)
    })
  }
  render(){
    return <div className='home'>
    	{this.state.obj.map(function(i,n){
    		return <div key={n}>
    			<Col className="gutter-row text" span={16}>
            <h2>{i.title}</h2>
            <h6>{i.content}</h6>
          </Col>
          <Col className="gutter-row text" span={8}>
          <Button type="primary" className='btn'>Update</Button>
          <Button type="danger" className='btn delete'>Delete</Button>
          </Col>
    		</div>
    	})}
    </div>
  }
}

export default Home;
