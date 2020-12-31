import React from 'react';
import styled from 'styled-components';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 2px;
  font-size: 40%;
  line-height: inherit;
  vertical-align: top;
  border: none;
  outline: unset;
  border-left: 1px solid red;
  cursor: pointer;
`;

function ButtonDropDown({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <FontAwesomeIcon icon={faAngleDown} />
    </StyledButton>
  );
}

export default ButtonDropDown;
