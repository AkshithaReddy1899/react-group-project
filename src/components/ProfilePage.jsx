import React from 'react';
import MissionsProfile from './missions/MissionsProfile';
import RocketsProfile from './rockets/RocketsProfile';

const ProfilePage = () => (
  <div className="profile">
    <MissionsProfile />
    <RocketsProfile />
  </div>
);

export default ProfilePage;
