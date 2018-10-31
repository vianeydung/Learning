import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <div className="col-md-3 text-center px-0">
              <div className="header header--left d-flex align-items-center">
                <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
                <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
              </div>
              <button type="button" className="btn my-3 btn--newTask" data-toggle="modal" data-target="#modalTask">
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
              </button>
              {/* Filter */}
              <div className="px-3">
                <div className="filter filter--progress">
                  <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-check-square-o mr-2" />Hoàn thành</li>
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-trash-o mr-2" />Hủy bỏ</li>
                  </ul>
                </div>
                <div className="filter filter--label">
                  <ul className="list-unstyled text-left">Nhãn
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-circle mr-2" />Frontend</li>
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-circle mr-2" />Backend</li>
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-circle mr-2" />API</li>
                    <li className="py-1 display-5 lead">
                      <i className="fa fa-circle mr-2" />Issue</li>
                  </ul>
                </div>
                <div className="form-group text-left">
                  <label htmlFor="sel1">Độ ưu tiên</label>
                  <select className="form-control">
                    <option className="font-weight-bold">Tất cả</option>
                    <option className="text-info font-weight-bold">Thấp</option>
                    <option className="text-success font-weight-bold">Trung bình</option>
                    <option className="text-danger font-weight-bold">Cao</option>
                  </select>
                </div>
                <div className="form-group text-left">
                  <label>Sắp xếp theo công việc</label>
                  <select className="form-control">
                    <option>Từ A đến Z</option>
                    <option>Từ Z đến A</option>
                  </select>
                </div>
              </div>
            </div>
            {/* DISPLAY */}
            <div className="col-md-9 px-0">
              <div className="container-fluid px-0">
                <div className="row header header--right d-flex align-items-center mx-0">
                  <div className="col-md-6">
                    <div className=" d-flex justify-content-between">
                      <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group text-left my-0">
                      <input type="text" className="form-control" placeholder="Tìm kiếm công việc" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Công việc</th>
                      <th className="text-center">Nhãn</th>
                      <th className="text-center">Độ ưu tiên</th>
                      <th className="text-center">Người thực hiện</th>
                      <th className="text-center">Xử lý</th>
                      <th className="text-center">Tình trạng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">Soạn ReactJS</td>
                      <td className="text-center">
                        <i className="fa fa-circle" style={{color: '#389E0D'}} />
                        <i className="fa fa-circle" style={{color: '#13C2C2'}} />
                      </td>
                      <td className="text-danger font-weight-bold text-center">Cao</td>
                      <td className="text-center">
                        <img src="./img/user_2.jpg" className="user" alt="" />
                        <img src="./img/user_3.jpg" className="user" alt="" />
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-outline-primary">Sửa</button>
                        <button type="button" className="btn btn-outline-success">Xong</button>
                        <button type="button" className="btn btn-outline-danger">Xóa</button>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check-square-o mr-2" />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td className="text-center">Soạn Python</td>
                      <td className="text-center">
                        <i className="fa fa-circle" style={{color: '#722ED1'}} />
                        <i className="fa fa-circle" style={{color: '#CF1322'}} />
                        <i className="fa fa-circle" style={{color: '#389E0D'}} />
                      </td>
                      <td className="text-danger font-weight-bold text-center">Cao</td>
                      <td className="text-center">
                        <img src="./img/user_3.jpg" className="user" alt="" />
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-outline-primary">Sửa</button>
                        <button type="button" className="btn btn-outline-success">Xong</button>
                        <button type="button" className="btn btn-outline-danger">Xóa</button>
                      </td>
                      <td className="text-center">
                        <i className="fa fa-check-square-o mr-2" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div className="modal fade" id="modalTask">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Thêm công việc</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input type="text" className="form-control" id="taskName" />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea className="form-control" rows={2} id="description" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select className="form-control" id="priority">
                    <option>Thấp</option>
                    <option>Trung bình</option>
                    <option>Cao</option>
                  </select>
                </div>
                <label htmlFor>Người thực hiện:</label>
                <br />
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Nghĩa Văn
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Minh Tuấn
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Trung Hiếu
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Tấn Khải
                  </label>
                </div>
                <br /><br />
                <label htmlFor>Nhãn:</label>
                <br />
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Frontend
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Backend
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />API
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" defaultValue />Issue
                  </label>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default App;
