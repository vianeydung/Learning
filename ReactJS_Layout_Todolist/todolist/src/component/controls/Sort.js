import React, { Component } from 'react';

class Sort extends Component {
  onChange = (e) => {
    this.props.sortTask(parseInt(e.target.value));
  }
  render() {
    return (
      <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select className="form-control" onChange={this.onChange}>
          <option value="-1">Không sort</option>
          <option value="1">Từ A đến Z</option>
          <option value="2">Từ Z đến A</option>
        </select>
      </div>
    );
  }
}

export default Sort;