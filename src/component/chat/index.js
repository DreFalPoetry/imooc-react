import React from 'react';
import { List ,InputItem, NavBar } from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux';
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'


@connect(state=>state,
  {getMsgList,sendMsg,recvMsg}
)
class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text:'',
      msg:[]
    }
  }
  componentDidMount(){
   this.props.getMsgList()
   this.props.recvMsg()
  }

  handleSubmit(){
    // socket.emit('sendmsg',{text:this.state.text})
    // this.setState({
    //   text:''
    // })
    const from = this.props.user._id;
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({from,to,msg})
    this.setState({
      text:''
    })
  }

  render(){
    const user = this.props.match.params.user;
    const Item = List.Item
    return (
      <div id="chat-page">
        <NavBar mode='dark'>
        {this.props.match.params.user}
        </NavBar>

        {this.props.chat.chatmsg.map((v,index)=>{
          return v.from == user ? (
            <List key={index}>
              <Item
              >{v.content}</Item>
            </List>
            // <p key={index}>对方发来的 : {v.content}</p>
          ):(
            <List key={index}>
              <Item 
                className='chat-me'
                extra={'avatar'}
              >{v.content}</Item>
            </List>
            // <p key={index}>我发的：{v.content}</p>
          )
        })}
         <div className='stick-footer'>
            <List>
              <InputItem
                placeholder='请输入'
                value={this.state.text}
                onChange={v=>{
                  this.setState({
                    text:v
                  })
                }}
                extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
              />            
            </List>
          </div>
      </div>
      // <h2>chat with user: {this.props.match.params.user}</h2>
    )
  }
}

export default Chat
