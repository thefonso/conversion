import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./newcondition.css";

class NewCondition extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  showMe(value) {
    alert("see me in the console " + value);
    console.log(value);
  }

  render() {
    const { addEvent, goSubmit, goChange, prodValue } = this.props;
    return (
      <div className="d-flex flex-column">
        <div id={"new-condition"} className={"card"}>
          <div className="card-body">
            <div className="d-flex">
              <h6 className="card-title ">New condition</h6>
              {this.state.showWarning ? (
                <ButtonGroup aria-label="Basic dropdown">
                  <Dropdown as={ButtonGroup}>
                    <Button
                      variant="outline-dark"
                      className="category-dd-1 btn btn-sm btn-outline-dark"
                    >
                      Purchase history
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="outline-dark"
                      className="btn btn-sm btn-outline-dark dropdown-toggle dropdown-toggle-split"
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              ) : (
                <form id={"product-form"} onSubmit={goSubmit}>
                  <label>
                    title:
                    <input
                      name={"title"}
                      value={this.state.title}
                      type="text"
                      onChange={goChange}
                    />
                  </label>
                  <label>
                    tagLine:
                    <input
                      name={"tagLine"}
                      value={this.state.tagLine}
                      type="text"
                      onChange={goChange}
                    />
                  </label>
                  <button onClick={addEvent}>Add Entry</button>
                </form>
              )}
              <Button
                className="add-button ml-auto"
                size="sm"
                variant={"outline-dark"}
                onClick={this.handleToggleClick}
              >
                <i className="fas fa-plus" />
                <span>Add</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <span
            className={"footerLink"}
            onClick={() => this.showMe(prodValue[0])}
          >
            Show source code
          </span>
        </div>
      </div>
    );
  }
}

export default NewCondition;
