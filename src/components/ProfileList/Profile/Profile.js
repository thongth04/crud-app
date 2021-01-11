import React from "react";

const Profile = (props) => {
  const deleteProfile = () => {
    props.deleteProfile();
  };
  return (
    <tr>
      <th scope="row">{props.stt}</th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.permission}</td>
      <td>
        <div className="btn-group">
          <div className="btn btn-warning sua">
            <i className="fa fa-edit">Sửa</i>
          </div>
          <div className="btn btn-danger xoa" onClick={deleteProfile}>
            <i className="fa fa-delete">Xóa</i>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Profile;
