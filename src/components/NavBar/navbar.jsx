import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a>
            <NavLink exact to="/" className="a" class="active" >WIKI-POKEMON</NavLink>
            </a>
          </li>
          <li>
            <a>
            <NavLink exact to="/characterDetail" className="a" >Character Detail</NavLink>
            </a>
           
          </li>
          <li>
            <a>
              <NavLink exact to="/about" className="a">About</NavLink>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
