import React, {Component} from 'react';
import './menu.css'

class Menu extends Component {
  render() {
    return (
      <aside className={"App-menu deepBlue"}>
        <ul>
          <li><i className="fas fa-network-wired"/><a href="overview.html">Overview</a> </li>
          <li><i className="fas fa-desktop"/><a href="experiments.html">Experiments</a> </li>
          <li><i className="fas fa-users"/><a href="segments.html">Segments</a></li>
          <li><i className="far fa-chart-bar"/><a href="insights.html">Insights</a></li>
          <li><i className="fas fa-cloud"/><a href="visitor.html">Visitor Cloud</a></li>
        </ul>
      </aside>
    );
  }
}

export default Menu;
