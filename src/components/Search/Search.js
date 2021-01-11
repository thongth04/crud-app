import React from "react";

const Search = (props) => {
  const handleChange = (e) => {
    props.onTextChange(e);
  };

  return (
    <div className="col-12">
      <div className="form-group">
        <div className="btn-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa"
            style={{ width: 610 }}
            onChange={(e) => handleChange(e)}
          />
          <div className="btn btn-info">Tìm</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Search;
