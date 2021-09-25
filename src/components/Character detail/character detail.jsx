import React from "react";
import Characters from "../../resources/data/characters.json"

export default class CharacterDetail extends React.Component{
    constructor(props){
        super()
        this.state = {
            detail: Characters.Characters[0]
        };
    }

    Detalles(event){
        Characters.Characters.map((element)=> {
            if(element.name===event.target.value){
                console.log(element.name)
                this.setState(()=>{
                    return {detail: element}
                })
            }
        })
    }

    render(){
        return(
            <div className="characters">
                <select className="selectp" onChange={(event)=>{this.Detalles(event)}}> 
                    {Characters.Characters.map((element) =>(
                        <option 
                        value={element.name}>{element.name}
                        </option>
                    ))}
                </select>
                <h2>{`Nombre del Personaje: ${this.state.detail.name}`}</h2>
                <h2>{`Apellido del Personaje: ${this.state.detail.lastname}`}</h2>
                <img className='imgCard' src={this.state.detail.photo}></img>
                    <div>{`Edad del Personaje: ${this.state.detail.age}`}</div>                
                    <div>{`Amigos del Personaje: ${this.state.detail.Friends}`}</div>
                    <div>{`Ocupación del personaje: ${this.state.detail.Occupation}`}</div>
                    <div>{`ciudad: ${this.state.detail.City}`}</div>
                    
            </div>
        )
    }
}