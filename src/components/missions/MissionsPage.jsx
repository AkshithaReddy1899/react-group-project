import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Table from 'react-bootstrap/Table';
import { getMissionsFromAPI } from '../../redux/missions/missions';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missionsReducer);
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsFromAPI());
  }, []);

  return (
    <div>
      <h1>missions statement</h1>
    </div>
  );
};

export default MissionsPage;
