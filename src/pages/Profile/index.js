// import React from "react";
import { Divider } from "semantic-ui-react";
import { ActionFunction } from "react-router-dom";
import axios from "axios";
// import ProfileSection1 from "./Section1";
import React, { useState, useEffect } from "react";
import { Image, Flag, } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { accountService } from "../../_services/account.service";
import "./style.scss";
import GroupsProfile from "./groups";
import ExperienceProfile from "./profile";
import axiosInstance from "../../api/axiosInstance";

const Profile = () => {

const [profileData, setprofileData] = useState([]);
const [newValue, setnewValue] = useState({
  caca:"",
});


  useEffect(() => {
    accountService
      .profile()
      .then((res) => {
        setprofileData(res.data.firstName);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

const {id}=useParams()

  const updateValue = ( id,newValue) => {
    axiosInstance
      .patch(`/myprofile/${id}`, newValue )
      .then((res) => {
      
        setprofileData(newValue.caca);
      })
      .catch((error) => console.error(error));
  };



  return (
    <>

    {/* sortir des composants ou renommer en + explicite */}
      {/* <ProfileSection1/> */}
      
     
      
      { <section id="profile--section1">
      <div className="profile--flex">
        <Image
          src={profileData.image}
          size="medium"
          circular
          className="shadow"
        />
        <div>
          
        
          <input type="text" value={newValue.caca} onChange={(e) => setnewValue({ ...newValue, caca: e.target.value })} />
          
          <button type="submit" onClick={updateValue}>edit</button>

          <h1>{profileData.firstName}</h1>
          <p>{profileData.content}</p>
          <ul className="profile--tag">
            <li>{profileData.age} ans</li>
            <li> Numéro de  télephone: {profileData.phone}  </li>
            <li> Sex : {profileData.sex}</li>
            <li> Langue parler : {profileData.spoken_language}</li>
            <li>
            pays de résidence : {profileData.country_of_origin}{" "}
              <Flag size="large" name="france" />
            </li>
          </ul>
        </div>
      </div>
    </section>
   }
      
      
      {/* <Divider />
      <div className="section2and3--flexbox">
        <GroupsProfile />
        <ExperienceProfile />
      </div>  */}
    </>
  );
};

export default Profile;
