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
//   experienceData: array of experience entries // Array of objects representing individual experiences
// }

// Mock experience data
const mockExperienceData = [
  {
    company: 'Company A',
    position: 'Position A',
    date: '2020 - Present',
    details: ['Detail A1', 'Detail A2'],
  },
  {
    company: 'Company B',
    position: 'Position B',
    date: '2018 - 2020',
    details: ['Detail B1', 'Detail B2'],
  },
];

// Define stories for the Index component
export const Default = Template.bind({});
Default.args = {
  size: 'A4',
  experienceData: mockExperienceData,
};

export const Landscape = Template.bind({});
Landscape.args = {
  size: 'A4',
  orientation: 'landscape',
  experienceData: mockExperienceData,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: [380, 1250],
  experienceData: mockExperienceData,
};

// Add more stories as needed to cover different states of the Index component
