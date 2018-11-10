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
      isAddItem:true,
      index:-1,
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

//// update data
  isAddItem = () => {
    this.setState({
      isAddItem:true,
    });
  }
  isEditItem = (index) => {
    console.log("index = " + index);
    this.setState({
      isAddItem:false,
      index:index,
      selectedItem: this.state.task[index] 
    });
  }
  editStatus = (value, index) => {
    this.state.task[index].status = value;
    localStorage.setItem('task', JSON.stringify(this.state.task));
    if("task" in localStorage){
      this.setState({task:JSON.parse(localStorage.getItem('task'))});
    }
  }
  render() {
    return (
      <div className="App">
        <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control isAddItem={this.isAddItem}></Control>
            {/* DISPLAY */}
            <TaskList
              data={this.state.task} 
              isEditItem={this.isEditItem}
              editStatus={this.editStatus}>
            </TaskList>
          </div>
        </div>
        {/* The Modal */}
        <Modal 
          isAddItem={this.state.isAddItem} 
          index={this.state.index} 
          item={this.state.selectedItem} 
          refresh={this.handleRefresh}>
        </Modal> 
        </div>
      </div>
    );
  }
}
export default App;
