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
                <img className='imgCard' src={this.state.detail.photo}></img>
                    <div>{`Nombre: ${this.state.detail.name}`}</div>
                    <div>{`Apellido: ${this.state.detail.lastname}`}</div>
                    <div>{`Edad: ${this.state.detail.age}`}</div>                
                    <div>{`Amigos: ${this.state.detail.Friends}`}</div>
                    <div>{`Ocupación: ${this.state.detail.Occupation}`}</div>
                    <div>{`Ciudad: ${this.state.detail.City}`}</div>
                    
            </div>
        )
    }
}