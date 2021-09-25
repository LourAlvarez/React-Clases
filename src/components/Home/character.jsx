import React from "react";
import './character.css';
export default class Character extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className='character'>
               <div>
               <h3>{this.props.name}</h3>
               </div>
               <div>
               <img className='imagen' src={this.props.url}></img>
               </div>
            </div>
        )
    }
}
