import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMissionsFromAPI } from '../../redux/missions/missions';
import JoinMission from './JoinMission';
import MissionMember from './MissionMember';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

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
              <td>
                <MissionMember
                  joinId={mission.mission_id}
                  missionName={mission.mission_name}
                />
              </td>
              <td>
                <JoinMission
                  joinId={mission.mission_id}
                  missionName={mission.mission_name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsPage;
