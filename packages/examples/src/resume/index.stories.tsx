import React from 'react';
import Index from './index';

export default {
  title: 'Resume/Index',
  component: Index,
};

// Template for the Index component
const Template = (args) => <Index {...args} />;

// IndexProps: {
//   size: 'A4' | 'A5' | [number, number] // 'A4' for standard A4 size, 'A5' for A5 size, or an array of numbers for custom dimensions
//   orientation: 'portrait' | 'landscape' // 'portrait' for portrait page orientation, 'landscape' for landscape orientation
// }

// Define stories for the Index component
export const Default = Template.bind({});
Default.args = {
  size: 'A4',
};

export const Landscape = Template.bind({});
Landscape.args = {
  size: 'A4',
  orientation: 'landscape',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: [380, 1250],
};

// Add more stories as needed to cover different states of the Index component
