import React from "react";
import {useEffect} from 'react';
import {useState} from 'react';
import Characters from '../../resources/data/characters.json'

export default function CharacterDetail(props){

    const [CharacterlInfo, setCharacterInfo] = useState([]); 

    useEffect(() => {
        setCharacterInfo(Characters.Characters)
    });

    const [CharacterSelected, setCharacterSelected] = useState(Characters.Characters[0]); 

    const mostrar = (event) =>{
        setCharacterSelected(CharacterlInfo.find((element) => {
            return element.name === event.target.value;
        }))
    }
   
        return(
            <div className="characterContainer">
                <select  onChange={(event)=>{mostrar(event)}}> 
                    {Characters.Characters.map((element) =>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <img className='imgCard' src={CharacterSelected.photo}></img>
                <div>{`Nombre: ${CharacterSelected.name}`}</div>
                    <div>{`Apellido: ${CharacterSelected.lastname}`}</div>
                    <div>{`Edad: ${CharacterSelected.age}`}</div>                
                    <div>{`Occupation: ${CharacterSelected.Occupation}`}</div>
                    <div>{`Friends: ${CharacterSelected.Friends}`}</div>
                    <div>{`City: ${CharacterSelected.City}`}</div>
                
            </div>
        )
    }
