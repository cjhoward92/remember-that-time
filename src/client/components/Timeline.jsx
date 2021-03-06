import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ onClick }) => (
  <div
    role="main"
    className="timeline"
    onClick={onClick}
  >
    &nbsp;
  </div>
);

Timeline.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Timeline;
