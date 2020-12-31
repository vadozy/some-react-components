import React from 'react';
import styled from 'styled-components';
import {
  faSortAlphaDown,
  faSortAlphaDownAlt,
  faSortNumericDown,
  faSortNumericDownAlt,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Div = styled.div`
  font-size: 1.6rem;
  line-height: 2rem; /* Use this to adjust the height of the group */
  background-color: yellow;
  display: inline-block;

  border: cyan 1px solid;
  border-radius: 2px;

  & div,
  button {
    cursor: pointer;
  }
`;

function fa1({ p1 }) {
  return (
    <Div>
      <div
        style={{
          display: 'inline-block',
          padding: '0 5px',
        }}
      >
        {p1}
      </div>
      <button
        style={{
          backgroundColor: 'lightpink',
          padding: '0 2px',
          font: 'inherit',
          border: 'none',
          outline: 'unset',
          borderLeft: 'cyan 1px solid',
        }}
      >
        <FontAwesomeIcon icon={faSortAlphaDown} />
      </button>
      <div
        style={{
          display: 'inline-block',
          backgroundColor: 'mediumspringgreen',
          padding: '0 2px',
          borderLeft: 'cyan 1px solid',
        }}
      >
        <FontAwesomeIcon icon={faSortNumericDown} />
      </div>
      <div
        style={{
          display: 'inline-block',
          padding: '0 5px',
          borderLeft: 'cyan 1px solid',
        }}
      >
        Gics
      </div>
      <button
        style={{
          backgroundColor: 'lightpink',
          padding: '0 2px',
          font: 'inherit',
          border: 'none',
          outline: 'unset',
          borderLeft: 'cyan 1px solid',
        }}
      >
        <FontAwesomeIcon icon={faSortAlphaDownAlt} />
      </button>
      <div
        style={{
          display: 'inline-block',
          backgroundColor: 'mediumspringgreen',
          padding: '0 2px',
          borderLeft: 'cyan 1px solid',
          color: 'magenta',
        }}
      >
        <FontAwesomeIcon icon={faSortNumericDownAlt} />
      </div>
      <button
        style={{
          fontSize: '40%',
          lineHeight: 'inherit',
          verticalAlign: 'top',
          padding: '0 2px',
          border: 'none',
          borderLeft: 'cyan 1px solid',
          outline: 'unset',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    </Div>
  );
}

export default fa1;
