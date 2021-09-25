import React from "react";
import "./navbar.css";
export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <a class="active" >WIKI-POKEMON</a>
          </li>
          <li>
            <a href="#">Character Detail</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
