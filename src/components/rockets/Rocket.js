import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();

  const rocket = props;
  const {
    id,
    name,
    images,
    description,
    reserved,
  } = rocket.rocket;

  const handleClick = (e) => {
    if (!reserved) {
      dispatch(reserveRocket(e.target.id));
    } else {
      dispatch(cancelRocket(e.target.id));
    }
  };

  return (
    <li key={id} className="rocket-item">
      <img
        src={images[0]}
        alt={name}
        className="rocket-img"
      />
      <div className="rocket-data">
        <h1>
          {name}
        </h1>
        <p>
          <span className="reserved">
            {(reserved) ? 'Reserved' : ' ' }
          </span>
          {description}
        </p>
        {
          (reserved)
            ? <button type="button" className="cancel-btn" onClick={handleClick} id={id}>Cancel</button>
            : <button type="button" className="reserve-btn" onClick={handleClick} id={id}>Reserved</button>
        }
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.instanceOf(Array).isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
