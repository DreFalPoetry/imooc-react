import React from 'react'
import { connect } from 'react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'
  
// const mapStatetoProps = (state) => {
//   return {num:state}
// }
// const actionCreators = {addGun,removeGun,addGunAsync}
// App = connect(mapStatetoProps,actionCreators)(App)

@connect(
  //你要什么属性 放在props中
  state=>({num:state}),
  //你要什么方法放到props中，自动dispatch
  {addGun,removeGun,addGunAsync}
)
class App extends React.Component{
  render(){
    const num = this.props.num
    return (
      
       <div>  
        <h1>现在有机枪{num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
       </div>
    )
  }
}




export default App;