import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import CharacterDetail from "./components/Character detail/character detail";
import Characters from './resources/data/characters.json';
import React from "react";
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Character from "./components/Home/character";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [characterInfo, setCharacterInfo] = useState([]);
    useEffect(() => {
        setCharacterInfo(Characters.Characters)
    }, []);
    return ( <
        div className = "App" >
        <
        Navbar > < /Navbar>    <
        Switch >
        <
        Route exact path = "/" >
        <
        Home className = "App"
        characterInfo = { characterInfo }
        /> < /
        Route > <
        Route exact path = "/characterDetail" >
        <
        CharacterDetail characterInfo = { characterInfo }
        /> < /
        Route > <
        Route exact path = "/characterDetail/:id" >
        <
        Character characterInfo = { characterInfo }
        /> < /
        Route > <
        Route path = "/about" >
        <
        About / >
        <
        /Route> < /
        Switch > <
        /div>
    )
}

export default App;