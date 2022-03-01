import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from '../../redux/rockets/rockets';

const RocketsPage = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  console.log(rockets);
  return (
    <div>Rockets</div>
  );
};

export default RocketsPage;
