import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

class TimeOfPurchase extends Component {
  render() {
    return (
        <div className="d-flex">
          <div id={"time-of-purchase"} className={"card"}>
            <div className="card-body">

            <div  className="d-flex">
              <h6 className="card-title mr-auto">Time of purchase <span className={"gray"}>- When did this purchase take place?</span></h6>
              <Button className="delete-button" size="sm" variant={"outline-dark"}>
                  <i className="fas fa-clock"/><span>Remove time period</span>
              </Button>
            </div>
            <div className="d-flex mid-row">
              <ButtonGroup aria-label="Basic dropdown">
                <Dropdown as={ButtonGroup}>
                  <Button variant="outline-dark" className="category-dd-1 btn btn-sm btn-outline-dark" >Products purchased</Button>

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
                  <Button variant="outline-dark" className="category-dd-2 btn btn-sm btn-outline-dark" >on</Button>

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
                  <div>27/11/2015</div>
                </button>
                <div className="dropdown-menu">
                  ...
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
    );
  }
}

export default TimeOfPurchase;
