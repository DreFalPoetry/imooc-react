import React from 'react';
import {Grid,List} from 'antd-mobile';
import PropTypes from 'prop-types';

class AvataSelector extends React.Component{
  static propTypes = {
    selectAvatatr:PropTypes.func
  }

  constructor(props){
    super(props)
    this.state = {};
  }

  render(){
    const avatarList = 'boy,girl,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'.split(',').map(v=>({
      icon:require(`../img/${v}.png`),
      text:v
    }))

    const gridHeader = this.state.text?(
      <div>
        <span>已选择头像</span>
        <img src={this.state.icon} style={{width:20}} alt=""/>
      </div>
    ) : <div>请选择头像</div>

    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid 
            data={avatarList} 
            activeStyle={false} 
            columnNum={5}
            onClick={elm => {
              this.setState(elm)
              this.props.selectAvatatr(elm.text)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvataSelector;