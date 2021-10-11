import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Characters from "./resources/data/characters.json";
import CharacterDetail from "./components/Character detail/character detail";
import Character from "./components/Character detail/characterInfo";
import { useEffect } from "react";
import { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
    const [CharacterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        setCharacterInfo(Characters.Characters);
    });

    return ( <
        div className = "App" >
        <
        NavBar / >
        <
        Switch >
        <
        Route path = "/"
        exact >
        <
        Home charactersInfo = { CharacterInfo }
        /> <
        /Route> <
        Route path = "/characterDetail"
        exact >
        <
        CharacterDetail charactersInfo = { CharacterInfo }
        /> <
        /Route> <
        Route exact path = "/characterDetail/:id" >
        <
        Character charactersInfo = { CharacterInfo }
        /> <
        /Route> <
        Route path = "/about"
        exact >
        <
        About / >
        <
        /Route> <
        /Switch> <
        /div>
    );
}

export default App;