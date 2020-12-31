import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaletteButton from './PaletteButton';
import { flipOrder } from './sort-buttons-setup';

const Div = styled.div`
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  opacity: ${props => (props.show === true ? 1 : 0)};
  transition: opacity 0.2s;
`;

function Palette({ buttons, onClick, show }) {
  return (
    <Div show={show}>
      {buttons.map((button, index) => {
        const first = index === 0;
        const active = button.active;
        const sortBy = button.sortBy;
        const order = active ? flipOrder(button.order) : button.order;
        return (
          <PaletteButton
            key={button.key}
            active={active}
            first={first}
            onClick={() => onClick(sortBy, order)}
          >
            {button.icon}
          </PaletteButton>
        );
      })}
    </Div>
  );
}

Palette.propTypes = {
  onClick: PropTypes.func,
  show: PropTypes.bool,
  buttons: PropTypes.array.isRequired,
};

export default Palette;
