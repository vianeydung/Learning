import React, { Component } from 'react';

class TaskItem extends Component {
  getColor(value) {
    switch (value) {
      case "Frontend":
        return "#389E0D";
      case "Backend":
        return "#722ED1";
      case "API":
        return "#13C2C2";
      case "Issue":
        return "#CF1322";
      default:
        break;
    }
  }
  getPriority(value) {
    switch (value) {
      case 1:
        return "Cao";
      case 2:
        return "Trung Bình";
      case 3:
        return "Thấp";
      default:
        break;
    }
  }
  getClassPriority(value) {
    switch (value) {
      case 1:
        return "danger";
      case 2:
        return "warning";
      case 3:
        return "info";
      default:
        break;
    }
  }
  getStatus(status){
    switch (status) {
      case 1:
          return "fa fa-anchor";
      case 2:
          return "fa fa-spinner";
      case 3:
          return "fa fa-check-square-o";
      case 0:
          return "fa fa-anchor mr-2";
    
      default:
        break;
    }
  }
  updateHandle = (event) => {
    
    if(event.type === "click") {
      this.props.callUpdate(1, this.props.index)
    }
    else if(event.type === "change") {
      this.props.callUpdate(2, this.props.index);
    }
  }
  render() {
    let {item, index} = this.props;//ánh xạ đúng tên.
    let elmLabels = item.labelArr.map((value, idx) => {
      return <i
      key={idx}
      className="fa fa-circle"
      style={{ color: `${this.getColor(value)}` }}
    />
    });
    let elmUser = item.memberIDArr.map((value, idx) => {
      return <img key={idx} src={`./img/${value}.jpg`} className="user" alt="user" />
    });
    
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">
          {elmLabels}
        </td>
        <td className={`text-${this.getClassPriority(item.priority)} font-weight-bold text-center`}>
          {this.getPriority(item.priority)}
                      </td>
        <td className="text-center">
          {elmUser}
        </td>
        <td className="text-center d-flex align-items-center">
          <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={this.updateHandle}
            data-toggle="modal"
            data-target="#modalTask"
          >
            Sửa
          </button>

          <div className="form-group ml-2">
            <label></label>
            <select className="form-control" id="" onChange={this.updateHandle}>
              <option>Chọn trạng thái</option>
              <option>Chưa bắt đầu</option>
              <option>Đang tiến hành</option>
              <option>Đã hoàn thành</option>
              <option>Xóa</option>
            </select>
          </div>
        </td>
        <td className="text-center">
          <i className={`${this.getStatus(item.status)} mr-2`} />
        </td>
      </tr>
    );
  }
}

export default TaskItem;