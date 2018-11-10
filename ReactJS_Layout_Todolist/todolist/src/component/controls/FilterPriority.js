import React, { Component } from 'react';
import FilterType from '../common/FilterType';
class FilterPriority extends Component {
  onChange = (e) => {
    this.props.filter(FilterType.priority, parseInt(e.target.value));
  }
  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Độ ưu tiên</label>
        <select className="form-control" onChange={this.onChange}>
          <option className="font-weight-bold" value="-1">Tất cả</option>
          <option className="text-info font-weight-bold" value="3">Thấp</option>
          <option className="text-success font-weight-bold" value="2">Trung bình</option>
          <option className="text-danger font-weight-bold" value="1">Cao</option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;