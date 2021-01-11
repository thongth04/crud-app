import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import ProfileList from "./components/ProfileList/ProfileList";
import Search from "./components/Search/Search";
import data from "./data/data.json";
import { v1 as uuidv1 } from "uuid";

function App() {
  /*   localStorage.setItem("profiles", JSON.stringify(data));

  useEffect(() => {
    let userData = localStorage.getItem("profiles");
    userData === null
      ? localStorage.setItem("profiles", data)
      : localStorage.setItem("profiles", JSON.parse(userData));
  });
 */
  const [profileData, setProfileData] = useState(data);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };

  const addProfile = (inputData) => {
    const newProfile = { ...inputData, id: uuidv1() };
    const profiles = [...profileData, newProfile];
    setProfileData(profiles);
  };

  const renderData = () => {
    let res = [];
    profileData.forEach((profile) => {
      if (profile.name.indexOf(keyword) !== -1) {
        res.push(profile);
      }
    });
    console.log(profileData);
    return res;
  };

  const deleteProfile = (id) => {
    console.log(id);
    const newData = profileData.filter((profile) => profile.id !== id);
    setProfileData(newData);
  };

  return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search onTextChange={(e) => handleChange(e)} />
            <ProfileList
              data={renderData()}
              deleteProfile={(id) => deleteProfile(id)}
            />
            <AddUser addProfile={(inputData) => addProfile(inputData)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
