import React from "react";
import Profile from "./Profile/Profile";

const ProfileList = (props) => {
  const deleteProfile = (id) => {
    props.deleteProfile(id);
  };

  return (
    <div className="col-9">
      <table className="table table-striped table-inverse table-hover">
        <thead className="thead-inverse">
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((profile, index) => (
            <Profile
              key={index}
              stt={index + 1}
              id={profile.id}
              name={profile.name}
              phone={profile.phone}
              permission={profile.permission}
              deleteProfile={(id) => deleteProfile(profile.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
