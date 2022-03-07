import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const MissionMember = ({ joinId }) => {
  const getStatus = useSelector((state) => state.missionStore);

  let res;
  getStatus.forEach((v) => {
    if (v.reserve === true && v.id === joinId) {
      res = v.reserve;
    }
  });

  return (
    <div>
      {res && <p className="success">Active Member</p>}
      {!res && <p className="danger">Not a Member</p>}
    </div>
  );
};

MissionMember.propTypes = {
  joinId: PropTypes.string.isRequired,
};

export default MissionMember;
