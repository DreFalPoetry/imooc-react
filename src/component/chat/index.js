import React from 'react';
import { List ,InputItem, NavBar,Icon } from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux';
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'

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
    if(!this.props.chat.chatmsg.length){
      this.props.getMsgList()
      this.props.recvMsg()
    }
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
    const userId = this.props.match.params.user;
    const Item = List.Item
    const users = this.props.chat.users;
    if(!users[userId]){
      return null
    }
    const chatid = getChatId(userId,this.props.user._id)
    const chatmsg = this.props.chat.chatmsg.filter(v => v.chatid == chatid)
    return (
      <div id="chat-page">
        <NavBar 
          mode='dark'
          icon={<Icon type="left" />}
          onLeftClick={()=>{
            this.props.history.goBack()
          }}
        >
        {users[userId].name}
        </NavBar>

        {chatmsg.map((v,index)=>{
          const avatar = require(`../img/${users[v.from].avatar}.png`)
          return v.from == userId ? (
            <List key={index}>
              <Item
              thumb={avatar}
              >{v.content}</Item>
            </List>
            // <p key={index}>对方发来的 : {v.content}</p>
          ):(
            <List key={index}>
              <Item 
                className='chat-me'
                extra={<img src={avatar}></img>}
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
