import React, {Component} from 'react';
import ProgressBar from "../ProgressBar";
import Products from "../Products";
import Technology from "../Technology";
import NewCondition from "../NewCondition";
import './parent.css'

class Parent extends Component {
  render() {
    return (
        <section className={"App-content bodyPanelGray"}>
          <ProgressBar/>
          {/*products purchased component*/}
          <Products/>
          {/*technology component*/}
          <Technology/>
          {/*technology component ends*/}
          {/*New condition*/}
          <NewCondition/>
          {/*New condition ends*/}
        </section>
    );
  }
}

export default Parent;
