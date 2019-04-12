import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
  componentDidMount(){
    const publisherList = ['/login','/register']
    console.log(this.props.location.pathname)
    if(publisherList.indexOf(this.props.location.pathname) > -1){
      return null
    }
    //获取用户信息【是否登陆，现在的url地址，login是不需要跳转的】
    axios.get('/user/info').then((res)=>{
      if(res.status === 200){
        console.log(res.data)
        if(res.data.code === 0){
          //有登陆信息的
        }else{
          this.props.history.push('/login')
        }
      }
    })

      //用户的type 身份是boss或者牛人
    //用户是否完善信息（选择头像 个人简介）
  }

  render(){
    return null
  }

}

export default AuthRoute