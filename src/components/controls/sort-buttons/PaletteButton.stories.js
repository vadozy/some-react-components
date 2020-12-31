import React from 'react';
import PaletteButton from './PaletteButton';

import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PaletteButton,
  title: 'Controls/Sort Control/- 2 Palette Button',
  decorators: [
    Story => (
      <div
        style={{
          fontSize: '1.6rem',
          padding: '5px',
          backgroundColor: '#f2f2f2',
          position: 'absolute',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = args => <PaletteButton {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Region',
};

export const TextFirst = Template.bind({});
TextFirst.args = {
  ...Text.args,
  first: true,
};

export const TextActive = Template.bind({});
TextActive.args = {
  ...Text.args,
  active: true,
};

export const FontAwesome = Template.bind({});
FontAwesome.args = {
  children: <FontAwesomeIcon icon={faSortAlphaDown} />,
};

export const FontAwesomeFirst = Template.bind({});
FontAwesomeFirst.args = {
  ...FontAwesome.args,
  first: true,
};

export const FontAwesomeActive = Template.bind({});
FontAwesomeActive.args = {
  ...FontAwesome.args,
  active: true,
};
