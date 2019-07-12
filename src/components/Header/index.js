import React, {Component} from 'react';
import logo from "../../images/qubit-logo.svg";
import bell from "../../images/icon-bell.svg";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import './header.css'

class Header extends Component {
  render() {
    return (
         <nav className="navbar white d-flex">
            <div className={"mr-auto"}>
              <a className="navbar-brand" href="#">
                <img src={logo} className="Qubit-logo" alt="logo" />
              </a>
            </div>
            <div className={"user-info d-flex justify-content-end"}>
              <img src={bell} alt="bell" className="bell"/>
              <div className={"initials"}>
                <span>MS</span>
              </div>
              <div className={"user-name"}>
                <span>Mark Smith</span>
              </div>
              <div className="union-fashion">
                <InputGroup className={"union-fashion"}>
                   <FormControl
                       placeholder="Union Fashion"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                   />
                </InputGroup>
              </div>
            </div>
          </nav>
    );
  }
}

export default Header;
