import React from 'react';
import PropTypes from 'prop-types';

function TreeControl({ p1 }) {
  return <div>Tree goes here {p1}</div>;
}

TreeControl.propTypes = {
  p1: PropTypes.string,
};

export default TreeControl;
