import React, { Component } from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import TasksData from '../../data/TasksData';
import RandomID from 'random-id'
class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      id: RandomID(5, "aA0"),
      name: "",
      labelArr: [],
      priority: 1, 
      memberIDArr: [],
      status: 1, 
      description: ""
    };
  }
  
  onSubmit = (event) => {
    //event.preventDefault();
    let data = TasksData;
    if("task" in localStorage){
      data = JSON.parse(localStorage.getItem('task'));
    } 
    
    data.push(this.state);
    localStorage.setItem('task', JSON.stringify(data));//update data to store(local storage)
    this.props.refresh(true);
    //console.log(data);
  }
  
  onChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onPriorityChange = (event) => {
    this.setState({
      priority: parseInt(event.target.value)
    });
  }
  memberChanged = (newValue) => {
    this.setState({
      memberIDArr: newValue
    });
    console.log(this.state.memberIDArr);
  }
  labelChanged = (newValue) => {
    this.setState({
      labelArr: newValue
    });
    //console.log(this.state.labelArr);
  }
  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={this.onSubmit}>
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Thêm công việc</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input type="text" className="form-control" id="taskName" onChange={this.onChange} name="name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea className="form-control" rows={2} id="description" defaultValue={""} onChange={this.onChange} name="description"/>
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select className="form-control" id="priority"  onChange={this.onPriorityChange} name="priority">
                    <option value="3">Thấp</option>
                    <option value="2">Trung bình</option>
                    <option value="1">Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.memberChanged}>
                  <label className="mr-2"><Checkbox value="user_2"/>Nghĩa Văn</label>
                  <label className="mr-2"><Checkbox value="user_3"/>Minh Tuấn</label>
                  <label className="mr-2"><Checkbox value="user_4"/>Trung Hiếu</label>
                  <label className="mr-2"><Checkbox value="user_5"/>Tấn Khải</label>
                </CheckboxGroup>
                <br /><br />
                    <label>Nhãn:</label>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChanged}>
                  <label className="mr-2"><Checkbox value="Frontend"/>Frontend</label>
                  <label className="mr-2"><Checkbox value="Backend"/>Backend</label>
                  <label className="mr-2"><Checkbox value="API"/>API</label>
                  <label className="mr-2"><Checkbox value="Issue"/>Issue</label>
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" value="submit">Add Task</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;