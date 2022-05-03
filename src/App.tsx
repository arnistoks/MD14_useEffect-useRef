import React from 'react';
import './App.scss';
import FirstCount from './components/FirstCount';
import SecondCount from './components/SecondCount';
import InputFocus from './components/InputFocus';
import CreateList from './components/CreateList';
import TimeoutAndMultiply from './components/TimeoutAndMultiply';
import CreateBox from './components/CreateBox';

const App = () => (
  <div className="App">
    <section className="section">
      <div className="container">
        <FirstCount />
      </div>
      <div className="container">
        <SecondCount />
      </div>
      <div className="container">
        <InputFocus />
      </div>
      <div className="container">
        <CreateList />
      </div>
      <div className="container">
        <TimeoutAndMultiply />
      </div>
      <div className="container">
        <CreateBox />
      </div>
    </section>
  </div>
);

export default App;
