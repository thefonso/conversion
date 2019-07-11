import React from 'react';
import logo from './images/qubit-logo.svg';
import bell from './images/icon-bell.svg';
import pencil from './images/icon-pencil.svg';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  return (
    <div className="App container">
      <nav className="navbar white d-flex">
        <div className={"mr-auto"}>
          <a className="navbar-brand" href="#">
            <img src={logo} className="Qubit-logo" alt="logo" />
          </a>
        </div>
        <div className={"user-info d-flex justify-content-end"}>
          <img src={bell} alt="bell" className="bell"/>
          <div className={"initials"}>
            <span>MS</span>
          </div>
          <div className={"user-name"}>
            <span>Mark Smith</span>
          </div>
          <div className="union-fashion">
            <InputGroup className={"union-fashion"}>
               <FormControl
                   placeholder="Union Fashion"
                   aria-label="Username"
                   aria-describedby="basic-addon1"
               />
            </InputGroup>
          </div>
        </div>
      </nav>

      <main className={"main-section d-flex flex-row"}>
        <aside className={"App-menu deepBlue"}>
          <ul>
            <li><i className="fas fa-network-wired"/><a href="overview.html">Overview</a> </li>
            <li><i className="fas fa-desktop"/><a href="experiments.html">Experiments</a> </li>
            <li><i className="fas fa-users"/><a href="segments.html">Segments</a></li>
            <li><i className="far fa-chart-bar"/><a href="insights.html">Insights</a></li>
            <li><i className="fas fa-cloud"/><a href="visitor.html">Visitor Cloud</a></li>
          </ul>
        </aside>
        <section className={"content-container"}>
          <header className="App-header d-flex flex-row green">
            <div className={"header-title d-flex flex-column"}>
              <InputGroup>
               <FormControl
                   placeholder="Mobile users who bought shoes on Black Friday"
                   aria-label="header-title"
                   aria-describedby="basic-addon2"
               />
              </InputGroup>
              <div className={"caption"}>Created by Mark Smith</div>
            </div>
            <a className="icon" href="#">
              <img src={pencil} className="icon-pencil" alt="edit title" />
            </a>
            <div className={"header-title-buttons"}>
              <Button variant={"outline-secondary"}>Exit</Button>
              <Button variant={"outline-secondary"}>Preview</Button>
              <Button variant={"outline-secondary"} className={"hover-on"}>Save changes</Button>
            </div>
          </header>
          <section className={"App-content bodyPanelGray"}>
            <div className={"d-flex justify-content-between"}>

              <div id={"define-segment"} className="card">
                <div className="card-body">
                  <h6 className="card-title">Define a new Segment</h6>
                  <p className="card-text">Add a Condition to define a segment. The more conditions yuo add the more specific your segment will be.</p>

                </div>
              </div>

              <div id={"estimated-size"} className="card">
                <div className="card-body">
                  <h6 className="card-title">Estimated segment size</h6>
                  <p className="card-text">10-20% of your total traffic expected to join based on a sample of historical data</p>
                  <div id="myProgress"><div id="myBar"></div></div>
                </div>
              </div>

            </div>
            <div className="d-flex">
              <div id={"products-purchased"} className="card">
                <div className="card-body">
                  <h6 className="card-title">Define a new Segment <span className={"gray"}>- What products have they interacted with?</span></h6>
                  <div className="d-flex">
                    <DropdownButton className={"category-dd-1"}
                                    size="sm"
                                    id="dropdown-outline-secondary"
                                    split
                                    variant="outline-dark"
                                    title="Category">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className={"category-dd-2"}
                                    size="sm"
                                    id="dropdown-basic-button"
                                    variant="outline-dark"
                                    title="is one of">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control id="sample-field" type="email" placeholder="shoes" />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="d-flex">
                    <Button className="more-button" size="sm" variant={"outline-dark"}>
                      <i className="fas fa-plus"/><span>More</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

    </div>
  );
}

export default App;
