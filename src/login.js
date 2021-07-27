
import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import './App.css';
class login extends React.Component{
  constructor(props){
      super(props);
      this.state = {userName: ''}
      this.handleSubmit = this.handleSubmit.bind(this)
      this.changeName = this.changeName.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("we're in");
    this.props.history.push("/show", this.state.userName);
  }
  changeName(event){
      this.setState({
        userName: event.target.value
      })
  }
  render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.changeName}/>
          </label>
          <input type="submit" className='btn btn-danger btn-block' value="Submit"/>
        </form>    
        
    );
  }
}

export default login;