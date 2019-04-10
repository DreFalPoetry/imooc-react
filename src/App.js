import React, { Component } from 'react';
import {Button,List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends Component{
  render(){
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长是{boss}</h2>
        <Yiying boss='张大苗'></Yiying>
        <Qibinglian boss='孙德胜'></Qibinglian>
      </div>
    ) 
  }
}

function Qibinglian(props){
  return <h2>骑兵连连长，{props.boss},冲压</h2>
}

class Yiying extends Component{
  constructor(props){
    super(props)
    this.state = {
      solders:['虎子','柱子','王根沈']
    }
    // this.addSolders = this.addSolders.bind(this)
  }

  componentWillMount(){
    console.log('将要加载')
  }

  componentDidMount(){
    console.log('加载完毕')
  }

  

  addSolders = () => {
    console.log('add solder');
    this.setState({
      solders:[...this.state.solders,'新兵'+Math.random()]
    })
  }

  render(){
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长，{this.props.boss}</h2>
        <Button type='primary' onClick={this.addSolders}>新兵入伍</Button>
        <List 
          renderHeader={()=>'士兵列表'}
        >
           {
             this.state.solders.map((v,ind)=>{
              return <List.Item key={ind}>{v}</List.Item>
            })
          }
        </List>         
      </div>
    ) 
  }
}

export default App;
