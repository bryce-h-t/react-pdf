import React from 'react';
import { StoryFn as Story, Meta } from '@storybook/react';
import List, { Item } from './List';

export default {
  title: 'Resume/List',
  component: List,
} as Meta;

const Template: Story<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Item key="1">Item 1</Item>,
    <Item key="2">Item 2</Item>,
    <Item key="3">Item 3</Item>,
  ],
};
