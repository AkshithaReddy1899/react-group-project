import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector((state) => state.missionStore);

  return (
    <div>
      <h3>My Missions</h3>
      <ul>
        {allMissions.map((missions) => (
          <li key={missions.mission_id}>
            <p>{missions.mission_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsProfile;
