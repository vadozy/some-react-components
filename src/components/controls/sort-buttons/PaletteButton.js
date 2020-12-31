import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPaletteButton = styled.button`
  display: block;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 2px;
  font: inherit;
  border: solid #ccc 1px;
  outline: unset;
  width: ${props => (typeof props.children === 'string' ? null : '1.4em')};
  cursor: pointer;
  border-top: ${props => (props.first ? 'solid #ccc 1px' : 'none')};
  border-radius: ${props => (props.first ? '2px 2px 0 0' : null)};
  color: ${props => (props.active ? 'magenta' : 'none')};
`;

function PaletteButton(props) {
  return <StyledPaletteButton {...props}></StyledPaletteButton>;
}

PaletteButton.propTypes = {
  onClick: PropTypes.func,
  first: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default PaletteButton;
