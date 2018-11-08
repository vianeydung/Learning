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
    this.state = {
      task:null,
      updateType:0,
      selectedItem:null
    };
  }
  componentWillMount() {
    if("task" in localStorage){
      this.setState({task:JSON.parse(localStorage.getItem('task'))});
    } else {
      localStorage.setItem('task', JSON.stringify(TaskData));
      this.setState({task:JSON.parse(localStorage.getItem('task'))});
    }
  }
  componentDidMount() {
    console.log(this.state.task);
  }
  handleRefresh = (value) => {
    if(value && ("task" in localStorage)){
      this.setState({task:JSON.parse(localStorage.getItem('task'))});
    }
  }
  isAdd = () => {
    this.setState({updateType:0});
  }
  callUpdate = (updateType, index) => {
    this.setState({
      updateType:updateType,
      selectedItem: this.state.task[index] 
    });
  }
  render() {
    return (
      <div className="App">
        <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control isAdd={this.isAdd}></Control>
            {/* DISPLAY */}
            <TaskList data={this.state.task} callUpdate={this.callUpdate}></TaskList>
          </div>
        </div>
        {/* The Modal */}
        <Modal 
          updateType={this.state.updateType} 
          item={this.state.selectedItem} 
          refresh={this.handleRefresh}>
        </Modal> 
        </div>
      </div>
    );
  }
}
export default App;
