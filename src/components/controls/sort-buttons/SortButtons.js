import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import ButtonDropDown from './ButtonDropDown';
import Palette from './Palette';
import {
  SORT_BUTTONS,
  SORT_BY,
  update,
  filterAndOrderVisibleButtons,
  flipOrder,
  deepCopyButtons,
} from './sort-buttons-setup';

const Div = styled.div`
  font-size: 1.6rem; /* Use this to adjust the size of buttons */
  line-height: 2.4rem; /* Use this to adjust the height of the group */
  background-color: white;
  border: solid red 1px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
`;

function SortButtons({ sortBy, order, onClick }) {
  const memoizedButtons = useMemo(() => deepCopyButtons(SORT_BUTTONS), []);
  const allButtons = useRef(memoizedButtons);
  const [showPalette, setShowPalette] = useState(false);

  update(allButtons.current, sortBy, order); // inplace update

  const visibleButtons = filterAndOrderVisibleButtons([...allButtons.current]); // array copy

  return (
    <Div onMouseLeave={() => setShowPalette(false)}>
      <Palette
        show={showPalette}
        buttons={[...allButtons.current]}
        onClick={onClick}
      />
      {visibleButtons.map((button, index) => {
        const first = index === 0;
        const active = button.active;
        const sortBy = button.sortBy;
        const order = active ? flipOrder(button.order) : button.order;
        return (
          <Button
            key={button.key}
            active={active}
            first={first}
            onClick={() => onClick(sortBy, order)}
          >
            {button.icon}
          </Button>
        );
      })}
      <ButtonDropDown onClick={() => setShowPalette(!showPalette)} />
    </Div>
  );
}

SortButtons.propTypes = {
  onClick: PropTypes.func,
  sortBy: PropTypes.oneOf([
    SORT_BY.VALUE,
    SORT_BY.ALPHA,
    SORT_BY.ALLOCATION,
    SORT_BY.SELECTION,
  ]).isRequired,
  order: PropTypes.oneOf(['desc', 'asc']).isRequired,
};

SortButtons.defaultProps = {
  sortBy: SORT_BY.VALUE,
  order: 'desc',
};

export default SortButtons;
