import React from 'react';
import { List ,InputItem, NavBar,Icon ,Grid} from 'antd-mobile'
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
      showEmoji:false
    }
  }
  componentDidMount(){
    if(!this.props.chat.chatmsg.length){
      this.props.getMsgList()
      this.props.recvMsg()
    }
    this.fixCarousel()
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

  fixCarousel(){
    setTimeout(function(){
      window.dispatchEvent(new Event('resize'))
    },0)
  }

  render(){
    const emoji =  `😀 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇 😍 🤩 😘 😗 😚 😙
      😋 😛 😜 🤪 😝 🤑 🤗 🤭 🤫 🤔 🤐 🤨 😐 😑 😶 😏 😒 🙄 😬 🤥 😌 😔 😪
      🤤 😴 😷 🤒 🤕 🤢 🤮 🤧 😵 🤯 🤠 😎 🤓 🧐 😕 😟 🙁 😮 😯 😲 😳 😦 😧 
    😨 😰 😥 😢 😭 😱 😖 😣 😞 😓 😩 😫 😤`.split(' ').filter(v=>v).map(v=>({text:v}))
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
                extra={
                  <div>
                    <span style={{marginRight:15}} onClick={()=>{
                      this.setState({
                        showEmoji:!this.state.showEmoji
                      })
                      this.fixCarousel()
                    }}>😀</span>
                    <span onClick={()=>this.handleSubmit()}>发送</span>
                  </div>
                }
              />            
            </List>
            {this.state.showEmoji ? (
               <Grid 
                  data={emoji}
                  columnNum={9}
                  carouselMaxRow={4}
                  isCarousel={true}
                  onClick={el => {
                    this.setState({
                      text:this.state.text + el.text
                    })
                  }}
                />
            ):null}
          </div>
      </div>
      // <h2>chat with user: {this.props.match.params.user}</h2>
    )
  }
}

export default Chat
