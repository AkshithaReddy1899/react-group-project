import React from 'react';

const RocketButton = (id) => {
  const handleClick = () => {
    console.log('OM');
    console.log(id);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Reserve Rocket</button>
    </div>
  );
};

export default RocketButton;
