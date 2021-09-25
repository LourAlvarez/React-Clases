import React from "react";
import './home.css';
import Character from "./character";
import Characters from '../../resources/data/characters.json'
export default class Home extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="home">
                {Characters.Characters.map((element) => (
                <Character
                    name={element.name}
                    url={element.photo}
                />
            ))}     
            </div>
        )
    }
}