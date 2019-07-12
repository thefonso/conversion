import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

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
              <div className="btn-group">
                <button className="category-dd-1 btn btn-outline-dark btn-sm" type="button">
                  Product purchased
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark  dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  ...
                </div>
              </div>
              <div className="btn-group">
                <button className="category-dd-2 btn btn-outline-dark btn-sm" type="button">
                  on
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark  dropdown-toggle dropdown-toggle-split"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  ...
                </div>
              </div>
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
