import React from "react";
import './character.css';
export default function Character(props){
        return(
            <div className='character'>
               <div>
               <h3>{props.name}</h3>
               </div>
               <div>
               <img className='imagen' src={props.url}></img>
               </div>
            </div>
        )
}