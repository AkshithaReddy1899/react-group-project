import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const allMissions = useSelector((state) => state.missionStore);

  return (
    <div className="rocket-profile">
      <h2>My Missions</h2>
      <ul>
        {allMissions.length === 0 ? (
          <p>No Missions Joined</p>
        ) : (
          allMissions.map((mission) => (
            <li key={mission.id}>{mission.mission_name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MissionsProfile;
