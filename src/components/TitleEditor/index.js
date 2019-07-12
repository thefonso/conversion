import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import pencil from "../../images/icon-pencil.svg";
import Button from "react-bootstrap/Button";
import "./titleeditor.css"

class TitleEditor extends Component {
  render() {
    return (
      <header className="App-header d-flex flex-row green">
        <div className={"header-title d-flex flex-column"}>
          <InputGroup>
           <FormControl
               placeholder="Mobile users who bought shoes on Black Friday"
               aria-label="header-title"
               aria-describedby="basic-addon2"
           />
          </InputGroup>
          <div className={"caption"}>Created by Mark Smith</div>
        </div>
        <a className="icon" href="#">
          <img src={pencil} className="icon-pencil" alt="edit title" />
        </a>
        <div className={"header-title-buttons"}>
          <Button variant={"outline-secondary"}>Exit</Button>
          <Button variant={"outline-secondary"}>Preview</Button>
          <Button variant={"outline-secondary"} className={"hover-on"}>Save changes</Button>
        </div>
      </header>
    );
  }
}

export default TitleEditor;
