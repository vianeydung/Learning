import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Control from './component/controls/Control';
import TaskList from './component/tasklist/TaskList';
import Modal from './component/modal/Modal';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control></Control>
            {/* DISPLAY */}
            <TaskList></TaskList>
          </div>
        </div>
        {/* The Modal */}
        <Modal></Modal> 
        </div>
      </div>
    );
  }
}
export default App;
