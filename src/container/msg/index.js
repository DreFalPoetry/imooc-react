import React from 'react'
import {connect} from 'react-redux';
import { List, Badge } from 'antd-mobile';

@connect(
  state => state
)
class Msg extends React.Component{
  getLast(arr){
    return arr[arr.length - 1]
  }
  render(){
    // if(!this.props.chat.chatmsg.length){

    // }
    const userid = this.props.user._id;
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v=>{
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup);
    
    // console.log(Object.values({name:'imooc',age:10}))
    //按照聊天用户分组 根据 chatid
    return (
      <div>
          {
            chatList.map((v,index)=>{
              console.log(v)
              const lastItem = this.getLast(v)
              const targetId = v[0].from == userid ?v[0].to : v[0].from
              const unreadNum = v.filter(v=>!v.read && v.to == userid).length
              if(!this.props.chat.users[targetId]){
                return null
              }
              const name = this.props.chat.users[targetId] ? this.props.chat.users[targetId].name : ''
              const avatar = this.props.chat.users[targetId] ? this.props.chat.users[targetId].avatar : ''
              return (
                <List key={index}>
                <List.Item
                  extra={<Badge text={unreadNum}></Badge>}
                  thumb={require(`../../component/img/${avatar}.png`)}
                >
                  {lastItem.content}
                  <List.Item.Brief>
                    {name}
                  </List.Item.Brief>
                  
                </List.Item>
                </List>
              )
            })
          }       
      </div>
    )
  }
}

export default Msg