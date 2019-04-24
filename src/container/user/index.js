import React from 'react';
import {connect} from 'react-redux';
import {Result,List,Brief,WhiteSpace,Modal} from 'antd-mobile';
import browserCookies from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import { Redirect} from 'react-router-dom'

@connect(
  state => state.user,
  {logoutSubmit}
)
class User extends React.Component{
  constructor(props){
    super(props)
  }

  logout = ()=>{
    const alert = Modal.alert;
    alert('注销', '确认退出登陆吗', [
      { text: '取消'},
      {
        text: '确认',
        onPress: () => {
          browserCookies.erase('userid')
          this.props.logoutSubmit()
          // window.location.href = window.location.href
        }
      },
    ])
   
  }

  render(){
    const Item = List.Item;
    const Brief = List.Item.Brief
    return this.props.user ? (
      <div>
        <Result img={<img 
          style={{width:50}}
          src={require(`../../component/img/${this.props.avatar}.png`)}/>} 
          title={this.props.user}
          message={this.props.type == 'boss' ? this.props.company : null}
        />
        <List renderHeader={() => '简介'} className="my-list">
          <Item
            multipleLine
          >
          {this.props.title}
          {this.props.desc.split('\n').map((v,index)=>(
            <Brief key={index}>{v}</Brief>
          ))}
          {this.props.money ? <Brief>薪资：{this.props.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Item onClick={this.logout}>退出登陆</Item>
        </List>
      </div>
    ): <Redirect to={this.props.redirectTo} />
  }
}

export default User