import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Control from './component/controls/Control';
import TaskList from './component/tasklist/TaskList';
import Modal from './component/modal/Modal';
import TaskData from './data/TasksData';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {data:null};
  }
  componentWillMount() {
    this.setState({data:TaskData});
    
  }
  componentDidMount() {
    console.log(this.state.data);
  }
  
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
            <TaskList data={this.state.data}></TaskList>
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
