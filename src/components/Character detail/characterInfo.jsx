import React from "react";
import Card from "../Home/character";
import Characters from '../../resources/data/characters.json';
import {  useParams } from "react-router";
import { useHistory } from "react-router";

export default function Character(props){

        const p = useParams();
        const element = Characters.Characters.find((element) => element.code=== p.code);
        const history = useHistory();
        const volverHome = () => {
          history.push("/");
        };
        return (
            <>
              <Card
                    name={element.name }
                    url={element.photo}
                />
            <button
            type="button"
            onClick={() => {
              volverHome();
            }}
          >
            Volver
          </button>
        </>
        )
    
    }