import React from "react";
import Cards from "../Home/character";
import Characters from '../../resources/data/characters.json';
import {  useParams } from "react-router";
import { useHistory } from "react-router";

const  Character = (props) => {

        const p = useParams();
        const element=Characters.Characters.find((elemento) => elemento.id===parseInt(p.id))
        const history = useHistory();
        const volverHome = () => {
          history.push("/");
        };
        return (
            <div>
               
               <Cards
                    name={ element.name}
                    url={ element.photo}
                />
            
            <button
            type="button"
            onClick={() => {
              volverHome();
            }}
          >
            Volver
          </button>
        </div>
        )
    
    }
    export default Character;