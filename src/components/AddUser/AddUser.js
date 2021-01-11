import React, { useState } from "react";

const AddUser = (props) => {
  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    phone: "",
    permission: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "name") {
      setInputData({ ...inputData, name: value });
    } else if (name === "phone") {
      setInputData({ ...inputData, phone: value });
    } else {
      setInputData({ ...inputData, permission: value });
    }
  };

  return (
    <div className="col-3">
      <form>
        <div className="card text-left">
          <div className="card border-primary mb-3">
            <div className="card-header">Thêm mới user</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên user"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Điện thoại"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <select
                  className="custom-select"
                  name="permission"
                  onChange={(e) => handleChange(e)}
                >
                  <option defaultValue>Chọn quyền</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="reset"
                  className="btn btn-block btn-primary"
                  onClick={(data) => props.addProfile(inputData)}
                  value="Thêm mới"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
