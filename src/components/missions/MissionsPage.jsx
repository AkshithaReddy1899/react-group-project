import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMissionsFromAPI } from '../../redux/missions/missions';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsFromAPI());
  }, []);

  return (
    <div>
      <h1>missions statement</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th>{''}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>1</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>Not a Member</td>
              <td>
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsPage;
