import React, { Component } from 'react';
import CreateNewTask from './CreateNewTask';
import FilterLabel from './FilterLabel';
import FilterProgress from './FilterProgress'; 
import FilterPriority from './FilterPriority';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
          <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
        </div>
        <CreateNewTask></CreateNewTask>
        {/* Filter */}
        <div className="px-3">
          <FilterProgress></FilterProgress>
          <FilterLabel></FilterLabel>
          <FilterPriority></FilterPriority>
          <Sort></Sort>
        </div>
      </div>
    );
  }
}

export default Control;