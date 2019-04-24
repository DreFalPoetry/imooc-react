import React from 'react';
export default function imoocForm(Camp){
  return class WrapperComp extends React.Component{
    constructor(props){
      super(props)
      this.state={}
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (name,val) => {
      this.setState({
        [name]:val
      })
    }
    render(){
      return <Camp handleChange={this.handleChange} state={this.state} {...this.props} />
    }
  }
}