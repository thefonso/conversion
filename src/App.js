import React from 'react';
import logo from './images/qubit-logo.svg';
import bell from './images/icon-bell.svg';
import pencil from './images/icon-pencil.svg';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';

function App() {
  return (
    <div className="App container">
      <nav className="navbar navbar-light white">
        <a className="navbar-brand" href="#">
          <img src={logo} className="Qubit-logo" alt="logo" />
        </a>
        <img src={bell} alt="bell" className="bell"/>
        <div className={"initials"}><span>MS</span></div> Mark Smith
        <div className="union-fashion">
          <InputGroup className={"union-fashion"}>
             <FormControl
                 placeholder="Union Fashion"
                 aria-label="Username"
                 aria-describedby="basic-addon1"
             />
          </InputGroup>
          {/*<Button>Union Fashion</Button>*/}
        </div>
      </nav>

      <main className={"main-section d-flex flex-row"}>
        <aside className={"App-menu deepBlue"}>
          <ul>
            <li>Overview</li>
            <li>Experiments</li>
            <li>Segments</li>
            <li>Insights</li>
            <li>Visitor Cloud</li>
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
            <div><span>body content go here</span></div>
          </section>
        </section>
      </main>

    </div>
  );
}

export default App;
