import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMissionsFromAPI } from '../../redux/missions/missions';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const [member, setMember] = useState('Not a member');

  const handleMember = (mission, e) => {
    if (mission.mission_id === e.target.id) {
      setMember('Active Member');
    }
  };

  useEffect(() => {
    dispatch(getMissionsFromAPI());
  }, []);

  return (
    <div>
      <h1>Missions Statement</h1>
      <Table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{member}</td>
              <td>
                <button
                  id={mission.mission_id}
                  onClick={(e) => handleMember(mission, e)}
                  type="button"
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsPage;
