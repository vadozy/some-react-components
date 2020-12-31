import React from 'react';
import PropTypes from 'prop-types';
import SortButtons from './SortButtons';
import { SORT_BY } from './sort-buttons-setup';

function SortButtonsControl({ onClick, sortBy, order }) {
  return (
    <SortButtons onClick={onClick} sortBy={sortBy} order={order}></SortButtons>
  );
}

SortButtonsControl.propTypes = {
  onClick: PropTypes.func,
  sortBy: PropTypes.oneOf([
    SORT_BY.VALUE,
    SORT_BY.ALPHA,
    SORT_BY.ALLOCATION,
    SORT_BY.SELECTION,
  ]).isRequired,
  order: PropTypes.oneOf(['desc', 'asc']),
};

export default SortButtonsControl;
