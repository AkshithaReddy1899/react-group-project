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
    <div className="mission-margin">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <h4>Missions</h4>
            </th>
            <th>
              <h4>Description</h4>
            </th>
            <th>
              <h4>Status</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>
                <h6>{mission.mission_name}</h6>
              </td>
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
