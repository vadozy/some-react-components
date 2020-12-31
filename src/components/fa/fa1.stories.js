import React from 'react';

import FA1 from './fa1';

const stories = {
  component: FA1,
  title: 'FA/FontAwsome Example 01',
};
export default stories;

const Template = args => <FA1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  p1: 'Region',
};
