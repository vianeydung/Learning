import React, { Component } from 'react';
import FilterType from '../common/FilterType';
class FilterLabel extends Component {
  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">Nhãn
          <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, FilterType.label, "Frontend")}>
            <i className="fa fa-circle mr-2" />Frontend</li>
          <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, FilterType.label, "Backend")}>
            <i className="fa fa-circle mr-2" />Backend</li>
          <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, FilterType.label, "API")}>
            <i className="fa fa-circle mr-2" />API</li>
          <li className="py-1 display-5 lead" onClick={this.props.filter.bind(this, FilterType.label, "Issue")}>
            <i className="fa fa-circle mr-2" />Issue</li>
        </ul>
      </div>
    );
  }
}

export default FilterLabel;