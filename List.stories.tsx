import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import List from './List';

export default {
  title: 'Resume/List',
  component: List,
} as Meta;

const Template: Story<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
  ],
};
