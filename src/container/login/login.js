import React from 'react';
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import imoocForm from '../../component/imoocForm/index'

// function hello(){
//   console.log('hello imooc')
// }

// function WrapperHello(fn){
//   return function(){
//     console.log('before say hello')
//     fn()
//     console.log('after say hello')
//   }
// }

// hello = WrapperHello(hello)
// hello()

//属性代理 && 反向继承
// function WrapperHello(Comp){
//   class WrapComp extends Comp{
//     componentDidMount(){
//       console.log('高阶组件新增的生命周期')
//     }
//     render(){
//       return  <Comp></Comp>
//     }
//   }
  // class WrapComp extends React.Component{
  //   render(){
  //     return (
  //       <div>
  //         <p>这是高价组件特有的元素</p>
  //         <Comp {...this.props}></Comp>
  //       </div>
  //     )
  //   }
  // }
//   return WrapComp
// }
// @WrapperHello
// class Hello extends React.Component{
//   render(){
//     return <h2>hello imooc i love react</h2>
//   }
// }

// Hello = WrapperHello(Hello)


@connect(state=>state.user,{login})
@imoocForm
class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
  }

  register(){
    this.props.history.push('./register')
  }

  // handleChange = (name,val) => {
  //   this.setState({
  //     [name]:val
  //   })
  // }

  handleLogin = () => {
    this.props.login(this.props.state)
  }

  render(){
    return (
      <div>
          {this.props.redirectTo && this.props.redirectTo!='/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo/>
        <h2>登陆页</h2>
        <WingBlank>
          <List>
             {this.props.msg? <p className='error-msg'>{this.props.msg}</p>:null }
            <InputItem onChange={this.props.handleChange.bind(this,'user')}>用户</InputItem>
            <InputItem type="password" onChange={this.props.handleChange.bind(this,'pwd')}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    ) 
  }
}

export default Login;