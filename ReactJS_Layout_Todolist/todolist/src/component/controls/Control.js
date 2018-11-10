import React, { Component } from 'react';
import CreateNewTask from './CreateNewTask';
import FilterLabel from './FilterLabel';
import FilterProgress from './FilterProgress'; 
import FilterPriority from './FilterPriority';
import Sort from './Sort';
class Control extends Component {
  handleClick = (event) => {
    //event.preventDefault();
    //localStorage.setItem('task', JSON.stringify(data));
  }
  render() {
    //let data = {data};
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
          <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
        </div>
        <CreateNewTask isAddItem={this.props.isAddItem}></CreateNewTask>
        <button type="button" className="btn btn-primary px-3" onClick={this.handleClick}>Save Data</button>
        {/* Filter */}
        <div className="px-3">
          <FilterProgress filter={this.props.filter}></FilterProgress>
          <FilterLabel filter={this.props.filter}></FilterLabel>
          <FilterPriority filter={this.props.filter}></FilterPriority>
          <Sort sortTask={this.props.sortTask}></Sort>
        </div>
      </div>
    );
  }
}

export default Control;