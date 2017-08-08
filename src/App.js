import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Button from 'antd/lib/button';
import $ from 'jquery';
import Home from './Home';
import About from './About';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col ,Modal} from 'antd';
import config from './Config';
import './common.css'
const { Header, Content, Footer } = Layout;

class Basic extends Component{
  constructor(){
    super()
    this.state={
      obj:[],
      visible: true
    }
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  componentDidMount(){
    var ip=config.url+config.port;
    $.ajax({
      url:ip+"/news",
      type:"get",
      success:function(e){
        console.log(e);
        this.setState({
          obj:e,
          visible: false
      })
      }.bind(this)
    })
  }
  update(num){
    var ip=config.url+config.port;
    var id=num;
    this.setState({
      visible: true,
    });
    $('.save').click(function(){
      if($('.title').val()==''||$('.content').val()==''){
        alert('false')
      }else{
        $.ajax({
          url:ip+"/replace",
          type:'post',
          data:{
            id:id,
            'title':$('.title').val(),
            'content':$('.content').val()
          },
          success:function(a){console.log(a)}.bind(this)
        }) 
      }   
    })
    
  }
  delete(num){
    var ip=config.url+config.port;
    var id=num;
      $.ajax({
        url:ip+"/replace",
        type:'post',
        data:{
          id:id,
          'title':'',
          'content':''
        },
        success:function(a){console.log(a)}.bind(this)
      }) 
  }
  render(){
    return (<div className='center'>
        <Router>                   
      <Layout className="layout">
        <Header>        
        <Link to='/'>home</Link>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div className='home'>
              {this.state.obj.map(function(i,n){
                return <div key={n}>
                  <Col className="gutter-row text" span={16}>
                    <h2>{i.title}</h2>
                    <h6>{i.content}</h6>
                  </Col>
                  <Col className="gutter-row text" span={8}>
                  <Button type="primary" className='btn' onClick={this.update.bind(this,(i.id))}>Update</Button>
                  <Button type="danger" className='btn' onClick={this.delete.bind(this,(i.id))}>Delete</Button>
                  </Col>
                </div>
              },this)}
            </div>
          </div>
          <Modal title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <p>title:<input type="text" className='title'/></p>
          <p>content:<input type="text" className='content'/></p>
          <Button type="primary" className='btn save'>Delete</Button>
        </Modal>
        </Content>
      </Layout>
    </Router>
      </div>)
  }
}


export default Basic;


