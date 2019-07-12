import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class NewCondition extends Component {
  render() {
    return (
      <div className="d-flex">
        <div id={"new-condition"} className={"card"}>
          <div className="card-body">
            <div  className="d-flex">
              <h6 className="card-title ">New condition</h6>
              <div className="btn-group">
                <button className="category-dd-1 btn btn-outline-dark btn-sm" type="button">
                  Purchase history
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark  dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  ...
                </div>
              </div>
              <Button className="add-button ml-auto" size="sm" variant={"outline-dark"}>
                  <i className="fas fa-plus"/><span>Add</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCondition;
