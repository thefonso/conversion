import React, {Component} from 'react';
import './progressbar.css'

class ProgressBar extends Component {
  render() {
    return (
      <div>
        {/*define segment */}
        <div className={"d-flex justify-content-between"}>
          <div id={"define-segment"} className="card">
            <div className="card-body">
              <h6 className="card-title">Define a new Segment</h6>
              <p className="card-text">Add a Condition to define a segment. The more conditions yuo add the more specific your segment will be.</p>
            </div>
          </div>
          {/*progress bar component*/}
          <div id={"estimated-size"} className="card">
            <div className="card-body">
              <h6 className="card-title">Estimated segment size</h6>
              <p className="card-text">10-20% of your total traffic expected to join based on a sample of historical data</p>
              <div id="myProgress"><div id="myBar"></div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
