import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">Soạn ReactJS</td>
                        <td className="text-center">
                          <i
                            className="fa fa-circle"
                            style={{ color: "#389E0D" }}
                          />
                          <i
                            className="fa fa-circle"
                            style={{ color: "#13C2C2" }}
                          />
                        </td>
                        <td className="text-danger font-weight-bold text-center">
                          Cao
                      </td>
                        <td className="text-center">
                          <img src="./img/user_2.jpg" className="user" alt="user" />
                          <img src="./img/user_3.jpg" className="user" alt="user" />
                        </td>
                        <td className="text-center d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-outline-primary mt-2"
                          >
                            Sửa
                          </button>
                        
                          <div className="form-group ml-2">
                            <label></label>
                            <select className="form-control" id="">
                              <option>Chọn trạng thái</option>
                              <option>Chưa bắt đầu</option>
                              <option>Đang tiến hành</option>
                              <option>Đã hoàn thành</option> 
                              <option>Xóa</option>
                            </select>
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check-square-o mr-2" />
                        </td>
                      </tr>
        );
    }
}

export default TaskItem;