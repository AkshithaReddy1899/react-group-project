import React from 'react';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const Rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  console.log(Rockets.length);
  return (
    <div className="rocket-profile">
      <h2>My Rockets</h2>
      <ul>
        {
          (Rockets.length === 0)
            ? <p>NO Rockets reserved</p>
            : Rockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default RocketsProfile;
