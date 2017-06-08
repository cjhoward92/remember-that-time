import React, { PropTypes } from 'react';

const Timeline = ({ onClick }) => (
    <div className="timeline" onClick={onClick}>
        &nbsp;
    </div>
)

Timeline.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Timeline