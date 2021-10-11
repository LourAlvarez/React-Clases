import React from "react";
import Cards from "./character";
import Characters from '../../resources/data/characters.json'
import { Link } from "react-router-dom"

export default class Home extends React.Component{
    constructor(props){
        super()
        this.state = {
            c: Characters.Characters
        };
    }

    render(){
        return (
            <div className='container'>
            {this.state.c.map((element) => (
            <Link to={`/characterDetail/${element.id}`}>
                <Cards
                    name={element.name }
                    url={element.photo}
                />
            </Link>                
            ))}                
            </div>
        )
    }
}