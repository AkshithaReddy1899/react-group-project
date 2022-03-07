import React from 'react';
import MissionsProfile from './missions/MissionsProfile';
import RocketsProfile from './rockets/RocketsProfile';

const ProfilePage = () => (
  <div>
    <hr />
    <section className="profile">
      <MissionsProfile />
      <RocketsProfile />
    </section>
  </div>
);

export default ProfilePage;
