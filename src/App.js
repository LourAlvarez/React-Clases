import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import CharacterDetail from "./components/Character detail/character detail";

function App() {
    return ( <
        div >
        <
        Navbar >
        <
        /Navbar>  <
        Home >
        <
        /Home>  <
        CharacterDetail >
        <
        /CharacterDetail> <
        About >
        <
        /About> <
        /div>
    )
}
export default App;