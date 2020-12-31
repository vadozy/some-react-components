import React, { useState } from 'react';

import SortButtons from './SortButtons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: FinalContainer,
  title: 'Controls/Sort Control/- 5 Final',
};

const Template = args => <FinalContainer {...args} />;

export const Default = Template.bind({});

function FinalContainer() {
  const [order, setOrder] = useState('desc');
  const [sortBy, setSortBy] = useState('value');

  const onClick = (p1, p2) => {
    setSortBy(p1);
    setOrder(p2);
  };

  return <SortButtons order={order} sortBy={sortBy} onClick={onClick} />;
}
