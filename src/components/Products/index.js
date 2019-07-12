import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import TimeOfPurchase from "../TimeOfPurchase";

class Products extends Component {
  render() {
    return (
        <div>
            <div className="d-flex">
              <div id={"products-purchased"} className="card">
                <div className="card-body">

                  <div className="d-flex">
                    <h6 className="card-title mr-auto">Products purchased <span className={"gray"}>- What products have they interacted with?</span></h6>
                    <Button className="delete-button" size="sm" variant={"outline-dark"}>
                        <i className="fas fa-trash-alt"/><span>Delete</span>
                    </Button>
                  </div>

                  <div className="d-flex mid-row">
                    <div className="btn-group">
                      <button className="category-dd-1 btn btn-outline-dark btn-sm" type="button">
                        Category
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
                        is one of
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
                      <button className="category-dd-3 btn btn-outline-dark btn-sm" type="button">
                        <span>Shoes</span>
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
            {/*time of purchase component*/}
            <TimeOfPurchase/>
        </div>
    );
  }
}

export default Products;
