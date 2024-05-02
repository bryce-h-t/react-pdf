import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'Test/TestComponent',
  component: TestComponent,
};

const Template = (args) => <TestComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Test Component',
  active: true,
  count: 0,
};
