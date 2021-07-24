import React from 'react';
import App from './App'
export default class show extends React.Component{
    render(){
        const {state} = this.props.location
        return(
            <div>
                <h1>{state.userName}</h1>
                <h1>{state.gender}</h1>
            </div>
        );
    }
}