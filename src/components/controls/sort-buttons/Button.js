import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 2px;
  font: inherit;
  border: none;
  outline: unset;
  width: ${props => (typeof props.children === 'string' ? null : '1.3em')};
  cursor: pointer;
  border-left: ${props => (props.first ? 'none' : '1px solid red')};
  color: ${props => (props.active ? 'magenta' : 'none')};
`;

function Button(props) {
  return <StyledButton {...props} />;
}

Button.propTypes = {
  onClick: PropTypes.func,
  first: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default Button;
