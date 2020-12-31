import React from 'react';

import SortButtons from './SortButtons';
import { SORT_BY } from './sort-buttons-setup';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: SortButtons,
  title: 'Controls/Sort Control/- 4 SortButtons',
  argTypes: {
    // creates a specific argType based on the iconMap object
    sortBy: {
      control: {
        type: 'radio',
        options: Object.values(SORT_BY),
      },
    },
  },
};

const Template = args => <SortButtons {...args} />;

export const ValueDesc = Template.bind({});
ValueDesc.args = {
  sortBy: SORT_BY.VALUE,
  order: 'desc',
};

export const ValueAsc = Template.bind({});
ValueAsc.args = {
  sortBy: SORT_BY.VALUE,
  order: 'asc',
};

export const AlphaDesc = Template.bind({});
AlphaDesc.args = {
  sortBy: SORT_BY.ALPHA,
  order: 'desc',
};

export const AlphaAsc = Template.bind({});
AlphaAsc.args = {
  sortBy: SORT_BY.ALPHA,
  order: 'asc',
};

export const AllocationDesc = Template.bind({});
AllocationDesc.args = {
  sortBy: SORT_BY.ALLOCATION,
  order: 'desc',
};

export const AllocationAsc = Template.bind({});
AllocationAsc.args = {
  sortBy: SORT_BY.ALLOCATION,
  order: 'asc',
};

export const SelectionDesc = Template.bind({});
SelectionDesc.args = {
  sortBy: SORT_BY.SELECTION,
  order: 'desc',
};

export const SelectionAsc = Template.bind({});
SelectionAsc.args = {
  sortBy: SORT_BY.SELECTION,
  order: 'asc',
};
