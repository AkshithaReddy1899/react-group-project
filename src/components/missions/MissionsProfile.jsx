import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector((state) => state.missionStore);

  return (
    <div>
      <h3>My Missions</h3>
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
