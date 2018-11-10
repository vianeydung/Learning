import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Control from './component/controls/Control';
import TaskList from './component/tasklist/TaskList';
import Modal from './component/modal/Modal';
import TaskData from './data/TasksData';
import FilterType from './component/common/FilterType';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task:null,
      isAddItem:true,
      index:-1,
      selectedItem:null,

      //FILTER
      filterType: FilterType.all,
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

////FILTER
filter = (type, value) => {
  console.log("type:" + type + " value: " + value);
  switch (type) {
    case FilterType.status:
      this.filterStatus(value);
      break;
    case FilterType.label:
      this.filterLabel(value);
      break;
    case FilterType.priority:
      this.filterPriority(value);
      break;
    case FilterType.string:
      this.filterString(value);
      break;
    default:
      this.handleRefresh(true);
      break;
  }
}
filterStatus(value){
  let data = JSON.parse(localStorage.getItem('task'));
  let filterData = [];
  console.log("value :" + value);
  for (let index = 0; index < data.length; index++) {
    console.log("status :" + data[index].status);
    if(data[index].status === value){
      filterData.push(data[index]);
    }
  }
  this.setState({task:filterData})
}
filterLabel(value){
  let data = JSON.parse(localStorage.getItem('task'));
  let filterData = [];
  for (let index = 0; index < data.length; index++) {
    if(data[index].labelArr.indexOf(value) > -1){
      filterData.push(data[index]);
    }
  }
  this.setState({task:filterData})
}
filterString(value){
  let data = JSON.parse(localStorage.getItem('task'));
  let filterData = [];
  for (let index = 0; index < data.length; index++) {
    if(data[index].name.indexOf(value) > -1){
      filterData.push(data[index]);
    }
  }
  this.setState({task:filterData})
}
filterPriority(value){
  if(value === -1)
  {
    this.handleRefresh(true);
    return;
  }
  let data = JSON.parse(localStorage.getItem('task'));
  let filterData = [];
  for (let index = 0; index < data.length; index++) {
    if(data[index].priority === value){
      filterData.push(data[index]);
    }
  }
  this.setState({task:filterData})
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
            <Control isAddItem={this.isAddItem} filter={this.filter}></Control>
            {/* DISPLAY */}
            <TaskList
              data={this.state.task} 
              isEditItem={this.isEditItem}
              editStatus={this.editStatus}
              filter={this.filter}
              >
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
