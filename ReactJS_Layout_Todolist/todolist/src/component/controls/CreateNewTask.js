import React, { Component } from 'react';

class CreateNewTask extends Component {
  render() {
    return (
            <button
              type="button"
              className="btn my-3 btn--newTask"
              data-toggle="modal"
              data-target="#modalTask"
              onClick={this.props.isAddItem}
            >
        <i className="fa fa-pencil-square-o" />
        Tạo Task mới
      </button>
    );
  }
}

export default CreateNewTask;