import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

class Technology extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("delete Tech clicked")
  }

  render() {
    return (
      <div className="d-flex">
        <div id={"technology"} className={"card"}>
          <div className="card-body">
            <div  className="d-flex">
              <h6 className="card-title mr-auto">Technology <span className={"gray"}>- Which device browser or operating system are they using?</span></h6>
              <Button className="delete-button" size="sm" variant={"outline-dark"} onClick={this.handleClick} >
                  <i className="fas fa-trash-alt"/><span>Delete</span>
              </Button>
            </div>
            <div className="d-flex mid-row">
            <ButtonGroup aria-label="Basic dropdown">
              <Dropdown as={ButtonGroup}>
                <Button variant="outline-dark" className="category-dd-1 btn btn-sm btn-outline-dark" >Device</Button>

                <Dropdown.Toggle split variant="outline-dark" className="btn btn-sm btn-outline-dark  dropdown-toggle dropdown-toggle-split" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>

            <ButtonGroup aria-label="Basic dropdown">
              <Dropdown as={ButtonGroup}>
                <Button variant="outline-dark" className="category-dd-2 btn btn-sm btn-outline-dark" >is one of</Button>

                <Dropdown.Toggle split variant="outline-dark" className="btn btn-sm btn-outline-dark  dropdown-toggle dropdown-toggle-split" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
              <div className="btn-group">
                <button className="category-dd-4 btn btn-outline-dark btn-sm" type="button">
                  <span>mobile</span>
                </button>
                <div className="dropdown-menu">
                  ...
                </div>
              </div>
            </div>
            <div className="d-flex">
              <Button className="more-button" size="sm" variant={"outline-dark"}>
                <i className="fas fa-plus"/><span>More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;
