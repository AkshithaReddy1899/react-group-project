import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from '../../redux/rockets/rockets';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  console.log(typeof rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);
  return (
    <section>
      <hr className="rockets-hr" />
      <ul>
        {rockets.map((rocket) => {
          console.log('OM');
          console.log(rocket);
          return (
            <li key={rocket.id} className="rocket-item">
              <img
                src={rocket.images[0]}
                alt={rocket.name}
                className="rocket-img"
              />
              <div className="rocket-data">
                <h1>{rocket.name}</h1>
                <p>{rocket.description}</p>
                <button type="button">Reserve Rocket</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RocketsPage;
