import React from 'react';
import {connect} from 'react-redux';
import {NavBar} from 'antd-mobile';
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../../component/navLink/index'
import Boss from '../boss/index'
import Genius from '../genius/index'

function Msg(){
  return <h2>消息列表页面</h2>
}
function User(){
  return <h2>个人中心页面</h2>
}
@connect(state => state)
class Dashboard extends React.Component{
  constructor(props){
    super(props)
   
  } 

  render(){
    console.log(this.props)
    const pathName = this.props.location.pathname;
    const {user} = this.props;
    const navList = [
      {
        path:'/boss',
        text:'牛人',
        icon:'boss',
        title:'牛人列表',
        component:Boss,
        hide:user.type == 'genius'
      },{
        path:'/genius',
        text:'boss',
        icon:'job',
        title:'boss列表',
        component:Genius,
        hide:user.type == 'boss'
      },{
        path:'/msg',
        text:'消息',
        icon:'msg',
        title:'消息列表',
        component:Msg,
      },{
        path:'/me',
        text:'我',
        icon:'user',
        title:'个人中心',
        component:User,
      }
    ]
    return (
      <div>
        <NavBar className='fixed-header'  mode="dark">{navList.find(v=>v.path ==pathName).title}</NavBar>
        <div style={{marginTop:15}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}/>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
        {/* <Route path='/boss' Component={boss}></Route> */}
      </div>
    )
  }
}

export default Dashboard