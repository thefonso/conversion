import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class NewCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }


  render() {
    const {addEvent, goSubmit, goChange} = this.props;
    return (
      <div className="d-flex">
        <div id={"new-condition"} className={"card"} >
          <div className="card-body">
            <div  className="d-flex">
              <h6 className="card-title ">New condition</h6>
            {this.state.showWarning ? (
              <div className="btn-group">
                <button className="category-dd-1 btn btn-outline-dark btn-sm" type="button">Purchase history</button>
                <button type="button" className="btn btn-sm btn-outline-dark dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Alpha</a>
                  <a className="dropdown-item" href="#">Beta</a>
                  <a className="dropdown-item" href="#">Gamma</a>
                </div>
              </div>
            ) : (
              <form id={"product-form"} onSubmit={goSubmit}>
                <label>title:
                  <input name={"title"} value={this.state.title} type="text" onChange={goChange}/></label>
                <label>tagLine:
                  <input name={"tagLine"} value={this.state.tagLine} type="text" onChange={goChange}/></label>
                <button onClick={addEvent}>Add Entry</button>
              </form>
            )}
              <Button className="add-button ml-auto" size="sm" variant={"outline-dark"} onClick={this.handleToggleClick}>
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
