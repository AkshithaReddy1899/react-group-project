import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi, reserveRocket, cancelRocket } from '../../redux/rockets/rockets';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  const handleReserve = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  const handleCancel = (e) => {
    dispatch(cancelRocket(e.target.id));
  };

  return (
    <section className="rockets">
      <hr />
      <ul>
        {
          rockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              <img
                src={rocket.images[0]}
                alt={rocket.name}
                className="rocket-img"
              />
              <div className="rocket-data">
                <h1>{rocket.name}</h1>
                <p>
                  <span className="reserved">
                    {(rocket.reserved) ? 'Reserved' : ' ' }
                  </span>
                  {rocket.description}
                </p>
                {
                (rocket.reserved)
                  ? <button type="button" className="cancel-btn" onClick={handleCancel} id={rocket.id}>Cancel</button>
                  : <button type="button" className="reserve-btn" onClick={handleReserve} id={rocket.id}>Reserved</button>
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default RocketsPage;
