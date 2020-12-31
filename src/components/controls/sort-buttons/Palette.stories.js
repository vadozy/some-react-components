import React from 'react';

import Palette from './Palette';

import { SORT_BUTTONS, update, deepCopyButtons } from './sort-buttons-setup';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Palette,
  title: 'Controls/Sort Control/- 3 Palette',
  decorators: [
    Story => (
      <div
        style={{
          fontSize: '1.6rem',
          padding: '5px',
          backgroundColor: '#02f2f2',
          position: 'relative',
          width: '4rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = args => <Palette {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: update(deepCopyButtons(SORT_BUTTONS)),
  show: true,
};
