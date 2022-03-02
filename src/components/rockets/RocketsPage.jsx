import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi, cancelRocket } from '../../redux/rockets/rockets';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  const handleClick = (e) => {
    // dispatch(reserveRocket(e.target.id));
    dispatch(cancelRocket(e.target.id));
  };

  return (
    <section>
      <hr className="rockets-hr" />
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item">
            <img
              src={rocket.images[0]}
              alt={rocket.name}
              className="rocket-img"
            />
            <div className="rocket-data">
              <h1>{rocket.name}</h1>
              <p>{rocket.description}</p>
              <button type="button" onClick={handleClick} id={rocket.id}>Reserve</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RocketsPage;
