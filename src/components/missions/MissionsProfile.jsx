import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector((state) => state.missionStore);

  return (
    <div className="rocket-profile">
      <h2>My Missions</h2>
      <ul>
        {allMissions.map((mission) => (
          <li key={mission.id}>
            <p>{mission.mission_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionsProfile;
