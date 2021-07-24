
import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import './App.css';
export default function login(){
  
  var userName = ''
  var gender = ''
  const history = useHistory();
  function handleSubmit(event){
    event.preventDefault();
    console.log("we're in");
    
    debugger
    
    const locationOfName = {
      pathname: '/display',
      state: userName
    }
    const locationOfGender = {
      pathname: 'display',
      state: gender
    }
    history.push(locationOfName)
    history.push(locationOfGender)
    return(
      <Redirect to='/show'/>
    )
  }
  function changeName(event){
      userName = event.target.value
  }
  function changeGender(event) {
      gender = event.target.gender
  }
  return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={changeName}/>
        </label>
        <label>
          Choose your gender:
          <select gender={gender} onChange={changeGender}>
            <option gender="Male">Male</option>
            <option gender="Female">Female</option>
          </select>
        </label>
        <input type="submit" className='btn btn-danger btn-block' value="Submit"/>
      </form>    
  );
}
