import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import TitleEditor from './components/TitleEditor';
import './App.css';
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col">
          <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <main className={"main-section d-flex flex-row"}>
            <Menu/>
            <section className={"content-container"}>
              <TitleEditor/>
              <Parent/>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
